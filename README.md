# 🌍 Global Bites
**Author:** Ignatius Macharia Waweru 

---

## Description
Global Bites is a single-page web app that lets users explore, search, and view recipes from around the world. It features a polished, responsive design, live search and filtering, and detailed recipe modals with step-by-step instructions and images. Data is served from a local JSON Server, and all interactions are handled asynchronously using JSON.

---

## Project Setup

### 1. Install JSON Server
```bash
npm install -g json-server
```

### 2. Start the JSON Server
```bash
json-server --watch src/bd.json
```
This will start a local REST API at `http://localhost:3000/recipes`.

### 3. Open the App
Open `index.html` in your browser. Use the search and filter options to explore recipes.

---

## Live Site
[View on GitHub Pages](https://your-github-username.github.io/your-repo-name/)

---

## Project Structure
```
project/
├── index.html
├── css/
│   └── styles.css
├── asset/
│   └── food.jpg
├── src/
│   ├── bd.json      # Recipe data (used by JSON Server)
│   └── script.js    # Main JavaScript logic
```

---

## License
Copyright © 2025 Your Name Here

This project is licensed under the MIT License.

---

## Credits
- Recipe images and some data from [TheMealDB](https://www.themealdb.com/)

---
Enjoy exploring global cuisines!
