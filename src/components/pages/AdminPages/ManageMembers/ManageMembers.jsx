// tanstack
import { useQuery } from "@tanstack/react-query";

// hooks
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import DashboardHeading from "../../../shared/DashboardHeading/DashboardHeading";

// components
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import NoData from "../../../shared/NoData/NoData";
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";

const ManageMembers = () => {
  const axiosPrivate = useAxiosPrivate();
  const {
    data: membersData,
    isLoading: membersDataLoading,
    refetch,
  } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosPrivate.get("/users/members");

      return res.data;
    },
  });

  const handleRemove = async (email) => {
    console.log(email);

    const updatedUser = {
      role: "user",
      agreementDate: "none",
      rentedApt: {
        floor: "none",
        block: "none",
        aptNo: "none",
      },
    };

    const res = await axiosPrivate.patch(`/users/${email}`, updatedUser);

    if (res.data.success) {
      refetch();
    }
  };

  return (
    <div>
      {/* Manage members section */}
      <section className="mb-sectionGapMd lg:mb-sectionGapLg">
        <DashboardHeading text="Current Members" modifyClasses="mb-7" />

        {membersDataLoading && <LoadingSpinner text="Members Loading" />}

        {!membersDataLoading && membersData.length < 1 && <NoData />}

        {!membersDataLoading && membersData.length > 0 && (
          <table className="block w-full text-sm">
            {/* head */}
            <thead className="block w-full border border-lightBorder mb-5">
              <tr className="w-full grid grid-cols-3 text-left">
                <th className="p-3">User Name</th>
                <th className="p-3">User Email</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody className="block w-full space-y-4">
              {membersData.map((member) => {
                return (
                  <tr
                    key={member._id}
                    className="w-full grid grid-cols-3 items-center"
                  >
                    <td className="p-3">{member.name}</td>
                    <td className="p-3">{member.email}</td>
                    <td>
                      <ButtonBtn
                        onClickFunction={() => {
                          handleRemove(member.email);
                        }}
                        text="Remove"
                        modifyClasses="bg-red-600 !py-1 hover:bg-red-500 border-0"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default ManageMembers;
