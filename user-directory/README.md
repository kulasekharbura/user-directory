# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# User Directory Application

A scalable frontend application built with React (Vite) and Tailwind CSS. This application fetches user data from an external API, allows for real-time searching and sorting, and provides a detailed view for each user. It also includes a frontend-only "Add User" feature with validation.

## 🛠 Technology Stack

- [cite_start]**Framework:** React (Vite) [cite: 6]
- [cite_start]**Language:** JavaScript (ES6+) [cite: 7]
- [cite_start]**Styling:** Tailwind CSS [cite: 8]
- [cite_start]**State Management:** React Hooks (`useState`, `useEffect`) [cite: 3, 34]

## ✨ Features Implemented

This project fulfills all core requirements and several bonus tasks:

### Core Functionality

- [cite_start]**User List:** Fetches and displays users from `jsonplaceholder.typicode.com` on page load[cite: 11, 15].
- [cite_start]**Loading/Error States:** Displays a loading indicator while fetching and error messages if the API fails[cite: 17].
- [cite_start]**Real-time Search:** Filters users by **Name** or **Email** instantly as you type[cite: 20, 21].
- [cite_start]**User Details:** A modal popup displays detailed information (Address, Company, Website) when a user card is clicked[cite: 23].
- **Add User (Frontend):** A validated form to add new users. [cite_start]It includes error handling for required fields and email format validation[cite: 24, 25, 26, 27].
- [cite_start]**Responsive Design:** Fully responsive layout for mobile and desktop using Tailwind CSS[cite: 31].

### Bonus Tasks Completed

- [cite_start]**Sorting:** Users can be sorted alphabetically (A-Z and Z-A)[cite: 34].
- [cite_start]**Persistence:** Newly added users and fetched data are saved to `localStorage`, so data persists after a page refresh[cite: 34].
- [cite_start]**Reusable Components:** The UI is broken down into clean, reusable components (`UserCard`, `UserModal`, `AddUserForm`)[cite: 34].

## 🚀 Setup & Run Instructions

[cite_start]Follow these steps to run the project locally[cite: 38, 39]:

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-link-here>
    cd user-directory
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Click the local URL shown in the terminal (usually `http://localhost:5173`) to view the app.

## 📝 Assumptions Made

[cite_start]Per the assignment guidelines, the following assumptions were made during development[cite: 39]:

1.  **Data Mocking for New Users:** Since the backend API does not actually persist new data, and the `UserModal` component expects nested objects (like `address` and `company`), I auto-generate mock data for these fields when a new user is created. This prevents the application from crashing when trying to view details for a locally added user.
2.  **Persistence Strategy:** `localStorage` is used to simulate backend persistence. On the initial load, the app checks local storage; if empty, it fetches from the API. This ensures that "added" users remain visible even after refreshing the page.
3.  **ID Generation:** Simple timestamp-based ID generation (`Date.now()`) is used for new users to ensure unique keys for React rendering.

## 📂 Project Structure

```text
src/
├── components/
│   ├── AddUserForm.jsx  # Form with validation logic
│   ├── UserCard.jsx     # Individual user display component
│   └── UserModal.jsx    # Detailed view popup
├── App.jsx              # Main logic (State, Search, Sort, Routing)
├── index.css            # Tailwind directives
└── main.jsx             # Entry point
```
