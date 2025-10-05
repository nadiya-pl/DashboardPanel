# DashboardPanel

**Responsive Admin Dashboard built with React.**

This project is a modern, animated admin panel designed for an online learning platform. It features interactive charts, a collapsible sidebar, and a fully responsive layout for both desktop and mobile devices.

## ✨ Features

- ⚙️ Animated sidebar (expand/collapse)
- 📊 Interactive charts (Recharts)
- 📱 Fully responsive layout
- 🎨 Custom theme using CSS variables
- 💡 Settings page with functional UI controls
- 🎥 Smooth transitions with Framer Motion
- 🔧 Clean and organized component structure

## 🛠️ Stack

- **React**
- **Recharts**
- **Framer Motion**
- **CSS** (imported directly as global styles, not CSS Modules)
- **Vite**

## 📺 Live Demo

[Click here to see the live demo](https://nadiya-pl.github.io/DashboardPanel/)  

## 📸 Screenshots

<img width="1820" height="895" alt="image" src="https://github.com/user-attachments/assets/64196aa8-e6a6-4c14-9d41-84ed0d87e944" />


## 🚀 Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/nadiya-pl/DashboardPanel.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## 🗂️ Project Structure

```
src/
├── charts/            # Reusable chart components
├── components/        # Common UI components (Header, Sidebar)
├── config/            # Configuration files (e.g., chart settings)
├── layouts/           # Page layouts
├── pageComponents/
│   ├── cards/         # Cards used on dashboard pages
│   └── profile/       # Profile-specific components
├── pages/             # Page views (Courses, Reports, etc.)
├── App.jsx            # Main app component
├── main.jsx           # Entry point
├── index.css          # Global styles
```

## 📄 License

MIT
