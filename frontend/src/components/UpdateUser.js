import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CommonLayout from './CommonLayout';
import Swal from 'sweetalert2';

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    dob: ''
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          name: data.name || '',
          email: data.email || '',
          password: '',
          dob: data.dob || ''
        });
      })
      .catch(err => console.error('Failed to fetch user', err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Updated!',
          text: 'User updated successfully.',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/user');
        });
      } else {
        const errorData = await res.json();
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: JSON.stringify(errorData),
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Update failed',
        text: 'Something went wrong while updating the user.'
      });
    }
  };

  return (
    <CommonLayout>
      <div className="card shadow">
        <div className="card-header">
          <h5>Update User</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label className="form-label">Name:</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="form-control"
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
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Password (leave blank to keep unchanged):</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="form-control"
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
            <button type="submit" className="btn btn-primary w-100">Update User</button>
          </form>
        </div>
      </div>
    </CommonLayout>
  );
};

export default UpdateUser;
