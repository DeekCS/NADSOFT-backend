# NADSOFT-backend Documentation

## Introduction
NADSOFT-backend is a simple backend application for NADSOFT, developed using Node.js, Express.js, and MySQL. The project utilizes Docker Compose for MySQL connection management through a `.env` file.

## Requirements
Ensure that you have the following tools and dependencies installed before setting up the project:

- Node.js
- MySQL
- Docker
- Docker Compose
- Postman
- Any Code Editor (VSCode, Sublime Text, Atom, etc)
- Git
- NPM
- Nodemon
- Express.js
- MySQL Workbench (Optional)

## Installation
1. Clone the repository using the following command:
   ```bash
   git clone [repository_url]
   ```
2. Run the following command to install project dependencies:
   ```bash
   npm install
   ```

3. Start the server with the following command:
   ```bash
   npm start
   ```
4. Open Postman to test the endpoints at [http://localhost:3000](http://localhost:3000).
5. Explore API Documentation at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).
6. Access the provided [POSTMAN Collection](https://documenter.getpostman.com/view/18985386/2s9YywdJPP) for additional testing.

## MySQL Database Setup
- Use MySQL Workbench (Optional) or any preferred MySQL client to view the database.
- Alternatively, use Docker Compose to manage the MySQL database.

### Running MySQL Database using Docker Compose
1. Start the MySQL database with the following command:
   ```bash
   docker-compose up
   ```
2. Stop the MySQL database with:
   ```bash
   docker-compose down
   ```
3. Start the MySQL database in detached mode:
   ```bash
   docker-compose up -d
   ```

## Database Configuration
Ensure the `.env` file contains the correct database connection details:

```env
DATABASE_URL="mysql://root:admin@123@localhost:3306/nadsoft"
MYSQL_ROOT_PASSWORD="admin@123"
MYSQL_DATABASE="nadsoft"
MYSQL_USER="root"
MYSQL_PASSWORD="admin@123"
```
