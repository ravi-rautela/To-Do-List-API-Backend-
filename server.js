// Import necessary modules
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const Task = require('./Schema/taskSchema');

const dbConnection = require('./db');

// Initialize express app
const app = express();
app.use(express.json());

// Connect to MongoDB
dbConnection();



// Endpoints

// 1. POST /tasks: Create a new task
app.post('/tasks', async (req, res) => {
    try {
        // Create a new task
        const { title, description } = req.body;
        const task = new Task({ title, description });
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        // Handle validation errors
        res.status(400).send({ error: error.message });
    }
});

// 2. GET /tasks: Fetch all tasks
app.get('/tasks', async (req, res) => {
    try {
        // Fetch all tasks
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// 3. GET /tasks/:id: Fetch a task by its ID
app.get('/tasks/:id', async (req, res) => {
    try {
        // Fetch a task by its ID
        const task = await Task.findById(req.params.id);
        // Handle task not found
        if (!task) return res.status(404).send({ error: 'Task not found' });
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// 4. PUT /tasks/:id: Update the task status
app.put('/tasks/:id', async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'in-progress', 'completed'].includes(status)) {
            return res.status(400).send({ error: 'Invalid status value' });
        }

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!task) return res.status(404).send({ error: 'Task not found' });
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// 5. DELETE /tasks/:id: Delete a task by its ID
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).send({ error: 'Task not found' });
        res.status(200).send({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
