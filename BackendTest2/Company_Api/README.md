
# Company API

Company API is a robust Node.js RESTful service for managing employee data, built with Express and MySQL. It provides endpoints for retrieving employee, department, and management information, making it ideal for HR and business applications.

---

## 📁 Project Structure

```
Company_Api/
├── db.js                  # MySQL database connection
├── main.js                # Express server entry point
├── package.json           # Project metadata & dependencies
├── .env                   # Environment variables (PORT, HOST)
├── controllers/
│   └── emp.controller.js  # Employee controller logic
├── routes/
│   └── emp.route.js       # Employee API routes
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MySQL server with an `empDB` database

### Installation
1. Clone the repository and navigate to the project folder.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables in `.env`:
   ```properties
   PORT=3000
   HOST=0.0.0.0
   ```
4. Start the server:
   ```sh
   npm start
   ```
   For development (auto-reload):
   ```sh
   npm run dev
   ```

---

## 📚 API Endpoints

Base URL: `http://<HOST>:<PORT>/api/emp`

| Method | Endpoint         | Description                                              |
|--------|------------------|---------------------------------------------------------|
| GET    | /with-dept       | List all employees with their department name           |
| GET    | /with-manager    | List all employees with their manager's name            |
| GET    | /count-by-dept   | Get departments with number of employees                |
| GET    | /avg-salary      | Employees earning more than department's average salary |
| GET    | /dept-list       | Department with manager and employee list               |

---

## 🛠️ NPM Packages

Main dependencies:
- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **mysql**: MySQL database driver
- **nodemon**: Development auto-reloader

See `package.json` for full details.

---

## 📝 License

This project is licensed under the ISC License.
