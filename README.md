# Smart Goal Planner

## Overview
The Smart Goal Planner is a React-based web application that helps users set, track, and manage financial goals. Users can create goals with a target amount, category, and deadline, make deposits toward goals, edit existing goals, and delete completed or unwanted goals. The app features a clean, modern interface with responsive styling implemented using plain CSS.

## Features
- **Add Goals**: Create new goals with a name, target amount, category, and deadline.
- **Track Progress**: View progress bars and remaining amounts for each goal.
- **Make Deposits**: Add funds to existing goals to track savings.
- **Edit Goals**: Update goal details as needed.
- **Delete Goals**: Remove goals that are no longer relevant.
- **Overview Dashboard**: Displays total goals, total saved amount, and completed goals.
- **Responsive Design**: Adapts to various screen sizes with a polished, user-friendly interface.

## Technologies Used
- **React**: Frontend framework for building the user interface.
- **JSON Server**: Mock backend for storing and managing goal data.
- **Plain CSS**: Custom styles for a modern, consistent look without external frameworks.
- **Node.js/NPM**: Package management and development environment.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone git@github.com:Shamola-Shelton/Phase-2-Week-2-Code-Challenge---Smart-Goal-Planner.git
   cd Phase-2-Week-2-Code-Challenge---Smart-Goal-Planner
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up JSON Server**:
   Ensure you have a `db.json` file in the project root with an initial `goals` array, e.g.:
   ```json
   {
     "goals": []
   }
   ```
   Start the JSON Server:
   ```bash
   npm install -g json-server
   json-server --watch db.json --port 3002
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`.

## Usage
1. **View the App**: Open `http://localhost:3000` in your browser.
2. **Add a Goal**:
   - Fill in the "Add New Goal" form with a name, target amount, category, and deadline.
   - Click "Add Goal" to save it to the JSON Server.
3. **Make a Deposit**:
   - Select a goal from the "Make Deposit" dropdown.
   - Enter an amount and click "Deposit".
4. **Edit a Goal**:
   - Click the "Edit" button on a goal card, update details, and save.
5. **Delete a Goal**:
   - Click the "Delete" button on a goal card to remove it.
6. **Check Data**: View the raw goal data at `http://localhost:3002/goals`.

## Project Structure
- `src/App.js`: Main React component handling goal data and rendering child components.
- `src/App.css`: Custom CSS styles for the app’s layout, forms, and goal cards.
- `src/components/`: Contains `GoalList`, `GoalForm`, `DepositForm`, and `Overview` components.
- `public/index.html`: HTML entry point with minimal inline styles.
- `db.json`: JSON Server database file for storing goals.

## Recent Changes
- Replaced Tailwind CSS with plain CSS in `src/App.css` for simpler styling and to eliminate dependency issues.
- Removed `tailwind.config.js`, `postcss.config.js`, and `src/index.css`.
- Updated `src/App.js` and `public/index.html` to ensure compatibility with plain CSS.

## Notes
- Ensure `json-server` is running on port `3002` to avoid fetch errors.
- The `node_modules` folder is excluded from Git via `.gitignore` and should not be committed.
- Run `npm audit fix` to address any dependency vulnerabilities, or update `react-scripts` with `npm install react-scripts@latest`.

## Troubleshooting
- **Styles Not Applied**: Verify `import './App.css';` is in `src/App.js` and check `F12` > Console for errors.
- **JSON Server Issues**: Ensure `json-server --watch db.json --port 3002` is running and `db.json` exists.
- **Git Conflicts**: If pushing to GitHub fails, run `git pull origin main --no-rebase`, resolve conflicts, and retry `git push origin main`.

For further assistance, contact the repository owner or open an issue on GitHub.