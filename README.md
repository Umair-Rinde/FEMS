# Farmer Empowerment Management System

## Overview

The Farmer Empowerment Management System is a web application aimed at empowering farmers by providing them with various tools and resources to manage their agricultural activities effectively. This project utilizes Django for the backend, Next.js for the frontend, and a combination of JavaScript (JS) and TypeScript (TS) languages along with React for the user interface.

## Features

- **User Authentication**: Allows farmers to register and log in securely to access the system.
- **Profile Management**: Farmers can manage their profiles, including personal information, contact details, and farm details.
- **Dashboard**: Provides an overview of important metrics and data related to the farmer's activities, such as crop status, weather updates, market prices, etc.
- **Crop Management**: Enables farmers to add, update, and monitor information about the crops they are cultivating, including planting dates, expected harvest, and current status.
- **Task Management**: Allows farmers to create and manage tasks related to farming activities such as irrigation, fertilization, pest control, etc.
- **Resource Library**: Provides access to a repository of articles, guides, and other resources to help farmers enhance their knowledge and skills.
- **Marketplace**: Facilitates buying and selling of agricultural products by connecting farmers with potential buyers or sellers.

## Technologies Used

- **Django**: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
- **Next.js**: A React framework for building server-side rendered (SSR) and statically generated web applications.
- **JavaScript (JS)**: A popular programming language for building interactive web applications.
- **TypeScript (TS)**: A superset of JavaScript that adds static typing and other advanced features to the language.
- **React**: A JavaScript library for building user interfaces.
- **Sequelize ORM**: A promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **PostgreSQL**: An open-source relational database management system.

## Prerequisites

- **Python**: Version 3.10
- **Node.js and npm**: Latest stable versions (for frontend development)
- **PostgreSQL**: Latest version (for database management)

## Setup Guide

To get started with the Farmer Empowerment Management System, follow these steps:

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/farmer-empowerment-management-system.git
```

### 2. Set Up Python Environment for Django Backend

Navigate to the project directory and set up a virtual environment with Python 3.10.

```bash
cd farmer-empowerment-management-system
cd backend
python3.10 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 3. Install Backend Dependencies

Install all the required Python packages using `pip` and the `requirements.txt` file.

```bash
pip install -r requirements.txt
```

### 4. Set Up Environment Variables

Create a `.env` file in the `backend` directory with the following environment variables (adjust as needed):

```plaintext
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=postgres://username:password@localhost:5432/your-database-name
```

Make sure PostgreSQL is installed and running. Update `DATABASE_URL` with your PostgreSQL credentials.

### 5. Set Up PostgreSQL Database

Create a new PostgreSQL database for the project.

```bash
# Access PostgreSQL
psql -U postgres

# Inside psql, create the database
CREATE DATABASE your_database_name;

# Exit psql
\q
```

### 6. Run Migrations and Seed Initial Data

Apply Django migrations to set up the database schema. You can also load initial data if provided in the form of fixtures.

```bash
python manage.py migrate
python manage.py loaddata initial_data  # Optional: if there's a fixture for initial data
```

### 7. Start the Django Backend Server

Run the backend server locally:

```bash
python manage.py runserver
```

### 8. Set Up Frontend Dependencies

In a new terminal, navigate to the `frontend` directory and install the required Node.js dependencies:

```bash
cd ../frontend
npm install
```

### 9. Start the Next.js Frontend Server

Start the Next.js frontend server for local development:

```bash
npm run dev
```

### 10. Access the Application

Once both servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser.

## Additional Setup Notes

- **Seeding Database**: Use Django’s built-in fixtures or custom scripts to seed any initial data if required for development.
- **Static Files**: Configure static files as needed for production deployment.
- **Production Setup**: Set `DEBUG=False` in production and configure database and server settings appropriately.

## Contributing

Contributions to the Farmer Empowerment Management System are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure the code follows the project's coding standards.
3. Write tests for your changes if applicable.
4. Push your changes to your fork and submit a pull request to the `main` branch of the main repository.

## Acknowledgements

- Thanks to the developers and contributors of Django, Next.js, React, Sequelize ORM, PostgreSQL, and other open-source projects used in this project.
