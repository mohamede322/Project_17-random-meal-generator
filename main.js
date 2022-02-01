const randomMealApi = "https://www.themealdb.com/api/json/v1/1/random.php"

const mainContainer = document.querySelector(".container")
const randomMealContainer = document.querySelector(".random-meal-container")
const getMealBtn = document.querySelector(".get-meal-btn")

const mealImg = document.querySelector(".meal-img")
const categoryP = document.querySelector(".category-content")
const areaP = document.querySelector(".area-content")
const tagsP = document.querySelector(".tags-content")
const ingredientsUl = document.querySelector(".ingredients .ul")
const mealNameEl = document.querySelector(".meal-name")
const mealInstructionsEl = document.querySelector(".meal-instructions")
const ytVideoContainer = document.querySelector(".youtube-video-container")
const ytVideo = document.querySelector(".youtube-video-container iframe")


getMealBtn.addEventListener("click" , showRandomMeal)

function showRandomMeal() {
    mainContainer.style.justifyContent = "flex-start"
    randomMealContainer.style.display = "flex"
    ytVideoContainer.style.display = "block"
    addMealToDOM()
}

a() 
async function a() {
    let res = await fetch(randomMealApi)
    let data = await res.json()
    console.log(data.meals[0])

    let mealIngredient = [data.meals[0].strIngredient1,data.meals[0].strIngredient2,data.meals[0].strIngredient3,data.meals[0].strIngredient4,data.meals[0].strIngredient5
    ,data.meals[0].strIngredient6,data.meals[0].strIngredient7,data.meals[0].strIngredient8,data.meals[0].strIngredient9,data.meals[0].strIngredient10
    ,data.meals[0].strIngredient11,data.meals[0].strIngredient12,data.meals[0].strIngredient13,data.meals[0].strIngredient14,data.meals[0].strIngredient15
    ,data.meals[0].strIngredient16,data.meals[0].strIngredient17,data.meals[0].strIngredient18,data.meals[0].strIngredient19,data.meals[0].strIngredient20]

    console.log(data.meals[0].strInstructions)

}

async function addMealToDOM() {
    let res = await fetch(randomMealApi)
    let data = await res.json()

    let mealImgSrc = data.meals[0].strMealThumb;
    let mealCategory = data.meals[0].strCategory;
    let mealArea = data.meals[0].strArea;
    let mealTags = data.meals[0].strTags
    let mealIngredient = [data.meals[0].strIngredient1,data.meals[0].strIngredient2,data.meals[0].strIngredient3,data.meals[0].strIngredient4,data.meals[0].strIngredient5
    ,data.meals[0].strIngredient6,data.meals[0].strIngredient7,data.meals[0].strIngredient8,data.meals[0].strIngredient9,data.meals[0].strIngredient10
    ,data.meals[0].strIngredient11,data.meals[0].strIngredient12,data.meals[0].strIngredient13,data.meals[0].strIngredient14,data.meals[0].strIngredient15
    ,data.meals[0].strIngredient16,data.meals[0].strIngredient17,data.meals[0].strIngredient18,data.meals[0].strIngredient19,data.meals[0].strIngredient20];
    let mealName = data.meals[0].strMeal
    let mealInstructions = data.meals[0].strInstructions
    let video = data.meals[0].strYoutube.split("=")[1];

    mealImg.src = mealImgSrc
    categoryP.innerText = mealCategory
    areaP.innerText = mealArea
    tagsP.innerText = mealTags
    ingredientsUl.innerHTML = ""
    mealIngredient.forEach(meal => {
        if (meal != "") {
            let li = document.createElement("li")
            li.innerText = meal

            ingredientsUl.append(li)
        }
    })
    mealNameEl.innerText = mealName
    mealInstructionsEl.innerText = mealInstructions
    
    ytVideo.src = `https://www.youtube.com/embed/${video}`
}

