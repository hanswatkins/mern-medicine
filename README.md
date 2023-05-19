# ManyMeds

This is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) for managing medicine inventory and prescriptions. It provides features for adding, updating, and deleting medicines, as well as creating and managing prescriptions for patients. It was created out of necessity for a friend who was recently given a life-altering diagnosis and has to take various medications at specific times of day. They needed a simple interface to keep track of the medications they are taking, the dosages, and the times of day they should be taking the medications.

## Table of Contents

- [ManyMeds](#manymeds)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Planned Features](#planned-features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User authentication: Users can sign up, log in, and log out securely.
- Medicine management: Users can add new medicines, update existing medicines, and delete medicines from the inventory.
- Dashboard: Users have access to a dashboard where they can view and manage their medicines and prescriptions.
- Responsive design: The application is mobile-friendly and adapts to different screen sizes.

### Planned Features

- Create a "Took Meds" feature to track how many times a set of medications have been taken
- Visualize medications taken in a bar chart so that users can track days missed or "streaks"
- Create refill reminders for medications
- Create a forum section so that users can anonymously post about their conditions and talk about treatments that work for them
- Enable private messaging between users to share information they might not want to share publicly, such as doctor's names or other experiences

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

   - Create a `.env` file in the /api directory.
   - Add the following environment variables to the file:

     ```
     DATABASE_URI=paste-your-mongodb-connection-string-here
     ```

5. Start the development server:

   - in /client:

   ```bash
   npm run dev
   ```

   - in /api:

   ```bash
   nodemon index.js
   ```

6. Open your browser and visit `http://localhost:3000` to see the application.

## Usage

1. Register a new user account or log in with an existing account.
2. Add medicines to the inventory by providing the necessary details such as name, dosage, and quantity.
3. View and manage your medicines and prescriptions on the dashboard.
4. Quickly see which medications you need to take in the Morning, Afternoon, or Evening.
5. Log out when you are finished using the application.

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
  - TailwindCSS: Streamlined styling with utility classes for efficient development.
- Deployment:
  - Render: Cloud platform for deploying the application.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).
