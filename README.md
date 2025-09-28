# devtinder web

- create a vite + react
- remove unnecessary code and create a hello world application
- Install tailwind css
- https://daisyui.com/
- install daisyui
- add navbar component to app.jsx
- create a navbar.jsx seperate component file
- https://reactrouter.com/home
- https://reactrouter.com/6.30.1/start/tutorial
- npm install react-router-dom
- installed my react router dom
- create BrowserRouter > routes > Route =/ Body > RouteChildern
- create an outlet in your Body Component
- create a footer
- create a login page
- npm i axios
- Cors - install cors in backend => add middleware to with configuration : origin , credentials = true
- whenever you are making api call so pass axios=>{ withcredentials : true}
- https://redux-toolkit.js.org/introduction/getting-started
- npm install @reduxjs/toolkit react-redux
- install redux toolkit
- configure store =? provider => createslice => add reducer to store
- add redux dev tools in chrome 
- login and see if your data is comming properly in the store 
- navbar should update as soon as user login 
- refractor our code to add constants file + create a components folder 
# it will make an api call on changing the url and loading 
- you should not be  able to access other routes without login 
- if token is not present redirect user to login page 
- logout feature implemented 
- get the feed and added the feed to store 
- build the user card in the feed 
- edit profile 
- see all my connections 
- feature - accept/reject connection request 

- send /igonre  the user card from feed
- signup new user
- E2E testing 

Body
Navbar
Route = / => Feed
Route =/login => login
Route =/connections => Connections
Route =/profile => profile




# SENDNG EMAIL VIS SES

- create a IAM user 
- give access to AmazonSESFullAccess
- amazon ses: create an identity 
- verify your domain name 
- verify an email address identity
- https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html
- https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html
- https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html
- https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_ses_code_examples.html
- install AWS sdk  -V3
- https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/ses/src/ses_sendemail.js
- https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/ses/src/libs/sesClient.js
- setup sesclient
- access credentials should be created in IAM _ security credetnials tab account
- add the credentials to the new file 
- write code for ses client 
- write code for sending email address
- make the email dynamic by passing params to the run function 



# REAL TIME CHAT USING WEBSOCKET(Socket.io)
- https://socket.io/
- build the ui for chat window on /chat/:touserId path 
- setup socket.io in backend 
- npm install socket.io in backend 
- npm i socket.io-client in ui 
- https://socket.io/docs/v4/client-options/#auth
- initialize the chat
- create socket connection 
- listen to events
- homework is improve ui
- fix security bug  - can i send messages to person who is not our friend - yes for now 
- Auth in web sockets
- show green symbol when online (ladt seen 2 hours ago )
- limit message when fetching form db 
- build pagination 
- project ideas - tic-tac-toe, chess game 



deploy the changes 
- ssh "sdmvnsfdjv"
- cd devTinder
- git pull
- npm install
- pm2 list
- pm2 restart 0
- pm2 flush
- pm2 logs
- cd ../devTinder-web/
- git pull 
- npm install 
- npm run build
- ctrl+r fro back search 
- sudo scp -r dist/* /var/www/html
- on page of deployed url will get not found page we need to in nginx
- sudo nano /etc/nginx/sites-available/default
- in location .{ // for all single page applications 
    try_files $url /index.html
}
- save the file 
- sudo systemctl restart nginx
