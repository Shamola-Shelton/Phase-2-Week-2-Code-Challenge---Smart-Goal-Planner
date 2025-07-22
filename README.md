# Phase-2-Week-2-Code-Challenge---Smart-Goal-Planner
# Smart Goal Planner

## Overview

Smart Goal Planner is a React-based web application designed to help users set, track, and manage financial goals. Users can create goals with a name, target amount, category, and deadline, make deposits toward goals, edit existing goals, and delete them. The app provides an overview of total goals, total saved amount, and completed goals, with visual progress bars and alerts for overdue or near-deadline goals. It uses `json-server` as a mock backend to store goal data and Tailwind CSS for styling.

## Features

- **Goal Creation**: Add new goals with name, target amount, category, and deadline.
- **Deposit Tracking**: Make deposits to increase the saved amount for a goal.
- **Goal Management**: Edit or delete existing goals.
- **Overview Dashboard**: View total goals, total saved, and completed goals.
- **Progress Tracking**: Visual progress bars and alerts for overdue, near-deadline, or completed goals.
- **Responsive Design**: Styled with Tailwind CSS for a modern, clean interface.

## Project Structure

```
Phase-2-Week-2-Code-Challenge---Smart-Goal-Planner/
├── db.json                # Mock backend data for json-server
├── package.json           # Project dependencies and scripts
├── public/
│   └── index.html         # HTML entry point with Tailwind CSS CDN
├── src/
│   ├── App.js             # Main React component
│   ├── App.css            # Tailwind CSS styles
│   ├── index.js           # React app entry point
│   ├── components/
│   │   ├── DepositForm.js # Form for making deposits
│   │   ├── GoalForm.js    # Form for adding new goals
│   │   ├── GoalItem.js    # Component for displaying individual goals
│   │   ├── GoalList.js    # Component for listing all goals
│   │   └── Overview.js    # Component for displaying goal statistics
```

## Prerequisites

- **Node.js**: Version 16 or higher (tested with v24.4.1).
- **npm**: Included with Node.js.
- **Internet Connection**: Required for Tailwind CSS CDN (or local setup).

## Installation

1. **Clone the Repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd Phase-2-Week-2-Code-Challenge---Smart-Goal-Planner
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up `json-server`**:
   Ensure `db.json` exists in the project root with sample goal data (e.g., 10 goals with fields `id`, `name`, `targetAmount`, `savedAmount`, `category`, `deadline`). Run:
   ```bash
   json-server --watch db.json --port 3002
   ```
   - If port `3002` is in use (`EADDRINUSE`), check for conflicts:
     ```bash
     lsof -i :3002
     kill -9 <pid>
     ```
   - Or use another port (e.g., `3003`) and update `src/App.js` to replace `http://localhost:3002` with `http://localhost:3003`.

4. **Start the React App**:
   ```bash
   npm start
   ```
   - The app runs on `http://localhost:3000` (or `3001` if `3000` is occupied).
   - Ensure the React app port differs from the `json-server` port.

## Usage

1. **Access the App**:
   Open `http://localhost:3000` (or `3001`) in a browser. You should see:
   - **Header**: "Smart Goal Planner".
   - **Overview**: Total Goals (e.g., 10), Total Saved (e.g., $45,000), Completed Goals (e.g., 1).
   - **Deposit Form**: Dropdown to select a goal and input for deposit amount.
   - **Goal Form**: Inputs for name, target amount, category, and deadline.
   - **Goal List**: Cards showing goal details, progress bars, and alerts (red for overdue, orange for <30 days, green for completed).

2. **Test Actions**:
   - **Add a Goal**: Enter details (e.g., Name: "Vacation", Target: 2000, Category: "Travel", Deadline: "2026-01-01") and submit.
   - **Make a Deposit**: Select a goal (e.g., "New Phone") and deposit an amount (e.g., 500).
   - **Edit a Goal**: Click "Edit" on a goal (e.g., change "Car Maintenance" to "Car Repair").
   - **Delete a Goal**: Click "Delete" on a goal (e.g., "Holiday Gifts").
   - Verify changes at `http://localhost:3002/goals`.

## Styling

The app uses Tailwind CSS via a CDN (`https://cdn.tailwindcss.com`) included in `public/index.html`. Styles are defined in `src/App.css` using Tailwind’s `@apply` directive. Expected visual elements:
- **Layout**: Centered content with max width (`max-w-4xl mx-auto p-4`).
- **Goal Cards**: White background, rounded corners, shadow (`bg-white p-4 rounded-lg shadow-md`).
- **Buttons**: Blue with hover effects (`bg-blue-500 hover:bg-blue-600`).
- **Progress Bars**: Green fill on gray background (`bg-green-500`, `bg-gray-200`).
- **Alerts**: Colored backgrounds for overdue (red), warning (orange), and completed (green) goals.

If styling is missing:
- Check `public/index.html` for `<script src="https://cdn.tailwindcss.com"></script>`.
- Verify `src/App.js` imports `src/App.css` (`import './App.css';`).
- Inspect Network tab (`F12`) to ensure `https://cdn.tailwindcss.com` loads (status 200).
- Clear browser cache or try an incognito window.
- Alternatively, set up Tailwind locally (see Troubleshooting).

## Troubleshooting

- **Blank Page or "Failed to load goals"**:
  - Ensure `json-server` is running on the correct port (e.g., `3002`).
  - Check `http://localhost:3002/goals` for data.
  - Verify `src/App.js` uses the correct port (e.g., `http://localhost:3002/goals`).
  - Check console errors (`F12` > Console).

- **Styling Issues**:
  - Confirm Tailwind CDN loads in Network tab.
  - Ensure `src/App.css` is correct and imported.
  - Install Tailwind locally if CDN fails:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
    Update `tailwind.config.js` and create `src/index.css` (see previous responses for details).

- **Port Conflicts**:
  ```bash
  lsof -i :3000
  lsof -i :3002
  kill -9 <pid>
  ```

- **Dependencies**:
  ```bash
  npm install
  ```

## Development Notes

- **React Version**: Built with React 18.
- **json-server**: Simulates a REST API for goal data.
- **Date Handling**: `GoalItem.js` uses a fixed date (`2025-07-21`) for calculating days left to ensure consistent overdue/warning alerts.

## Example Output

At `http://localhost:3000`:

```
Smart Goal Planner
=================
[Large, bold, centered header]

Overview
--------
[Styled box]
Total Goals: 10
Total Saved: $45000
Completed Goals: 1

Make Deposit
------------
[Styled dropdown: Select Goal (e.g., "New Phone")]
[Styled input: Amount]
[Blue button: Deposit]

Add New Goal
------------
[Styled input: Name]
[Styled input: Target Amount]
[Styled input: Category]
[Styled date input: Deadline]
[Blue button: Add Goal]

Goals
-----
[White card with shadow: Travel Fund - Japan]
  Category: Travel
  Target: $5000
  Saved: $3200
  Remaining: $1800
  [Green progress bar: 64%]
  Deadline: 2025-12-31
  Days Left: ~163
  [Blue Edit button] [Red Delete button]
...
```

## License

This project is for educational purposes as part of a Phase 2 Week 2 Code Challenge.
