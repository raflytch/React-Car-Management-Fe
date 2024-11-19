import { Link, useParams } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import useProtectedAll from "../../hooks/useProtectedAll";
import useDetailUser from "../../hooks/useDetailUser";
import useUpdateUser from "../../hooks/useUpdateUser";
import { useState, useEffect } from "react";

const UpdateUser = () => {
  useProtectedAll(["member"]);
  const { id } = useParams();
  const { user } = useDetailUser(id);
  const [loading, setLoading] = useState(false);
  const { userUpdate } = useUpdateUser();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fotoProfil: null,
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        fotoProfil: null,
        password: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      fotoProfil: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      if (formData.fotoProfil) {
        formDataToSend.append("fotoProfil", formData.fotoProfil);
      }
      formDataToSend.append("password", formData.password);
      formDataToSend.append("confirmPassword", formData.confirmPassword);
      await userUpdate(id, formDataToSend);
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg md:bg-gray-100 p-8 md:shadow-lg md:mx-32 md:my-16 lg:col-span-3 xl:p-12 xl:mx-96 xl:my-16">
      <Link
        to="/"
        className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors mb-6"
      >
        <HiArrowLeft className="text-xl" />
        <span className="underline">Back to home</span>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          encType="multipart/form-data"
        >
          <div>
            <label className="" htmlFor="firstName">
              First Name
            </label>
            <br />
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
              placeholder="First Name"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="" htmlFor="lastName">
              Last Name
            </label>
            <br />
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
              placeholder="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="" htmlFor="email">
              Email
            </label>
            <br />
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
              placeholder="Email Address"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="" htmlFor="phone">
              Phone
            </label>
            <br />
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
              placeholder="Phone Number"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="" htmlFor="fotoProfil">
              Profile Photo
            </label>
            <br />
            <input
              className="w-full rounded-lg border-2 bg-white border-gray-200 p-3 text-sm"
              type="file"
              id="fotoProfil"
              name="fotoProfil"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div>
            <label className="" htmlFor="confirmPassword">
              Old Password
            </label>
            <br />
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
              placeholder="Old Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="" htmlFor="password">
              New Password
            </label>
            <br />
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-sm"
              placeholder="New Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Update User
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdateUser;
