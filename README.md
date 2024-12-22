# Postman Bookstore API Test Collection

This repository contains a Postman Collection designed to test the endpoints of the **Bookstore API**. This collection includes all the necessary tests for interacting with the API, including operations for managing books, users, and orders.

## About the Bookstore API
The Bookstore API allows users to:
- Add, update, and delete books.
- View books by category or author.
- Register and authenticate users.
- Place, update, and delete orders.

### Base URL:
`https://api.bookstore.com`

### Authentication:
This API requires **Bearer Token** authentication. You need to generate a token by logging in or registering as a user.

## How to Use the Postman Collection

### Step 1: Download the Postman Collection
1. Download the `bookstore-api-collection.json` file from this repository.
2. Open **Postman**.

### Step 2: Import the Collection
1. In Postman, click on the **Import** button in the upper left corner.
2. Select the **File** tab and upload the `bookstore-api-collection.json` file.

### Step 3: Set Up Environment Variables
For easy testing, it's recommended to set up Postman environment variables. 
- **Base URL**: Set the environment variable `{{base_url}}` to `https://api.bookstore.com`.
- **Bearer Token**: Set the environment variable `{{auth_token}}` with your valid API token.

### Step 4: Run the Requests
Once the collection is imported and the environment is set up, you can start running the requests:
- Open the Postman collection.
- Select a request and hit **Send** to test the API endpoint.
- View the results in the Postman console.

## Available Endpoints

### 1. **Books**
- `GET /books`: Retrieve all books.
- `POST /books`: Add a new book.
- `PUT /books/{id}`: Update book details by ID.
- `DELETE /books/{id}`: Delete a book by ID.

### 2. **Users**
- `POST /users/register`: Register a new user.
- `POST /users/login`: Login to the bookstore.

### 3. **Orders**
- `GET /orders`: Get all orders for the authenticated user.
- `POST /orders`: Place a new order.
- `DELETE /orders/{id}`: Cancel an order by ID.

## Tests Included
- **Status Code Validation**: Ensure that the correct HTTP status codes are returned for each request.
- **Response Body Validation**: Verify that the correct data is returned in the response body (e.g., book details, user info).
- **Authorization Checks**: Ensure that protected endpoints require a valid Bearer Token.

## Contributing
Feel free to fork this repository and contribute to improving the Postman collection by:
- Adding more test cases for additional endpoints.
- Updating the collection as the API evolves.
- Reporting any issues with the collection or the API.


