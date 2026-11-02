# 💰 Expense Tracker

A modern, responsive expense tracking application built with **React.js, JavaScript, and CSS**. Easily manage daily expenses, organize spending by category, and monitor your total expenses with automatic data persistence.

---

## 🚀 Overview

Expense Tracker is a frontend application designed to help users manage their daily spending in a simple and organized way.

The application allows users to add and delete expenses, categorize transactions, and automatically calculate their total spending. All expense data is stored in the browser using LocalStorage, ensuring that information remains available after refreshing the page.

## ✨ Features

- **Add Expenses:** Create new expenses with a name, amount, and category.
- **Delete Expenses:** Remove individual expenses.
- **Expense Categories:** Organize expenses into Food, Transport, Shopping, Cafe, and Other.
- **Automatic Total Calculation:** Calculate total expenses dynamically.
- **Data Persistence:** Save expense data using Browser LocalStorage.
- **Refresh Persistence:** Keep saved expenses after refreshing the page.
- **Responsive Design:** Adapt the interface to different screen sizes.
- **Unique Expense IDs:** Generate unique identifiers for individual expenses.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript (ES6+) | Application logic |
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| Vite | Development environment |
| LocalStorage | Persistent browser storage |
| Git & GitHub | Version control and project hosting |

## 📂 Project Structure

```text
expense-tracker/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseForm.css
│   │   ├── ExpenseList.jsx
│   │   └── ExpenseList.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd expense-tracker
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🧠 React Concepts Practiced

This project helped me practice and understand important React concepts through hands-on development.

- **useState:** Managing application state and form inputs.
- **useEffect:** Synchronizing expense data with LocalStorage.
- **Props:** Passing data and functions between components.
- **Array.map():** Rendering expense lists dynamically.
- **Array.filter():** Deleting individual expenses.
- **Array.reduce():** Calculating total expenses.
- **JSON.stringify() & JSON.parse():** Saving and retrieving structured data.
- **crypto.randomUUID():** Generating unique expense identifiers.

## 💾 Data Persistence

The application uses the browser's LocalStorage API to store expense information.

This means:
- Expenses are saved automatically when the data changes.
- Previously saved expenses are loaded when the application starts.
- Data remains available after refreshing the browser.

**Note:** Data is stored locally in the current browser and is not synchronized across devices.

## 🔮 Future Improvements

Planned features for future versions:

- [ ] Edit existing expenses.
- [ ] Filter expenses by category.
- [ ] Search expenses.
- [ ] Add transaction dates.
- [ ] Monthly expense summaries.
- [ ] Expense charts and visual analytics.
- [ ] Dark mode.
- [ ] Backend integration and database storage.

## 👨‍💻 Author

**Amin Mohamed**

Full Stack Developer | React.js | JavaScript | PHP | Laravel

- GitHub: [amine-mohamed77](https://github.com/amine-mohamed77)
- LinkedIn: [Amin Mohamed](https://www.linkedin.com/in/amin-mohamed-4667a1245/)

---

## ⭐ Support

If you find this project useful or interesting, consider giving it a star on GitHub!

**Built with ❤️ while learning React through practical projects.**