# Brynk-assignment
A simple full-stack project using:

React (frontend)

Node.js + SQLite (backend)

A CMS page to update the homepage heading dynamically

📁 Folder Structure
Copy
Edit
BRYNK-LABS/
├── frontend/     → React app
├── backend/      → Node.js + Express + SQLite API
├── README.md
🛠 Technologies Used
Frontend: React, Axios

Backend: Node.js, Express

Database: SQLite

✅ How to Run the Project
🔹 Backend (Node.js + SQLite)
Go to the backend folder:

bash
Copy
Edit
cd backend
Install dependencies:

bash
Copy
Edit
npm install
Start the backend server:

bash
Copy
Edit
node server.js
Backend runs on: http://localhost:5000

🔹 Frontend (React)
Open a new terminal, go to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm start
Frontend runs on: http://localhost:3000

🔁 API Endpoints
GET /api/heading
Returns the current heading from the database.

POST /api/heading
Saves a new heading to the database.

Example Request Body:

json
Copy
Edit
{
  "heading": "Welcome to BRYNK-LABS!"
}
📝 CMS Page Usage
Open the React app in the browser

Go to /cms

Enter a new heading in the text box

Click Save

The heading on the home page will update

✔️ Done!
You now have:

A working CMS

A dynamic landing page

Full-stack setup with React, Node.js, and SQLite

