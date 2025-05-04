import React, { useState, useEffect } from "react";
import CommonLayout from "./CommonLayout";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DataTable from 'react-data-table-component';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const result = users.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase()) ||
             user.email.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredUsers(result);
  }, [search, users]);

  const fetchUsers = () => {
    fetch("http://127.0.0.1:8000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  };

  const handleCreateUser = () => {
    navigate('/user/create');
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:8000/api/users/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => {
          fetchUsers();
          Swal.fire('Deleted!', 'User has been deleted.', 'success');
        });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/user/edit/${id}`);
  };

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: '80px'
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Action',
      cell: row => (
        <div className="d-flex gap-2">
          <i
            className="bi bi-pencil-square text-primary"
            role="button"
            title="Edit"
            style={{ fontSize: '1.2rem' }}
            onClick={() => handleUpdate(row.id)}
          ></i>
          <i
            className="bi bi-trash text-danger"
            role="button"
            title="Delete"
            style={{ fontSize: '1.2rem' }}
            onClick={() => handleDelete(row.id)}
          ></i>
        </div>
      ),
      ignoreRowClick: true,
      button: "true"
    }
  ];


  return (
    <CommonLayout>
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">User List</h5>
          <button onClick={handleCreateUser} className="btn btn-light btn-sm bg-primary text-white">
            + Create User
          </button>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-12 col-md-6 col-lg-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="table-responsive">
            <DataTable
              columns={columns}
              data={filteredUsers}
              pagination
              highlightOnHover
              striped
              responsive
            />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default UserPage;

