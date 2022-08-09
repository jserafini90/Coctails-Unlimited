const options = {
    headers: {
      'X-RapidAPI-Key': 'bb95675774mshe180056b6129759p10f897jsn383fb618d19b',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  
const mainPage = document.getElementById('main')
const divTag = document.getElementById('logout')
const selectDrink = document.getElementById('drinks')

function selectedDrink(category) {
     mainPage.innerHTML = ''
     divTag.innerHTML = ''
    logOut()
    //console.log(data)
       
      data.drinks.forEach((categories) => {
      moreInfo(categories)
      //document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"

    })
     document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
}
let drinks;
function populateDrinks() {
    mainPage.innerHTML = ''
    fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', options)
    .then(res => res.json())
    .then(data => {
      let drinks = data
      drinks.drinks.forEach((drink) => {
        drinkTile(drink)
        //console.log(drink)
      
})
})
    }
    
  function drinkTile(drink) {
    const newTile = document.createElement('div')
    const hTag = document.createElement('h2')
    const aTag = document.createElement('a')
    aTag.classList.add('click-tile')
    aTag.href = '#'
    hTag.innerText = drink.strDrink
    newTile.append(hTag)
    aTag.appendChild(newTile)
    mainPage.appendChild(aTag)
    aTag.addEventListener('click', (e) => {
      moreInfo(drink)
      console.log(drink)
     })

  }

function moreInfo(info) {
    mainPage.innerHTML = ''
    let keys = Object.keys(info);
    const singleTile = document.createElement('div')
    const hTag = document.createElement('h2')
    const aTag = document.createElement('a')
    const btnTag = document.createElement('button')
    const list = document.createElement('ul')
    const ing1 = document.createElement('li')
    const ing2 = document.createElement('li')
    const ing3 = document.createElement('li')
    const ing4 = document.createElement('li')
    const ing5 = document.createElement('li')
    const ins = document.createElement('li')
    singleTile.classList.add('single')
    hTag.innerText = info.strDrink
    btnTag.innerText = 'Return'
    ing1.innerText = info.strIngredient1
    ing2.innerText = info.strIngredient2
    ing3.innerText = info.strIngredient3
    ing4.innerText = info.strIngredient4
    ing5.innerText = info.strIngredient5
    ins.innerText = info.strInstructions
    btnTag.addEventListener('click', (e) => {
    moreInfo.innerHTML = ''
    populateDrinks() 
      
})
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1601925088924-aad72e86b894?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80')"
    list.append(ing1, ing2, ing3, ing4, ing5, ins)
    singleTile.append(hTag, aTag, list, btnTag)
    mainPage.append(singleTile)

  }

function loginPage(){
    mainPage.innerHTML = ''
    divTag.innerHTML = ''
    selectedDrink.innerHTML = ''
    signUp()
    const loginForm = document.createElement('form')
    loginForm.innerHTML += `
    <h2>Log In</h2>
    <label>Username:</label>
    <input type="text">
    <br>
    <label>Password:</label>
    <input type="text">
    <br>
    <input type="submit">`
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')"
    mainPage.append(loginForm)
    loginForm.addEventListener('submit',(e) => { 
        userLogin()
        populateDrinks()
    }
    )}

function signUp(){
    const signUpForm = document.createElement('form')
    signUpForm.innerHTML += `
    <h2>Sign Up</h2>
    <label>Create Username:</label>
    <input type="text">
    <br>
    <label>Create Password:</label>
    <input type="text">
    <br>
    <input type="submit">`
    mainPage.append(signUpForm)
  
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault()
      // console.log(e.target)
      fetch(`http://localhost:3000/users`, {
          method: "POST", 
          headers: {
              "Content-type": "application/json", 
              "Accept": "application/json"
          }, 
          body: JSON.stringify({
            "username": e.target.children[2].value,
            "password": e.target.children[5].value,
  
          })
      })
      .then(res => res.json())
      
      logOut(),
      populateDrinks()
      alert(`Drink Responsibly ${e.target.children[2].value}!`)
  
    })
  }  
  
function userLogin(e){
    e.preventDefault()
    const username = e.target.children[2].value
    const password = e.target.children[5].value
  
    fetch(`http://localhost:3000/users?name=${username}&password=${password}`)
    .then(res => res.json())
    .then(data => {
        if(data.length === 0){
            alert('Incorrect Username or Password')
        } else {
            popularDrink()
        }
    })
  }
  
function logOut (){
    const btnTag = document.createElement('button')
    btnTag.innerText = 'Log Out'
    btnTag.addEventListener('click', (e) => {
      loginPage()
    })
    divTag.appendChild(btnTag)
  }
  
  loginPage()