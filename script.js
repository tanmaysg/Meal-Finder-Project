const search = document.getElementById('search');
const submit = document.getElementById('submit');
const dispmeals = document.getElementById('meals');
const resultheading = document.getElementById('result-heading');
const singlemeal = document.getElementById('single-meal');

function searchMeal(e)
{
    e.preventDefault();
    const searchval = search.value; 
    console.log(searchval);
    resultheading.innerHTML="";

    if(searchval.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchval}`)
        .then((res) => res.json())
        .then((data) =>{ 
            console.log(data)
            resultheading.innerHTML=`<h2>You searched for '${searchval}': </h2>`;

            if(data.meals === null){
                resultheading.innerHTML = `<h2> Cannot find results for: '${searchval}' </h2>`;
            }

            else{
                dispmeals.innerHTML = data.meals.map((mealelement) =>
                `<div class="rendermeal">
                    <img src="${mealelement.strMealThumb}" alt="${mealelement.strMeal}"/>
                    <div class="mealinfo" mealid="${mealelement.idMeal}"/>
                        <h3>${mealelement.strMeal}</h3>
                    </div>
                </div>`
                ).join("");
            }
        });

    }
}



  
submit.addEventListener('submit', searchMeal);
