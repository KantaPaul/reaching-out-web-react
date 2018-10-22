# project-with-less

This project was bootstrapped with Create React App.

Below you will find some information on how to perform common tasks.
You can find the most recent version of this guide here.

Table of Contents

"build:dev": "webpack",
    npm run build:dev
    
"build:pord": "webpack -p --env production",
    npm run build:pord

"dev-server": "webpack-dev-server",
    npm run dev-server
    
"start": "node server/server.js",
    npm run start
    
"heroku-postbuild": "npm run build:pord"
    npm run heroku-postbuild