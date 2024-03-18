"use client";
import React, { useState } from "react";
import axios from "axios"; // for making HTTP requests
import { z, ZodError } from "zod"; // Import Zod

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  image: z.any(), // Zod validation for the image will be performed separately
});

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleImageChange = (e) => {
    console.log(e);

    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      FormSchema.parse(formData); // Validate formData with Zod

      const formDataWithImage = new FormData();
      formDataWithImage.append("email", formData.email);
      formDataWithImage.append("password", formData.password);
      formDataWithImage.append("image", image);
      console.log(formDataWithImage);

      // Send the form data to the server
      const response = await axios.post(
        "/http://127.0.0.1:8000/api/image-upload",
        formDataWithImage
      );

      // Handle response as needed
      console.log(response.data);
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle Zod validation errors
        setErrors(error.errors);
      } else {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      {errors.email && <span>{errors.email}</span>}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      {errors.password && <span>{errors.password}</span>}
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        multiple
      />
      {errors.image && <span>{errors.image}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ImageUpload;
