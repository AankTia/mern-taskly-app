import { db } from "../libs/dbConnect.js";
import { ObjectId } from "mongodb";

const collection = db.collection("tasks");

export const getTasksByUser = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 4;
    const query = { owner: new ObjectId(req.params.id) };

    const { status } = req.query;
    if (status) {
      query["status"] = status;
    }

    const tasks = await collection
      .find(query)
      .limit(pageSize)
      .skip((page - 1) * pageSize)
      .toArray();

    const taskCount = await collection.count(query);

    res.status(200).json({ tasks, taskCount });
  } catch (error) {
    console.log(`getTasksByUser Params: ${req.params}`);
    next({ status: 500, error });
  }
};

export const getTask = async (req, res, next) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const task = await collection.findOne(query);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    next({ status: 500, error });
  }
};

export const createTask = async (req, res, next) => {
  try {
    const newTask = req.body;
    newTask.owner = new ObjectId(req.user._id);
    newTask.createdAt = new Date();
    newTask.updatedAt = new Date();

    const task = await collection.insertOne(newTask);

    res.status(201).json(task);
  } catch (error) {
    next({ status: 500, error });
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const data = {
      $set: {
        ...req.body,
        owner: new ObjectId(req.body.owner),
        updatedAt: new Date(),
      },
    };
    const options = { returnDocument: "after" };

    const updatedTask = await collection.findOneAndUpdate(query, data, options);

    res.status(200).json(updatedTask);
  } catch (error) {
    next({ status: 500, error });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    await collection.deleteOne(query);

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    next({ status: 500, error });
  }
};
