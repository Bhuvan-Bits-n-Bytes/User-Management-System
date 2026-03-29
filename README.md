# 🌟 User Management System (Backend API)

**Technologies:** Node.js, Express.js, MySQL, REST API

---

## 🚀 Project Overview
Welcome to the **User Management System**! This backend project is built using **Node.js and Express.js** with a **MySQL database**. It provides a **RESTful API** to perform **CRUD operations** for managing users efficiently. Perfect for **backend practice** and **learning API development**.

---

## 🛠️ Features
- 🔹 **Create User** – Add new users to the system  
- 🔹 **Read Users** – Fetch all users or a specific user by ID  
- 🔹 **Update User** – Edit user information  
- 🔹 **Delete User** – Remove users from the system  
- 🔹 **Organized Code** – Routes & controllers for clean structure  
- 🔹 **API Testing** – Tested using **Postman**

---

## 📂 Project Structure
User-Management-System/  
├── controllers/  
│   └── userController.js    # Handles all user API logic  
├── routes/  
│   └── userRoutes.js        # User API routes  
├── db.js                     # MySQL database connection  
├── index.js                  # Main server file  
├── package.json  
└── package-lock.json  

---

## ⚙️ Installation & Setup
1. **Clone the repository:**  
`git clone https://github.com/Bhuvan-Bits-n-Bytes/User-Management-System.git`  
2. **Navigate to project folder:**  
`cd User-Management-System`  
3. **Install dependencies:**  
`npm install`  
4. **Setup MySQL database:**  
- Create a database (e.g., `user_management`)  
- Import the `users` table with columns: `id`, `name`, `email`, `status`  
5. **Start the server:**  
`node index.js`  
6. **Test APIs** using **Postman** or any API client  

---

## 🔧 Technologies Used
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **API Testing:** Postman  
- **Version Control:** Git & GitHub  

---

## 💻 API Endpoints
| Method | Endpoint           | Description                 |
|--------|------------------|-----------------------------|
| POST   | `/users`          | Create a new user           |
| GET    | `/users`          | Get all users               |
| GET    | `/users/:id`      | Get user by ID              |
| PUT    | `/users/:id`      | Update user info            |
| DELETE | `/users/:id`      | Delete a user               |

---

## ✨ Key Highlights
- Organized project structure for maintainability  
- Clean **routes/controllers** separation  
- Fully tested APIs with Postman  
- Easy to extend with authentication & authorization  

---

## 📌 Future Enhancements
- Add **JWT Authentication** for secure access  
- Implement **role-based access control**  
- Add **frontend interface** using React.js  
- Containerize project using **Docker**  

---

## 📫 Contact
For any questions, reach out:  
**Bhuvan** | [GitHub Profile](https://github.com/Bhuvan-Bits-n-Bytes)
