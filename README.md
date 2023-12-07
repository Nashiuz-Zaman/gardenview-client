# Project GardenView

Live link: https://gardenview-aef1e.web.app/

This is a sample website project for an Apartment Complex. It is fully responsive and contains home page, apartments page, login and register pages and also the dashboard pages for user/member/admin. Majority of the website has been developed. Some parts are still under development.

# Language/Libraries/Frameworks

- React JS
- Tailwind CSS
- React Toastify
- React Icons
- Firebase Authentication
- Tanstack Query
- Axios
- Express
- MongoDB
- Mongoose

# Features

- Home page contains all the details about the apartment complex
- Apartments page contains all the current available flats/apartments
- Login and Register page features authentication using both firebase and also server side Express, MongoDB functionality.
- The website features dashboards for user/member/admin
- A toast is shown when somebody logs in, logs out and registers
- Users can book apartments which will send an agreement request to the admin. If the admin accepts, user will become a member and will get access to the member dashboard where they will be able to pay for their rent.
- If an apartment is booked, it will temporary have booked status and will no longer appear as currently available apartments. If the agreement request that was sent during the apartment booking gets denied by the admin, the flat will become available again.
