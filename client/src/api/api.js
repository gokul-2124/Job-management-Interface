import axios from 'axios';

const API_BASE_URL = 'https://job-management-interface-flax.vercel.app/api';

// const API_BASE_URL = 'http://localhost:5000/api'; 

export const getJobs = async (filters = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Create a new job
export const createJob = async (jobData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/jobs`, jobData);
    return response.data;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
}
