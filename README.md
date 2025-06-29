# 🌍 Global Bites

A simple web app to explore and search for recipes from around the world, powered by JSON Server.

## Features
- Browse recipes by cuisine and category
- View detailed instructions and images for each recipe
- Add new recipes (with auto-refresh)
- Responsive and modern UI

## Getting Started

### 1. Install JSON Server
```
npm install -g json-server
```

### 2. Start the JSON Server
```
json-server --watch src/bd.json
```
This will start a local REST API at `http://localhost:3000/recipes`.

### 3. Open the App
Open `index.html` in your browser. Use the search and filter options to explore recipes.

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

## Adding Recipes
- Use the app's add function (if implemented) or POST to `http://localhost:3000/recipes`.
- Recipes will auto-refresh in the UI after adding.

## Credits
- Recipe images and some data from [TheMealDB](https://www.themealdb.com/)

---
Enjoy exploring global cuisines!
