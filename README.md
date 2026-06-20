 # RBAC Node.js System

A Role-Based Access Control (RBAC) system built with Node.js, Express, and MongoDB.

## Features

- JWT Authentication (Register & Login)
- 3 Roles — Admin, Manager, User
- Protected routes with middleware
- Password hashing with bcrypt

## Tech Stack

Node.js, Express.js, MongoDB (Mongoose), JWT, bcryptjs

## Setup

```bash
git clone https://github.com/soomromustafa/Rbac_Nodejs.git
cd Rbac_Nodejs/rbac
npm install
```

Create a `.env` file with:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

Run with:

```bash
node server.js
```
