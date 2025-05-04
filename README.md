# Goqii-Assignment
---

## 🔧 Part 1: Backend Development (Laravel)

### ✅ Objective

Develop a RESTful API using Laravel to perform CRUD operations on a User entity.

### 📦 Requirements

- PHP >= 8.1
- Composer
- MySQL
- Laravel CLI

### 🧾 User Entity Schema

- `id` (int, auto-increment)
- `name` (string)
- `email` (string, unique)
- `password` (string, hashed)
- `dob` (date)
- `created_at`, `updated_at` (timestamps)

### 🧪 API Endpoints

| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | `/api/users`       | Fetch all users     |
| GET    | `/api/users/{id}`  | Fetch user by ID    |
| POST   | `/api/users`       | Create a new user   |
| PUT    | `/api/users/{id}`  | Update user details |
| DELETE | `/api/users/{id}`  | Delete a user       |

---

## 🖥️ Part 2: Frontend Development (React.js)

### ✅ Objective

Create a user interface using React that communicates with the backend API.

### 📦 Requirements

- Node.js >= 14.x
- npm (Node Package Manager)

### 🔧 Features

- Add a new user via form
- View users in a list
- Edit user information
- Delete users

---

## 🗄️ Part 3: Database Management (MySQL)

### ✅ Objective

Design a SQL schema for the user entity and connect it to the Laravel backend.

### 💾 MySQL Table Definition

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    dob DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);




### Setup Instructions
### Step 1: Backend Setup (Laravel)

cd Goqii
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve


### This will start the backend API at:
http://localhost:8000



### Step 2: Frontend Setup (React.js)

cd Goqii/frontend
npm install
npm start



### GitHub Repository:
https://github.com/abdullah8098/Goqii-Assignment
