# 🧑‍💼 Employee Management System

A full-stack Employee Management System built with **React** on the frontend and **Spring Boot** on the backend. This project allows you to perform CRUD operations (Create, Read, Update, Delete) on employee data using Restfull API's.

## 🔧 Technologies Used

### 🚀 Frontend
- React.js (Class-based components)
- Bootstrap (UI Styling)
- Axios (HTTP requests)
- React Router DOM (Navigation)

### ☕ Backend
- Spring Boot
- Spring Data JPA
- RESTful APIs
- MySQL (Database)
- Hibernate (ORM)

---

## ✨ Features

- View list of employees
- Add new employee
- Update existing employee
- Delete employee
- View employee details

---

## 📁 Project Structure

employee-management-system/

├── backend/ # Spring Boot Backend

│ ├── controller/

│ ├── model/

│ ├── repository/

│ └── service/

└── frontend/ # React Frontend

├── components/

└── services/

---

## ⚙️ Getting Started

### Prerequisites

- Java 17+
- Node.js & npm
- MySQL Server
- Maven

📸 Screenshots
1.Home Page
<img width="1920" height="883" alt="image" src="https://github.com/user-attachments/assets/37b8b653-75e7-4c33-8812-38ef4ff6a395" />

2.Add Employee
<img width="1917" height="874" alt="image" src="https://github.com/user-attachments/assets/51fedad8-5fc8-4952-9840-79872bed0cd5" />

3.Update Employee
<img width="1920" height="864" alt="image" src="https://github.com/user-attachments/assets/1d2449eb-8182-48cb-9776-7a4f5e176b63" />

4.View Employee/Employee Details
<img width="1920" height="862" alt="image" src="https://github.com/user-attachments/assets/858dabd9-175a-433e-898a-d8665d609245" />

📦 API Endpoints (Sample)

Method  --	Endpoint -- 	Description

GET  -- 	/api/employees  --	Get all employees

POST	--  /api/employees   -- 	Add new employee

GET	--  /api/employees/{id}	 -- Get employee by ID

PUT	--  /api/employees/{id}	 --  Update employee

DELETE	--  /api/employees/{id}	 --  Delete employee

### 🛠 Backend Setup

1. Open the `backend` folder in your IDE (e.g., Spring Tool Suite or IntelliJ).
2. Configure `application.properties` with your MySQL credentials:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=yourpassword

Run the Spring Boot Application.

🌐 Frontend Setup
1.Navigate to the frontend directory:-

cd frontend

2.Install dependencies:-

npm install

3.Start the React app:-

npm start/ npm run dev












