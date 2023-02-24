// Finding the Meals;
const mealsDb = async(food) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    try {
        const meals = await fetch(url);
        const data = await meals.json();
        displayData(data.meals);

    } catch (error) {
        console.log(error);
    }
}

const displayData = data =>{
    // parent div;
    const parentDiv = document.getElementById('parentDiv');
    // forEach loop for taking the data for database;
    data.forEach(foodList=>{
        console.log(foodList)
        const div = document.createElement('div');
        
        div.innerHTML = `
        <div class=" md:flex gap-3 border-2 border-red-300 p-5">
            <div>
                <img src="${foodList.strMealThumb}" class=" w-100 md:h-72" alt="">
            </div>
                <div>
                    <h2 class="text-3xl mb-3 mt-4">${foodList.strMeal}</h2>
                    <p class="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, sint.</p>
                    <button class="text-yellow text-2xl">View Details</button>
                </div>
         </div>
        `;
        parentDiv.appendChild(div);
    })
}
// Calling the mealsDb;
mealsDb('fish');