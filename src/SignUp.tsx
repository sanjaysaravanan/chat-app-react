import React, { useState } from "react";

interface SignUpFormData {
  fullName: string;
  email: string;
  phone: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("auth", "true");
    location.reload();
    // You can send the form data to your backend or perform any other actions here
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="border w-4/5 p-2 rounded m-2"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            className="border w-4/5 p-2 rounded m-2"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="border w-4/5 p-2 rounded m-2"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
