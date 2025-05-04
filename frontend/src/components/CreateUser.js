import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import CommonLayout from "./CommonLayout";

const CreateUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'User Created!',
          text: 'The user has been created successfully.',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/user');
        });
      } else {
        const errorData = await res.json();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Error: ${JSON.stringify(errorData)}`,
          confirmButtonText: 'Try Again',
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while creating the user.',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <CommonLayout>
      <div className="card shadow">
        <div className="card-header">
          <h5>Create User</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="user-form">
            <div className="mb-1">
              <label className="form-label">Name:</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter full name"
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Email:</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter email address"
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Password:</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date of Birth:</label>
              <input
                name="dob"
                type="date"
                value={form.dob}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Create User</button>
          </form>
        </div>
      </div>
    </CommonLayout>
  );
};

export default CreateUser;
