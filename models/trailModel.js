import { Schema, model } from "mongoose";

const logSchema = new Schema(
  {
    title: { type: String, required: true },
    entry: { type: String, required: true },
    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Log = model("Log", logSchema);

// Define the operations using the Log model

export const find = async () => {
  try {
    return await Log.find({});
  } catch (error) {
    throw error;
  }
};

export const create = async (data) => {
  try {
    return await Log.create(data);
  } catch (error) {
    throw error;
  }
};

export const findById = async (id) => {
  try {
    return await Log.findById(id);
  } catch (error) {
    throw error;
  }
};

export const findByIdAndUpdate = async (id, data) => {
  try {
    return await Log.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw error;
  }
};

export const findByIdAndRemove = async (id) => {
  try {
    return await Log.findByIdAndRemove(id);
  } catch (error) {
    throw error;
  }
};