Steps:
1) Clone from Github.
2) In the root directory, run "npm install" and "npm install nodemon".
3) Create a env file in the root directory and add two property, DB_CONNECT and TOKEN_SECRET.
4) In DB_CONNECT, add your mongo db url, in TOKEN_SECRET, add a random string.
5) In the root dir, run "nodemon server.js".

Now you are are ready to run the project in your machine.

API:
1) /api/user/register
Functionality Added: Prevent short User name.
Payload Example:
{
   "name" : "testName",
   "email" : "test@gmail.com",
   "password": "testpass"
}

2) /api/user/login
Use : To login in a user through its email and password.
Functionality Added: 1) Report Wrong Email or Wrong Password.
You can test the wrong email or wrong password Functionality, by sending a wrong password for a registered user.
Payload Example:
{
   "email" : "test@gmail.com",
   "password": "testpass"
}


3) /api/dashboard
Use: To respond with user specific dashboard.
Payload Example:
In request header.
Add key : auth-token
And take any token value of a logged in user as its value.
