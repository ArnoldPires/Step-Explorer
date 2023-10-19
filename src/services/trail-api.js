import axios from 'axios';

// Base URL of the Express backend
const baseURL = 'http://localhost:3001';

// Fetch all trails
export const getTrail = async () => {
    try {
        const response = await axios.get(baseURL);
        return response.data; // Directly returning the data
    } catch (error) {
        console.error('There was an error fetching the trails:', error);
        return null; 
    }
}

// Fetch a single trail by ID
export const getTrailById = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error fetching the trail with id: ${id}`, error);
        return null; 
    }
}

// Update a trail by ID
export const editTrail = async (id, updatedTrail) => {
    try {
        const response = await axios.put(`${baseURL}/${id}`, updatedTrail);
        return response.data;
    } catch (error) {
        console.error(`There was an error updating the trail with id: ${id}`, error);
        return null; 
    }
}

// Create a new trail
export const createTrail = async (trail) => {
    try {
        const response = await axios.post(baseURL, trail);
        return response.data;
    } catch (error) {
        console.error('There was an error creating the trail:', error);
        return null; 
    }
}

// Delete a trail by ID
export const deleteTrail = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`There was an error deleting the trail with id: ${id}`, error);
        return null; 
    }
}