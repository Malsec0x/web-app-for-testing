# Task Management App Testing

This project I clone from https://github.com/manthanank/task-management-app. I custome this web app with docker for practing security testing on web application.


This is a full-stack task management application built using Angular, Node.js, Express.js, and MongoDB. The application allows users to create, edit, delete, and view tasks. It also includes user authentication with JWT, forgot and reset password functionality, and responsive design using Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [License](#license)

## Features

- User authentication with JWT
- Home page as landing page
- Forgot and reset password functionality
- Add, edit, delete, and view tasks
- Filter tasks by status and priority
- Responsive design using Tailwind CSS

## Technologies Used

- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, Nodemailer
- Frontend: Angular, Tailwind CSS
- Authentication: JSON Web Tokens (JWT)

## Prerequisites

- Node.js (v14.x or later)
- Angular CLI (v18.x or later)
- MongoDB (local or remote instance)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Malsec0x/web-app-for-testing.git
    cd task-management-app
    ```
    
2. if you want to change a `.env` file in the `backend` directory, you can change with the following content:

    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    ```

3. Run Docker compose file:

    ```sh
    docker-compose up --build -d
    ```

## Running the Application

- The backend server will run on `http://localhost:5000`.
- The frontend server will run on `http://localhost:80`.

## API Endpoints

### Auth

- **POST /api/auth/signup**: Create a new user
- **POST /api/auth/login**: Authenticate a user and get a token
- **POST /api/auth/forgot-password**: Send password reset email
- **POST /api/auth/reset-password/:token**: Reset user password

### Tasks

- **GET /api/tasks**: Get all tasks
- **POST /api/tasks**: Create a new task
- **PUT /api/tasks/:id**: Update a task
- **DELETE /api/tasks/:id**: Delete a task

## Usage

1. **Sign Up**: Create a new account by navigating to the sign-up page.
2. **Log In**: Log in with your credentials to access the expense tracker.
3. **Forgot Password**: If you forget your password, use the forgot password link to reset it.
4. **Reset Password**: Follow the instructions in the reset password email to set a new password.
5. **Add Task**: Click on the add task button to create a new task. Fill in the details and click save.
6. **View Task**: Click on a task to view its details.
7. **Edit Task**: Click the edit button to update a task.
8. **Delete Task**: Click the delete button to remove a task.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
