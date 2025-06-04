# Store Rating Management Application

**Output Images**
![Image](https://drive.google.com/uc?export=view&id=1gN83PuYjssG901odejE2ZT4kZC6bYKGS)

![Image 1](https://drive.google.com/uc?export=view&id=1Q3E44C08zGnN90GSvbw13EMcobwDssU7)
![Image 2](https://drive.google.com/uc?export=view&id=1gUGDziuqRMOXMDVHnJHFrDmjUcZEhJ26)
![Image 3](https://drive.google.com/uc?export=view&id=1ZB-iqLAqICQtGOixV0nU7mOm0jph__XI)
![Image 4](https://drive.google.com/uc?export=view&id=1wMV19CPPd6xvWdeBsbaiSER8ctEOuSdJ)
![Image 5](https://drive.google.com/uc?export=view&id=1aIgA2cncqkpe4LW0lKESU2UWHfevyuF4)
![Image 6](https://drive.google.com/uc?export=view&id=1vQUNmQ9Pt1x6nVKAHuN2ZzKJuy6F0JT8)
![Image 7](https://drive.google.com/uc?export=view&id=1DycT1YOi02ei7Zf9qwrK9pdHMPNsiMt3)
![Image 8](https://drive.google.com/uc?export=view&id=1u9yicZXBLdSgMOb-7unPzBxY9Sbup5gn)
![Image 9](https://drive.google.com/uc?export=view&id=1VfgExUJvZiJyviDxPNHkFnsl9RqawluV)
![Image 10](https://drive.google.com/uc?export=view&id=14uqT9ghWZkfzbb8smjI2Zv3mB6ZJLAL6)


## 🚀 Overview
A web application that enables users to submit and manage ratings for stores registered on the platform. It features role-based access for different types of users.

## 🛠️ Technology Stack

- **Backend**: ExpressJs / Loopback / NestJs (Choose one)
- **Database**: PostgreSQL / MySQL
- **Frontend**: ReactJs

## 🎯 Functional Requirements

### 🌟 User Roles

- **System Administrator**
- **Normal User**
- **Store Owner**

---

## 🔐 Single Authentication System
- A unified login and registration system for all users.

## 🔑 User Roles & Functionalities

### **System Administrator**
- Add new stores, normal users, and admin users.
- Dashboard displaying:
  - Total number of users
  - Total number of stores
  - Total number of submitted ratings
- Manage users (create, list, filter, view details).
- Manage stores (list with details).
- Logout functionality.

### **Normal User**
- Signup and login functionality.
- View and search store listings by name or address.
- Submit and modify store ratings (1-5).
- Update their password after login.
- Logout functionality.

### **Store Owner**
- Login and update their password.
- Dashboard to view:
  - List of users who rated their store.
  - Average rating of their store.
- Logout functionality.

## ✔️ Form Validations
- **Name**: Min 20 characters, Max 60 characters
- **Address**: Max 400 characters
- **Password**: 8-16 characters, at least one uppercase letter, one special character
- **Email**: Standard email format validation

## 🔍 Additional Features
- Sorting (ascending/descending) in tables by fields like Name, Email, etc.
- Clean and best-practice-oriented database schema.

## 🚀 Getting Started

### **1. Backend Setup**

Navigate to your backend directory:

```sh
cd server
npm install
```

Configure your database connection in `.env` file:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/your-database-name
```

Then start backend:

```sh
npm run dev
```

Backend runs at `http://localhost:3000`

For using super admin use these 

```
admin@example.com
Admin123!
```

## ⚠️ **Important**
- Ensure PostgreSQL/MySQL is running.
- Create your database clearly and set connection URL in your backend `.env` clearly.

Example `.env`:
```env
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/your-database-name
```

---




## 📬 Contributing

Feel free to contribute or raise issues through pull requests.

## 📝 License

Specify clearly here if needed (MIT, etc.)

---

Made with ❤️ by [Manish](https://github.com/manish-87)
```

