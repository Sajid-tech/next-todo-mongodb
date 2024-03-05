import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isImportant: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    userEmail: {
        type: String,
        required: true

    },
    userName: {
        type: String,
        required: true
    }
});

const Task = mongoose?.models?.Task || mongoose.model("Task", TaskSchema);

export default Task;
