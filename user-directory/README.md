# User Directory Application

A scalable and responsive frontend application built using **React (Vite)** and **Tailwind CSS**. The application fetches user data from an external API, supports real-time search and sorting, displays detailed user information, and includes a frontend-only user creation feature with form validation and persistence.

---

## 🛠 Technology Stack

- **Framework:** React (Vite)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Data Persistence:** Browser `localStorage`

---

## ✨ Features

### Core Functionality

- **User List Fetching**
  Fetches and displays user data from `https://jsonplaceholder.typicode.com/users` on initial load.

- **Loading & Error Handling**
  Displays a loading indicator during API calls and user-friendly error messages on failure.

- **Real-Time Search**
  Instantly filters users by **name** or **email** as the user types.

- **User Details Modal**
  Clicking on a user card opens a modal showing detailed information including address, company, and website.

- **Add User (Frontend Only)**
  Includes a form to add new users with:

  - Required field validation
  - Email format validation
  - Graceful error handling

- **Responsive Design**
  Fully responsive UI optimized for both mobile and desktop devices using Tailwind CSS utility classes.

---

### Bonus Features

- **Sorting**
  Users can be sorted alphabetically in both **A–Z** and **Z–A** order.

- **Data Persistence**
  User data (both fetched and newly added) is stored in `localStorage`, ensuring persistence across page reloads.

- **Reusable Component Architecture**
  The application is structured using modular and reusable components such as:

  - `UserCard`
  - `UserModal`
  - `AddUserForm`

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd user-directory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Open in Browser

Navigate to the local URL shown in the terminal (typically `http://localhost:5173`).

---

## 📝 Design Decisions & Assumptions

- **Frontend-Only User Creation**
  Since the external API does not persist new data, newly added users are handled entirely on the frontend.

- **Mocked Nested Data**
  Components such as the user detail modal expect nested fields (`address`, `company`). These are auto-generated for newly added users to maintain data consistency and prevent runtime errors.

- **Persistence Strategy**
  `localStorage` is used to simulate backend persistence. On initial load, the application checks for stored data before making an API request.

- **ID Generation**
  New users are assigned unique IDs using `Date.now()` to ensure stable React key usage.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── AddUserForm.jsx   # User creation form with validation
│   ├── UserCard.jsx      # Individual user display component
│   └── UserModal.jsx     # Modal for detailed user information
├── App.jsx               # Core application logic (state, search, sort)
├── index.css             # Tailwind CSS directives
└── main.jsx              # Application entry point
```

---

## 📌 Summary

This project demonstrates:

- Clean React component design
- Effective state management with hooks
- Responsive UI development using Tailwind CSS
- Practical handling of API limitations
- Scalable and maintainable frontend architecture
