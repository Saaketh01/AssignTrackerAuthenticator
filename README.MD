## Authenticator
Description : This project is an extension of the Assignment Tracker project, where two-factor authentication (2FA) was implemented. Users are required to log in before they can perform any CRUD (Create, Read, Update, Delete) operations on the assignment tracker. This ensures that only authenticated users have access to the system, adding an extra layer of security.

Key Features:
Login System: Users must log in to access the assignment tracker.
Two-Factor Authentication (2FA): After entering their username and password, users are required to verify their identity via a second factor, such as a verification code sent to their email or mobile device.
CRUD Operations: Once logged in and authenticated, users can perform CRUD operations on the assignments, such as adding, updating, reading, or deleting assignments.

Technologies Used:
HTML/CSS: Used for creating the login page and styling the user interface.
JavaScript & jQuery: Used for front-end functionality, including handling login and authentication flow.
Express.js: The back-end framework used to handle login requests, authentication, and CRUD operations.
Node.js: Runtime environment for the Express.js server. 
