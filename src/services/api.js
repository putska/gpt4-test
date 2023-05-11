import axios from "axios";

const API_URL = "http://localhost:3000/api";

// fetch all names from the API
export const fetchNames = async () => {
  const response = await axios.get(`${API_URL}/names`);
  return response.data;
};

// add a new name to the API
export const addName = async (name) => {
  const response = await axios.post(`${API_URL}/names`, name);
  return response.data;
};

// update an existing name in the API
export const updateName = async (name) => {
  const response = await axios.put(`${API_URL}/names/${name.id}`, name);
  return response.data;
};

// delete an existing name from the API
export const deleteName = async (id) => {
  const response = await axios.delete(`${API_URL}/names/${id}`);
  return response.data;
};
