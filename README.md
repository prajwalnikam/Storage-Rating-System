# 🌟 Store Rating Management Application

A full-stack web application for rating stores with user authentication and role-based access. Built using modern technologies and structured for scalability.

---

## 📸 Output Screenshots

<details>
  <summary>Click to expand screenshots</summary>

  ![Main View](https://drive.google.com/uc?export=view&id=1gN83PuYjssG901odejE2ZT4kZC6bYKGS)

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

</details>

---

## 🚀 Overview

A web platform allowing users to rate stores, managed through a role-based system. Ideal for platforms where customer feedback is crucial.

---

## 🛠️ Tech Stack

- **Backend**: Express.js / Loopback / NestJS (pick one)
- **Frontend**: React.js
- **Database**: PostgreSQL / MySQL

---

## 👥 User Roles

- **System Administrator**
- **Normal User**
- **Store Owner**

---

## 🔐 Authentication

A unified login and registration system for all roles.

---

## 🧰 Functional Features

### 👨‍💼 System Administrator
- Add stores, users, and admin users
- Dashboard with user/store/rating stats
- User management (create, list, filter, view)
- Store management with detail view
- Logout

### 👤 Normal User
- Register & login
- View/search stores by name/address
- Submit and modify ratings (1 to 5)
- Update password
- Logout

### 🏪 Store Owner
- Login & password update
- Dashboard to view:
  - User list who rated their store
  - Average rating
- Logout

---

## 📝 Form Validations

- **Name**: 20–60 characters
- **Address**: up to 400 characters
- **Password**: 8–16 characters, must include one uppercase & one special character
- **Email**: standard email format

---

## 🔍 Additional Features

- Table sorting (ascending/descending) on fields (e.g., name, email)
- Clean and optimized database schema

---

## ⚙️ Getting Started

### 📦 Backend Setup

1. Navigate to backend folder:

   ```bash
   cd server
   npm install


Configure your database connection in `.env` file:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/db-name

```
Then start backend:

```
npm run dev
```

Backend runs at `http://localhost:3000`

For using super admin use these 

```
Email: admin@example.com  
Password: Admin123!
```

## ⚠️ **Important**
- Ensure PostgreSQL/MySQL is running.
- Create your database clearly and set connection URL in your backend `.env` clearly.

Example `.env`:
```env
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/your-database-name
```

---


🤝 Contributing
Have suggestions or found issues?
Feel free to open a pull request or raise an issue!


🙌 Credits
Made with ❤️ by Prajwal



