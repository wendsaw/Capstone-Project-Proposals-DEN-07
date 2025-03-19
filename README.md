Capstone Project Proposal – DEN-07
Live Demo: https://wend-jobs.onrender.com

Project Title:
Job Search Application – Wend Jobs

Project Description:
Wend Jobs is a modern job search application designed to provide users with innovative tools to find their dream jobs efficiently and seamlessly. The platform focuses on delivering a user-friendly interface, secure user authentication, and direct job application functionality.

Technical Specifications
The application is developed using the MERN stack, which ensures a robust, scalable, and responsive user experience:

Frontend: React.js
Backend: Node.js and Express.js
Database: MongoDB
This tech stack offers a seamless integration between the client interface and server operations.

Architecture Overview
The application is structured into two main components:

Frontend (Client-side)
Backend (Server-side)
Frontend Overview
The frontend allows users to interact with all features of the platform through a combination of public and private pages.

Public Pages (Accessible to all visitors):
Home Page: Introduction to the platform and its features.
Login Page: User authentication interface.
Sign Up Page: New user registration.
About Page: Overview of the platform’s mission and goals.
Private Pages (Accessible to authenticated users only):
Profile Page: Manage user profile details and preferences.
Help Section:
FAQ Page: Answers to commonly asked questions.
Contact Page: A form for users to reach customer support.
Application Page: Allows authenticated users to submit job applications directly into the database.
Backend Overview
The backend handles all data processing and server-side logic, providing full control to developers for managing database operations.

There are four major API routes, each managed by its respective controller:

Authentication Routes: Handles user login, registration, and secure access control.
Application Routes: Manages job application form submissions.
Contact Routes: Processes inquiries submitted through the contact form.
Job Listings Routes: Provides access to available job postings stored in the database.