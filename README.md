# React Movie Simulator – React Frontend Application

A React-based movie browsing application built to explore modern frontend development using **component-based architecture**, **global state management**, and **external API integration**.

The application fetches movie data from the **OMDb API** and allows users to browse movies and maintain a personal favorites list.

---

## System Overview

The application follows a simple client-side data flow:

```
User Interaction
        ↓
React Components
        ↓
Context API (Global State)
        ↓
OMDb API Request
        ↓
Movie Data Response
        ↓
React UI Rendering
```

This project was built to understand how **React components, state management, and API data flow interact in a real application**.

---

## Tech Stack

- React
- JavaScript (ES6+)
- Vite
- CSS
- OMDb Public Movie API

---

## Core Features

### Movie Listing

- Fetch movie data from the OMDb API
- Display movies using reusable card components
- Dynamically render UI based on API responses

---

### Favorites Management

- Add and remove movies from a Favorites list
- Global state managed using **React Context**
- Favorites shared across components without prop drilling

---

### Component-Based Architecture

- Reusable movie card components
- Separation of UI logic and state management
- Clean and maintainable project structure

---

## What I Learned

- Managing shared state using **React Context**
- How state updates propagate across components
- Handling asynchronous API requests in React
- Structuring a React project beyond simple tutorials
- Managing API keys using environment variables

---

## Running the Project

Clone the repository:

```
git clone https://github.com/yourusername/react-movie-simulator.git
```

Navigate into the project folder:

```
cd react-movie-simulator
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

The application will run locally at:

```
http://localhost:5173
```

---

## Future Improvements

Possible enhancements for the project:

- Movie search functionality
- Filtering options
- Pagination or infinite scrolling
- Improved UI/UX design

---

## About the Project

This project was built as part of my learning journey to strengthen frontend fundamentals and better understand how React applications manage **state, API data, and reusable components**.
