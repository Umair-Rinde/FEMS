
# Farmer Empowerment Management System

## Overview

The Farmer Empowerment Management System is a web application aimed at empowering farmers by providing them with various tools and resources to manage their agricultural activities effectively. This project utilizes NestJS for the backend, Next.js for the frontend, and a combination of JavaScript (JS) and TypeScript (TS) languages along with React for the user interface.

## Features

- **User Authentication**: Allows farmers to register and login securely to access the system.
- **Profile Management**: Farmers can manage their profiles, including personal information, contact details, and farm details.
- **Dashboard**: Provides an overview of important metrics and data related to the farmer's activities such as crop status, weather updates, market prices, etc.
- **Crop Management**: Enables farmers to add, update, and monitor information about the crops they are cultivating, including planting dates, expected harvest, and current status.
- **Task Management**: Allows farmers to create and manage tasks related to farming activities such as irrigation, fertilization, pest control, etc.
- **Resource Library**: Provides access to a repository of articles, guides, and other resources to help farmers enhance their knowledge and skills.
- **Marketplace**: Facilitates buying and selling of agricultural products by connecting farmers with potential buyers or sellers.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Next.js**: A React framework for building server-side rendered (SSR) and statically generated web applications.
- **JavaScript (JS)**: A popular programming language for building interactive web applications.
- **TypeScript (TS)**: A superset of JavaScript that adds static typing and other advanced features to the language.
- **React**: A JavaScript library for building user interfaces.
- **Sequelize ORM**: A promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **PostgreSQL**: An open-source relational database management system.

## Getting Started

To get started with the Farmer Empowerment Management System, follow these steps:

1. **Clone the Repository**: Clone the project repository to your local machine:

   ```
   git clone https://github.com/your-username/farmer-empowerment-management-system.git
   ```

2. **Install Dependencies**: Navigate to the project directory and install the dependencies for both the backend (NestJS) and frontend (Next.js) applications:

   ```
   cd FEMS
   cd backend
   npm install
   
   cd ../frontend
   npm install
   ```

3. **Set Up Environment Variables**: Configure the necessary environment variables required for the application to run. Ensure you have PostgreSQL installed and running, and update the database connection string in the backend `.env` file.

4. **Run Seeders**: Run Sequelize seeders to populate the database with initial data:

   ```
   cd backend
   npx sequelize-cli db:seed:all
   ```

5. **Run the Application**: Start the backend server and frontend development server:

   - Start the NestJS backend server:
     ```
     cd backend
     npm run start:dev
     ```

   - Start the Next.js frontend server:
     ```
     cd frontend
     npm run dev
     ```

6. **Access the Application**: Once the servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser.

## Contributing

Contributions to the Farmer Empowerment Management System are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure the code follows the project's coding standards.
3. Write tests for your changes if applicable.
4. Push your changes to your fork and submit a pull request to the `main` branch of the main repository.


## Acknowledgements

- Thanks to the developers and contributors of NestJS, Next.js, React, Sequelize ORM, PostgreSQL, and other open-source projects used in this project.
