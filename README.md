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
Body
Navbar
Route = / => Feed
Route =/login => login
Route =/connections => Connections
Route =/profile => profile
