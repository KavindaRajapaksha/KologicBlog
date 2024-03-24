**Project Title: Kologic Blog**

## Overview:
This repository contains the source code for Kologic Blog, a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), Firebase, and deployed on the Render platform. The frontend is built with Vite React.

## Features:
- **User Authentication**: Implemented user authentication using Firebase Authentication for secure access to the blog.
- **CRUD Operations**: Allows users to create, read, update, and delete blog posts.
- **Responsive Design**: Ensured that the blog is responsive and accessible across various devices.
- **Deployment**: Successfully deployed the application on the Render platform for public access.

## Technologies Used:
- **Frontend**:
  - React.js
  - Vite React
  - HTML/CSS
- **Backend**:
  - Node.js
  - Express.js
- **Database**:
  - MongoDB
  - Firebase
- **Deployment**:
  - Render

## Setup Instructions:
1. Clone the repository: `git clone https://github.com/yourusername/kologic-blog.git`
2. Navigate to the project directory: `cd kologic-blog`
3. Install dependencies:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
4. Set up Firebase:
   - Create a Firebase project and set up Firebase Authentication.
   - Obtain Firebase configuration details.
5. Set up MongoDB:
   - Install MongoDB and ensure it's running locally or use a cloud-hosted MongoDB service.
   - Obtain MongoDB connection URI.
6. Configure environment variables:
   - Create a `.env` file in the `backend` directory and add the following variables:
     ```
     PORT=3001
     MONGODB_URI=YOUR_MONGODB_URI
     FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
     FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
     FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
     ```
7. Start the backend server:
   ```
   cd backend
   npm start
   ```
8. Start the frontend development server:
   ```
   cd frontend
   npm start
   ```

## Deployment:
This project is deployed on the Render platform. The deployment process involves:
- Setting up a Render account.
- Connecting the GitHub repository to Render for automatic deployments.
- Configuring environment variables on Render for production deployment.

## Demo:
Visit [Kologic Blog](https://kologicblog.onrender.com) to explore the live demo.

## Credits:
- This project is created and maintained by [Your Name].
- Contributions are welcome. Feel free to submit issues and pull requests.

## License:
This project is licensed under the [MIT License](LICENSE).
