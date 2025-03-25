# JWT Authentication with Role-Based Access Control

This project implements JWT authentication with role-based access control using Node.js, JavaScript, and TypeORM. 

## Features

- User registration and login
- JWT token generation and verification
- Role-based access control for protected routes
- User management functionalities

## Project Structure

```
jwt-auth-app
├── src
│   ├── controllers          # Contains controllers for handling requests
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middlewares          # Contains middleware for authentication and authorization
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   ├── models               # Contains TypeORM models for User and Role
│   │   ├── User.js
│   │   └── Role.js
│   ├── routes               # Contains route definitions
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── services             # Contains business logic for authentication and user management
│   │   ├── authService.js
│   │   └── userService.js
│   ├── utils                # Contains utility functions for JWT handling
│   │   └── jwtUtils.js
│   ├── app.js               # Entry point of the application
│   └── database.js          # Database connection setup
├── package.json             # NPM configuration file
├── ormconfig.json           # TypeORM configuration file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd jwt-auth-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Use Postman or any API client to interact with the endpoints for user registration, login, and management.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.