import { useParams } from "react-router-dom";
import useProtectedAll from "../../hooks/useProtectedAll";
import useDetailUser from "../../hooks/useDetailUser";
import useUpdateUser from "../../hooks/useUpdateUser";
import { useState, useEffect } from "react";

const UpdateUserAdmin = () => {
    useProtectedAll(["admin", "superadmin"]);
    const { id } = useParams(); // Extract `id` from URL params
    const { userDetail, loading: userLoading, user } = useDetailUser(id);
    const [loading, setLoading] = useState(false);
    const { userUpdate } = useUpdateUser();
    // State untuk mengelola data form
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        fotoProfil: null, // Untuk file upload
        password: "",
        confirmPassword: "",
    });

    console.log(formData)

    // Populate formData ketika `user` berhasil di-fetch
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

    // Handle perubahan input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle file upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({
            ...prev,
            fotoProfil: file,
        }));
    };

    // Handle form submission
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
            // Kirim data ke backend menggunakan userUpdate
            await userUpdate(id, formDataToSend);
        } catch (error) {
            console.error("Update failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                    <div>
                        <label className="" htmlFor="firstName">First Name</label><br />
                        <input
                            className="w-1/2 rounded-lg border-2 border-gray-200 p-3 text-sm"
                            placeholder="First Name"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="" htmlFor="lastName">Last Name</label><br />
                        <input
                            className="w-1/2 rounded-lg border-2 border-gray-200 p-3 text-sm"
                            placeholder="Last Name"
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="" htmlFor="email">Email</label><br />
                        <input
                            className="w-1/2 rounded-lg border-2 border-gray-200 p-3 text-sm"
                            placeholder="Email Address"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="" htmlFor="phone">Phone</label><br />
                        <input
                            className="w-1/2 rounded-lg border-2 border-gray-200 p-3 text-sm"
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="" htmlFor="fotoProfil">Profile Photo</label><br />
                        <input
                            className="w-1/2 rounded-lg border-2 border-gray-200 p-3 text-sm"
                            type="file"
                            id="fotoProfil"
                            name="fotoProfil"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div>
                        <label className="" htmlFor="confirmPassword">Old Password</label><br />
                        <input
                            className="w-1/2 rounded-lg border-2 border-gray-200 p-3 text-sm"
                            placeholder="Old Password"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="" htmlFor="password">New Password</label><br />
                        <input
                            className="w-1/2 rounded-lg border-2 border-gray-200 p-3 text-sm"
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

export default UpdateUserAdmin;
