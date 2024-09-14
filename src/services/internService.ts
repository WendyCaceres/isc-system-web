import axios from "axios";
import apiClient from "./apiInstance";

export const getInternService = async (intern_id: number) => {
  try {
    const response = await apiClient.get(`/interns/${intern_id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return { error: "Failed to get intern" };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data.message || "Network error" };
    } else {
      return { error: "An unexpected error occurred" };
    }
  }
};

export const getInternData = async (intern_id: number) => {
  try {
    const response = await apiClient.get(`/interns/${intern_id}/informacion`);
    if (response.status === 200) {
      return response.data;
    } else {
      return { error: "Failed to get intern" };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data.message || "Network error" };
    } else {
      return { error: "An unexpected error occurred" };
    }
  }
};

export const getInternEvents = async (intern_id: number) => {
  try {
    const response = await apiClient.get(`/interns/${intern_id}/my-events`);
    if (response.status === 200) {
      return response.data;
    } else {
      return { error: "Failed to get intern events" };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data.message || "Network error" };
    } else {
      return { error: "An unexpected error occurred" };
    }
  }
};

export const getInternList = async () => {
  try {
    const response = await apiClient.get(`/interns/`);
    if (response.status === 200) {
      return response.data;
    } else {
      return { error: "Failed to get intern events" };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data.message || "Network error" };
    } else {
      return { error: "An unexpected error occurred" };
    }
  }
};


export const getInternInformation = async (user_id: number) => {
  try {
    const response = await apiClient.get(`/interns/${user_id}/intern`);
    if (response.status === 200) {
      return response.data;
    } else {
      return { error: "Failed to get intern events" };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data.message || "Network error" };
    } else {
      return { error: "An unexpected error occurred" };
    }
  }
};
