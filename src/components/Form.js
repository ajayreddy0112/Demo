import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <input
          type="text"
          placeholder="Enter your first name"
          value={formData.firstName}
          name="firstName"
          onChange={handleInput}
        ></input>
        <input
          type="text"
          placeholder="Enter your last name"
          value={formData.lastName}
          name="lastName"
          onChange={handleInput}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
