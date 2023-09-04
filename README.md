# Interview-Prep API
Interview Preparation is the final project of Brainstation, serving as the graduation project or capstone.

The primary objective of this project was to apply all the knowledge acquired throughout the bootcamp and collectively produce the best possible outcome.

This project is presented to the public, as well as to companies and recruiters attending Demo Day at Brainstation.

Technologies and npm packages used (sorted alphabetically):
- Axios
- bcryptjs
- Cors
- dotenv
- Express
- Figma
- Heroku
- HTML5
- JavaScript
- Jest
- jsonwebtoken
- Knex
- MySQL
- Netlify
- Nodemon
- React
- react-router-dom
- SCSS

# Scope Description
In today's highly competitive job market, technical interviews play a crucial role in determining the success of candidates seeking roles in the technology industry. Technical interviews assess a candidate's ability to solve complex problems, apply theoretical knowledge, and showcase their practical skills. However, many individuals face significant challenges during technical interviews, leading to missed opportunities and feelings of inadequacy.

We propose the development of a comprehensive online platform dedicated to addressing the challenges faced by individuals preparing for technical interviews. This platform will offer an integrated and adaptable learning experience.

# Deploy this site, or test it deployed with Heroku and Netlify

This site utilizes a fronted that can be found in the Git repository: 
https://github.com/nescensanecati/interview-prep-api

The API has been configured for production and is currently running on Heroku under the domain:
https://database-backend-brainstation-70fdd396b787.herokuapp.com/

If you wish to see this project deployed and in action, please visit: 
https://interview-prep.alex-diaz.info/

# Local Deployment Instructions
If you'd like to run this project locally, follow these steps:

Step 1: Download the project files to your computer. You can choose one of the following options:
- Clone the repository to a local folder of your choice.
- Download the zip file from the repository and unzip it in a folder on your computer.

Step 2: Open the folder in Visual Studio Code. You can do this using various methods, but this guide might be helpful:
https://learn.microsoft.com/en-us/visualstudio/ide/develop-code-in-visual-studio-without-projects-or-solutions?view=vs-2022#open-any-code

Step 3: Launch a terminal in Visual Studio Code and install the necessary 'npm' packages.
- You can access the terminal in VS Code with this guide:  https://code.visualstudio.com/docs/terminal/basics
- Once in the project folder, run the following command: npm install

Step 4: You will need to have MySQL running locally. Follow this guide for your operating system:
MacOS: https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/macos-installation-pkg.html
Windows:  https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html

Step 5: You will need to run MySQL Workbench to be able to modify the databases.

Step 6: You will need to create a database in your MySQL server. You can do this by running: `CREATE SCHEMA interview-prep`;

Step 7: Modify the .env file in your project folder with the following configurations:
```
PORT=8080
BACKEND_URL='http://localhost'
JWT_KEY='add the string that is going to be used to use with the DB'
DB_HOST='127.0.0.1'
DB_LOCAL_DBNAME='interview-prep'
DB_LOCAL_USER='root'
DB_LOCAL_PASSWORD='add your local MySQL root password here'
```

Step 8: Once MySQL and the database is online, you will need to run the Knex commands to populate the database: 
- `npx knex migrate:latest` (This command will create all the necessary tables and key relations)
- `npx knex seed:run` (This command will populate all tables with the required data)

Step 9: Once the API is ready, and MySQL is running, to host the API locally, run the following command in your terminal (the same one you used in Step 3, within the project's local folder root): `npm start`.

These corrected instructions should help you deploy the project locally more effectively.