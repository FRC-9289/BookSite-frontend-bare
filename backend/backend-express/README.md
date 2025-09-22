# Backend-Express

This repository contains the backend for managing API calls related to user registration, submissions, and other related operations. It is built using [Express.js](https://expressjs.com/), a fast and minimalist web framework for Node.js.

## Features

- **User Registration**: Handles API calls for registering users.
- **Submissions Management**: Provides endpoints to view, approve, and revoke submissions.
- **Error Handling**: Implements robust error handling for both client and server errors.
- **Logging**: Uses `pino` for structured logging.

## Project Structure
backend-express/ 
    ├── bin/ │ 
    └── app # Entry point for the application 
    ├── handlers/ │ 
        ├── configured.js # Configured route handler 
        ├── simple.js # Simple route handler 
    ├── index.js # Main application logic 
    ├── routes.js # Route definitions 
    ├── package.json # Project metadata and dependencies 
    └── README.md # Project documentation


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend-express

2. Install dependencies:
   
   ```npm install```
3. Running the Server
   ```npm start```

The server will start on `http://localhost:8000` by default