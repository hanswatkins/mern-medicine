# ManyMeds

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) for managing medicine inventory and prescriptions. It provides features for adding, updating, and deleting medicines, as well as creating and managing prescriptions for patients.

## Table of Contents

- [ManyMeds](#manymeds)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Medicine management: Users can add new medicines, update existing medicines, and delete medicines from the inventory.
- Prescription management: Users can create prescriptions for patients, specifying the required medicines and dosages.
- Dashboard: Users have access to a dashboard where they can view and manage their medicines and prescriptions.
- Search functionality: Users can search for medicines by name or prescription by patient name.
- Responsive design: The application is mobile-friendly and adapts to different screen sizes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hanswatkins/mern-medicine.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mern-medicine
   ```

3. Install the dependencies for both the server and client:

   ```bash
   npm install
   cd client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root of the project.
   - Add the following environment variables to the file:

     ```
     MONGODB_URI=<your_mongodb_uri>
     SECRET_KEY=<your_secret_key>
     ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to see the application.

## Usage

1. Register a new user account or log in with an existing account.
2. Add medicines to the inventory by providing the necessary details such as name, dosage, and quantity.
3. Create prescriptions for patients, specifying the required medicines and dosages.
4. View and manage your medicines and prescriptions on the dashboard.
5. Use the search functionality to find specific medicines or prescriptions by name or patient name.
6. Log out when you are finished using the application.

## Technologies

This application uses the following technologies:

- Frontend:
  - React.js: JavaScript library for building user interfaces.
  - React Router: Library for handling client-side routing.
  - Axios: Promise-based HTTP client for making API requests.
- Backend:
  - Node.js: JavaScript runtime environment.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing application data.
  - Mongoose: MongoDB object modeling tool for Node.js.
  - JSON Web Tokens (JWT): Authentication mechanism for securing routes.
  - Bcrypt: Library for hashing and salting passwords.
- Styling:
  - CSS: Cascading Style Sheets for styling the user interface.
  - Bootstrap: Frontend CSS framework for responsive design.
- Deployment:
  - Heroku: Cloud platform for deploying the application.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).