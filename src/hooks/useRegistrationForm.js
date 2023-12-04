// react router dom imports
import { useNavigate } from "react-router-dom";

// custom hooks import
import useAuthProvider from "./useAuthProvider";
import useLoginRegistrationProvider from "./useLoginRegistrationProvider";
import useAxiosPublic from "./../hooks/useAxiosPublic";

// img bb api related
const imageUploadAPIKey = import.meta.env.VITE_imgbbApiKey;
const imageUploadAPI = `https://api.imgbb.com/1/upload?key=${imageUploadAPIKey}`;

// custom hook body starts here
const useRegistrationForm = () => {
  // extract functions from auth context
  const {
    signup,
    updateUserProfile,
    setUserAlreadyRegistered,
    setAppLoading,
    setUserShouldExist,
    setProfileData,
  } = useAuthProvider();

  // axios extraction
  const axiosPublic = useAxiosPublic();

  // extract functions from login and registration context
  const { registrationInfo, setRegistrationInfo } =
    useLoginRegistrationProvider();

  // create the navigate function
  const navigate = useNavigate();

  // registration password validation
  const validatePassword = (password) => {
    const passwordErrors = [];

    const capitalLetterRegExp = /[A-Z]/;
    const specialCharsRegExp = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;

    if (password.length < 6) {
      passwordErrors.push("Passwords must be 6 characters");
    }

    if (!capitalLetterRegExp.test(password)) {
      passwordErrors.push("Passwords must contain a capital letter");
    }

    if (!specialCharsRegExp.test(password)) {
      passwordErrors.push("Passwords must contain a special character");
    }

    return passwordErrors;
  };

  const validateInputs = (inputs) => {
    const { userName, photo, email, password } = inputs;
    const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;

    const foundErrors = [];

    if (userName === "") {
      foundErrors.push("Must provide an username");
    }

    if (!photo) {
      foundErrors.push("Must provide a photo");
    }

    if (email === "") {
      foundErrors.push("Must provide an email address");
    } else if (!emailRegex.test(email)) {
      foundErrors.push("Must provide a valid email address");
    }

    if (password === "") {
      foundErrors.push("Must provide a password");
    } else {
      foundErrors.push(...validatePassword(password));
    }

    return foundErrors;
  };

  // function to run when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistrationInfo((prev) => {
      return { ...prev, errors: [] };
    });

    const form = e.target;

    const userName = form.name.value;
    const photo = form.file.files[0];
    const email = form.email.value;
    const password = form.password.value;

    const dataObject = {
      userName,
      photo,
      email,
      password,
    };

    const foundErrors = validateInputs(dataObject);

    // if there are no erros user can register
    if (foundErrors.length > 0) {
      setRegistrationInfo((prev) => {
        return { ...prev, errors: foundErrors };
      });

      return;
    }

    // if there are no basic errors code will reach this line
    try {
      setAppLoading(true);
      const userExistsResponse = await axiosPublic.post("/checkUserExists", {
        email: registrationInfo.email,
      });

      // if user exists
      if (userExistsResponse.data.userExists) {
        setUserAlreadyRegistered(true);
        setAppLoading(false);
      } else {
        // if user doesn't exist
        // upload image to imgbb first
        const image = { image: dataObject.photo };
        const imageUploadResponse = await axiosPublic.post(
          imageUploadAPI,
          image,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
          }
        );

        // if upload to imgbb is successful then proceed to sign up in firebase
        if (imageUploadResponse.data.success) {
          const signupResponse = await signup(
            dataObject.email,
            dataObject.password
          );

          if (signupResponse.user) {
            // if firebase sign up successful update the profile first
            await updateUserProfile(
              dataObject.userName,
              imageUploadResponse.data.data.display_url
            );

            // save new user object to database
            const user = {
              name: dataObject.userName,
              email: dataObject.email,
              imageSource: imageUploadResponse.data.data.display_url,
              role: "user",
              rentedApartments: [],
            };

            // create user api call
            const userCreationResponse = await axiosPublic.post("/users", user);

            // if success
            if (userCreationResponse.data.success) {
              setProfileData(userCreationResponse.data.user);
              setUserShouldExist(true);
              localStorage.setItem("token", userCreationResponse.data.token);
              navigate("/");
              setAppLoading(false);
            }
          }
        }
      }
    } catch (error) {
      if (error) {
        setAppLoading(false);
        setRegistrationInfo((prev) => {
          return {
            ...prev,
            showSuccessToast: false,
            errors: [error.message],
          };
        });
      }
    }
  };

  return {
    registrationInfo,
    setRegistrationInfo,
    handleSubmit,
  };
};

export default useRegistrationForm;
