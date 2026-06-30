import { useState } from "react";

export default function MemebertForm() {
    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await fetch('https://social-activity-admin.onrender.com/api/v1/request/bn', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                console.log('Upload successful!');
            }
        } catch (error) {
            console.error('Error uploading:', error);
        }
    }

    const [formData, setFormData] = useState({
        name: "",
        father_name: "",
        mother_name: "",
        bloodGroup: "",
        address: "",
        phone: "",
        profession: "",
        NID: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const fields = [
        { name: "name", label: "Name", type: "text" },
        { name: "father_name", label: "Father's Name", type: "text" },
        { name: "mother_name", label: "Mother's Name", type: "text" },
        { name: "bloodGroup", label: "Blood Group", type: "select", options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
        { name: "address", label: "Address", type: "textarea" },
        { name: "phone", label: "Phone", type: "tel" },
        { name: "profession", label: "Profession", type: "text" },
        { name: "NID", label: "NID", type: "text" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Member Registration</h1>
                <p className="text-gray-500 text-center mb-8">Fill out the form to join our community</p>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
                    {fields.map(({ name, label, type, options }) => (
                        <div key={name}>
                            <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-1.5">
                                {label}
                            </label>
                            {type === "select" ? (
                                <select
                                    id={name}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                                >
                                    <option value="">Select {label}</option>
                                    {options.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            ) : type === "textarea" ? (
                                <textarea
                                    id={name}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                />
                            ) : (
                                <input
                                    id={name}
                                    type={type}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
}