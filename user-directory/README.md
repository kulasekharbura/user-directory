# User Directory Application

## 🚀 Live Demo

**Check out the live application here:** [https://user-directory-rosy.vercel.app/](https://user-directory-rosy.vercel.app/)

---

## Overview

This project is a **User Directory Application** built as part of a frontend assignment to demonstrate proficiency in modern frontend development practices.
The application fetches user data from an external API, displays it in a clean and responsive UI, and allows users to search, view details, and add new users using frontend-only logic.

---

## Technology Stack

- **Framework:** React (Vite)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Persistence:** Browser `localStorage`

---

## Features Implemented

### 1. User List Page

- Fetches user data from `https://jsonplaceholder.typicode.com/users` on initial page load.
- Displays the following fields for each user:

  - Name
  - Email
  - Phone

- Includes:

  - Loading indicator while data is being fetched
  - Error message if the API request fails

---

### 2. Search Users

- Provides a search input field.
- Filters users in **real time** based on:

  - Name
  - Email

---

### 3. User Details View

- Clicking on a user opens a detailed view implemented as a **modal**.
- Displays additional user information:

  - Address
  - Company name
  - Website

---

### 4. Add New User (Frontend Only)

- Includes a form to add a new user.
- Fields:

  - Name (required)
  - Email (required, valid format)
  - Phone (required)

- Client-side validation with clear error messages.
- On successful submission:

  - User is added to the list
  - Form is reset

- No backend persistence (as per assignment requirement).

---

## Bonus Tasks Completed

- **Alphabetical Sorting:** Users can be sorted A–Z and Z–A.
- **Reusable Components:** UI is broken into reusable components (`UserCard`, `UserModal`, `AddUserForm`).
- **React Hooks:** Proper usage of `useState` and `useEffect`.
- **Persistence:** Users (fetched and added) are stored in `localStorage` to persist data across refreshes.

---

## Assumptions Made

1. **Frontend-Only Persistence**
   Since the API does not support POST persistence, `localStorage` is used to simulate data retention.

2. **Mocked Nested Data for Added Users**
   Newly added users are assigned mock `address` and `company` objects to maintain compatibility with the user details view.

3. **ID Generation**
   Unique IDs for new users are generated using `Date.now()` to ensure stable React keys.

---

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/kulasekharbura/user-directory.git
   cd user-directory
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the project**

   ```bash
   npm run dev
   ```

4. **Access the application**
   Open the local URL shown in the terminal (typically `http://localhost:5173`).

---

## Project Structure

```text
src/
├── components/
│   ├── AddUserForm.jsx   # Form with validation logic
│   ├── UserCard.jsx      # User list item
│   └── UserModal.jsx    # Detailed user view
├── App.jsx               # Main application logic
├── index.css             # Tailwind CSS directives
└── main.jsx              # Entry point
```
