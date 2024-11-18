import axiosInstance from "../api/axiosInstance";

const userById = async (params, callback) => {
  try {
    const response = await axiosInstance.get("/users", {
      params: {
        id: params,
      },
    });
    const userData = response.data.data;
    callback("Success", userData);
  } catch (error) {
    const errorMessage = err.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
  }
};

const updateUser = async (params, data, callback) => {
  try {
    const response = await axiosInstance.patch("/users", data, {
      params: {
        id: params,
      },
    });
    const userData = response.data.data;
    callback("Success", userData);
  } catch (error) {
    const errorMessage = err.response?.data?.message || "An error occurred";
    callback("Error", errorMessage);
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
