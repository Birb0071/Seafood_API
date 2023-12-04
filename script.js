async function searchMeals() {
  const searchInput = document.getElementById('searchInput').value;
  const mealListContainer = document.getElementById('mealList');
  
  // Clear previous content
  mealListContainer.innerHTML = '';

  // Fetch data from the API
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput}`);
  const data = await response.json();

  // Display the first 5 results
  data.meals.slice(0, 5).forEach(meal => {
      const mealCard = document.createElement('div');
      mealCard.className = 'meal-card';
      mealCard.innerHTML = `
          <h3>${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      `;
      mealListContainer.appendChild(mealCard);
  });
}
