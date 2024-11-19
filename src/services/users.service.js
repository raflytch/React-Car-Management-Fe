import axiosInstance from "../api/axiosInstance";

const userById = async (id) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data.data.user;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
};

const updateUser = async (id, data) => {
  try {
    const response = await axiosInstance.patch(`/users/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response?.data?.message || "An error occurred";
  }
};

const fetchUsers = async (page = 1, limit = 6) => {
  try {
    const response = await axiosInstance.get("/users", {
      params: {
        page: Number(page),
        limit: Number(limit),
      },
    });

    if (response.data.isSuccess) {
      return {
        success: true,
        data: response.data.data,
      };
    }
    return {
      success: false,
      message: response.data.message || "Failed to fetch users",
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred",
    };
  }
};

export { userById, updateUser, fetchUsers };
