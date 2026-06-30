import { useState } from "react";

export default  function MemebertForm() {
    async function handleSubmit(event) {
        event.preventDefault();
        
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await fetch('https://social-activity-admin.onrender.com/api/v1/request/bn', {
                method: 'POST',
                body: formData,
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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Father's Name</label>
                    <input
                        type="text"
                        name="father_name"
                        value={formData.father_name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Mother's Name</label>
                    <input
                        type="text"
                        name="mother_name"
                        value={formData.mother_name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Blood Group</label>
                    <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div>
                    <label>Address</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Profession</label>
                    <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>NID</label>
                    <input
                        type="text"
                        name="NID"
                        value={formData.NID}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    );
}