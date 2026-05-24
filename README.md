# DevTinder

- created  a Vite + React application
- removed uneccessary code 
- Installed TailwindCss
- Installed DaisyUI
- Added NavBar Component to App.jsx
- Installed react router-dom
- Created BrowserRouter => Router => Route => </Body> RouteChildren
- Created Outlet in Body Component
- Created Footer Component
- Installed axios
- CORS => Installed cros in backend => added middleware to with configurations : origin,credentials:true
- when we make API call so pass {withcredentials:true}
- Installed and @reduxjs/toolkit + react-redux
- configureStore => Provide the store and createSlice => add reducer to store
- Add redux dev tools
- Login and see if your data is coming properly in store
- NavBar should update as soon as user logs in
- Refactored my file structure
- you should not be access other routes without login
- if token is not present, redirect user to login page
- once user logs out redirect to login page
- Logout feature build
- Get the feed and add the feed in the store
- build the user card on feed
- edit profile feature build
- added toast message on save profile
- see all loggedin user connections
- see all loggedin user incoming connection requests



Body
   NAVBar
   Route =/ => feed
   Route =/login => Login
   Route =/conncetions => Connections
   Route =/profile => profile
