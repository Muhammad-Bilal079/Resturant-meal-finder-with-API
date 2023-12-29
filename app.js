let nextBtn = document.querySelector('#nextBtn')
let prevBtn = document.querySelector('#previousBtn')
let alldish = document.querySelectorAll('.dishes')
let searchInput = document.getElementById('searchInput')
let searchbtn = document.getElementById('searchBtn')

const getData = async (value) => {
    let datas = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    let jsondata = await datas.json()
    console.log(jsondata.meals);

    document.querySelector('.showMeal').innerHTML = ''

    jsondata.meals.forEach(function (data) {
        console.log(data);
        let div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
        <img src=${data.strMealThumb} alt="">
        <p>${data.strMeal}</p>
        <button>See more</button>
        `
        document.querySelector('.showMeal').appendChild(div)
    })
}


searchbtn.addEventListener('click', () => {
    let searchVal = searchInput.value
    if (searchVal == '') {
        alert("please fill your search")
    } else {
        getData(searchVal)
    }
})






















// Slider 
let count = 0;
alldish.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

function myFun() {
    alldish.forEach((curVal) => {
        curVal.style.transform = `translatex(-${count * 100}%)`
    })
}

nextBtn.addEventListener('click', () => {
    count++
    if (count == alldish.length) {
        count = 0
    }
    myFun()
})

prevBtn.addEventListener('click', () => {
    count--
    if (count == -1) {
        count = alldish.length - 1
    }
    myFun()
})