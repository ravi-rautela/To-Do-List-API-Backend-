# To-Do List API

This project is a REST API service for managing a simple to-do list application. It provides endpoints to create, retrieve, update, and delete tasks. The application is built using Node.js, Express, and MongoDB.

## Features

- Create a new task with a title, description, and status.
- Fetch all tasks.
- Fetch a task by its ID.
- Update the status of a task.
- Delete a task by its ID.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd todo-list-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the MongoDB server.

5. Run the application:
   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000`.

## Database Connection

The application connects to a MongoDB instance using Mongoose. By default, it connects to a local MongoDB server:

```
mongodb://localhost:27017/todo-list
```

Ensure that MongoDB is running locally, or update the connection string in the source code to point to your MongoDB instance.

## API Endpoints

### 1. Create a Task
**POST /tasks**

**Request Body:**
```json
{
  "title": "Task Title",
  "description": "Task Description"
}
```

**Response:**
```json
{
  "_id": "task-id",
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending"
}
```

### 2. Fetch All Tasks
**GET /tasks**

**Response:**
```json
[
  {
    "_id": "task-id",
    "title": "Task Title",
    "description": "Task Description",
    "status": "pending"
  }
]
```

### 3. Fetch a Task by ID
**GET /tasks/:id**

**Response:**
```json
{
  "_id": "task-id",
  "title": "Task Title",
  "description": "Task Description",
  "status": "pending"
}
```

### 4. Update Task Status
**PUT /tasks/:id**

**Request Body:**
```json
{
  "status": "in-progress"
}
```

**Response:**
```json
{
  "_id": "task-id",
  "title": "Task Title",
  "description": "Task Description",
  "status": "in-progress"
}
```

### 5. Delete a Task
**DELETE /tasks/:id**

**Response:**
```json
{
  "message": "Task deleted successfully"
}
```

## License

This project is licensed under the MIT License.

