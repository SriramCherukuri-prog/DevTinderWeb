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
- Feature: Accept/Reject Connection Request 
- Send/Ignore te user card from the feed
- feature signup


# Deployment

- signup on AWS
- Launch Instance
- chmod 400 <secret>.pem
- ssh -i "<secret>.pem" ubuntu@ec2-<name>.compute.amazonaws.com
- installed node version 25.8.1
- git clone
- Frontend
      - npm install -> dependencies install
      - npm run build
      - sudo apt update
      - sudo apt install nginx
      - sudo systemctl start nginx
      - sudo systemctl enable nginx
      - copy code from dist(build files) to /var/www/html/ 
      - sudo scp -r dist/* /var/www/html/
      - enable port 80 on aws
- Backend
      - allowed ec2 instance public IP on mongodb server
      - installed npm i pm2 -g
      - pm2 start npm -- start
      - config nginx -/etc/nginx/sites-available/default
      - restart nginx - sudo systemctl restart nginx
      - modify the BASE_URL in frontend project to "/api"

location /api/ {
      proxy_pass http://127.0.0.1:2000/;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
}

