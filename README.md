# BitChat

Introducing **BitChat**: a free, web-based, real-time chatting application built using Socket.io. With BitChat, you can seamlessly connect with friends and colleagues, enjoying smooth and instant communication. Designed for ease of use and reliability, BitChat brings you closer to the people who matter, no matter where you are. Join the conversation today with BitChat!

# Features
The user can login his credentials and can have all his chat records whether previous chats or new ones.
The user can signup and start chatting with the available users .
The BitChat app uses the socket.io for real time conversation between two users , and is designed with MUi styles, every user gets its dp randomly generated based in gender check.
The email and passwords are properly secured. No user can Signup with same email Id, to secure the passwords we use becrypt hashing at the backend.

# Project Structure
```
  chatapp/
  |
  ├── chatFrontend/  > Contains client-side application code
  │   └── ...  > Client-side files (React, JavaScript, CSS, HTML, etc.)
  ├── Backend/  > Contains server-side application code
  │   └── ...  > Server-side files (Node.js, MongoDB, etc.)
  └── README.md  > This file contains project documentation.
```

## Project Setup 🚀

Follow these steps to set up the project:

### Environment Variables
```
  PORT
  └── The Port on which the Server will listen.
  MONGO_URL
  └── Your MongoDB Credentials.
  JWT_SECRET
  └── A Secret Key to generate a digital signature.
```

### Install Dependencies 💻

#### Frontend
```
cd chatFrontend
npm i
```

#### Backend
```
cd Backend
npm i
```

### Run Locally 🏃
#### Client
```
cd chatFrontend
npm run dev
```

#### Server
```
cd Backend
npm start
```
