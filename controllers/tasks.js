import mongoose from "mongoose";
import Task from "../collection/Task.js";
export const getAllTasks = async (req, res, next) => {
  let tasks;
  try {
    tasks = await Task.find();
  } catch (error) {
    return console.log(error);
  }
  if (tasks) return res.status(200).json({ tasks });
  return res.status(404).json({ message: "Enter data" });
};
export const createTask = async (req, res, next) => {
  const { name, completed } = req.body;
  const tasks = new Task({
    name,
    completed,
  });
  try {
    await tasks.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ tasks });
};
export const getTaskById = async (req, res, next) => {
  const id = req.params.id;
  let existingTask;
  try {
    existingTask = await Task.findById(id);
  } catch (error) {
    return console.log(error);
  }
  if (existingTask) {
    try {
      return res.status(201).json({ existingTask });
    } catch (error) {
      return console.log(error);
    }
  }
  return res.status(404).json({ message: "No user present of this id" });
};
export const updateTask = async (req, res, next) => {
  const id = req.params.id;
  const { name, completed } = req.body;
  let existingTask;
  try {
    existingTask = await Task.findByIdAndUpdate(id, {
      name,
      completed,
    });
  } catch (error) {
    return console.log(error);
  }
  if (existingTask) return res.status(201).json({ existingTask });
  return res.status(400).json({ message: "No task found of this id" });
};
export const deleteTask = async (req, res, next) => {
  const id = req.params.id;
  let existingTask;
  try {
    existingTask = await Task.findByIdAndDelete(id);
  } catch (error) {
    return console.log(error);
  }
  if (existingTask) return res.status(201).json({ existingTask });
  return res.status(400).json({ message: "No task found of this id" });
};
