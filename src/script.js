const defaultApiUrl = "http://localhost:3000/recipes";

async function fetchRecipes() {
  const query = document.getElementById("searchInput").value.trim();
  const cuisine = document.getElementById("cuisineFilter").value;

  let url = defaultApiUrl;
  let params = [];
  if (query) {
    params.push(`strMeal_like=${encodeURIComponent(query)}`);
  }
  if (cuisine) {
    params.push(`strArea=${encodeURIComponent(cuisine)}`);
  }
  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayRecipes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to load recipes. Please check your connection.");
  }
}


function displayRecipes(meals) {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";

  if (!meals) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  meals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.onclick = () => showRecipeDetails(meal.idMeal);

    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="recipe-info">
        <h3>${meal.strMeal}</h3>
        <p><strong>Cuisine:</strong> ${meal.strArea}</p>
        <p><strong>Category:</strong> ${meal.strCategory}</p>
      </div>
    `;

    container.appendChild(card);
  });
}


async function showRecipeDetails(id) {
  const response = await fetch(`http://localhost:3000/recipes/${id}`);
  const meal = await response.json();

  let ingredients = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients += `<li>${measure} - ${ingredient}</li>`;
    }
  }

  // Split instructions by regex to get steps, fallback to single step if not numbered
  let steps = meal.strInstructions.match(/\d+\.\s[^\d]+/g) || [meal.strInstructions];
  const instructionsList = steps.map(step => `<li>${step.replace(/\d+\.\s/, '').trim()}</li>`).join('');

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    <h3>📍 Cuisine: ${meal.strArea}</h3>
    <h3>🍴 Ingredients</h3>
    <ul>${ingredients || '<li>No ingredients listed.</li>'}</ul>
    <h3>📝 Instructions</h3>
    <ol>${instructionsList}</ol>
  `;

  document.getElementById("recipeModal").style.display = "flex";
}


function closeModal() {
  document.getElementById("recipeModal").style.display = "none";
}


async function addRecipe(recipe) {
  await fetch("http://localhost:3000/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipe)
  });
  
  fetchRecipes();
}