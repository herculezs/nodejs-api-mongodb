# Node.js API with MongoDB

This project is a simple Node.js Express API that connects to a MongoDB database to retrieve user data. It includes a GET endpoint to fetch user details based on a user ID.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/herculezs/nodejs-api-mongodb.git
   cd nodejs-api-mongodb
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

4. **Run the application:**
   ```
   npm start
   ```

## Usage

To retrieve user details, make a GET request to the following endpoint:

```
GET /users/:id
```

Replace `:id` with the actual user ID. The API will return the user's details in JSON format if the user is found and is over the age of 21. If the user is not found, a 404 Not Found response will be returned.
