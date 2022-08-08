const options = {
    headers: {
      'X-RapidAPI-Key': 'bb95675774mshe180056b6129759p10f897jsn383fb618d19b',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  
const mainPage = document.getElementById('main')
const divTag = document.getElementById('logout')
//const selectDrink = document.getElementById('drinks')
//const categoryList = ["Mojito", "Old Fashioned", "Long Island Tea", "Negroni", "Whiskey Sour", "Dry Martini", "Daiquiri", "Margarita", "Manhattan", "Moscow Mule", "After Dinner Cocktail", "After Supper Cocktail", "Alabama Slammer", "Alaska Cocktail", "Alexander", "Brandy Alexander", "Alfie Cocktail", "Algoquin", "Allegheny", "Allies Cocktail"]


function selectedDrink(category) {
     mainPage.innerHTML = ''
     divTag.innerHTML = ''
    logOut()
    //console.log(data)
       
      data.drinks.forEach((categories) => {
      moreInfo(categories)
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"

    })
  //   document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
}
function populateDrinks() {

    let drinks;
    mainPage.innerHTML = ''
    fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', options)
    .then(res => res.json())
    .then(data => {
      let drinks = data
      drinks.drinks.forEach((drink) => {
        categoryTile(drink)
        console.log(drink)
      
})
})
    }
    

    function categoryTile(drink) {
    const newTile = document.createElement('div')
    const hTag = document.createElement('h2')
    const aTag = document.createElement('a')
    aTag.classList.add('click-tile')
    aTag.href = '#'
    hTag.innerText = drink.strDrink
    newTile.append(hTag)
    aTag.appendChild(newTile)
    mainPage.appendChild(aTag)
    newTile.addEventListener('click', (e) => {
    
  })

  }

function moreInfo(info) {
    const singleTile = document.createElement('div')
    const hTag = document.createElement('h2')
    const aTag = document.createElement('a')
    const btnTag = document.createElement('button')
    singleTile.classList.add('single')
    hTag.innerText = 
    btnTag.innerText = 'Return'
    
    btnTag.addEventListener('click', (e) => {
    selectDrink.innerHTML = ''
      correctDrink()
      
})
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1601925088924-aad72e86b894?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80')"
    singleTile.append(hTag, aTag, btnTag)
    mainPage.append(singleTile)

  }

  function listInfo (list){
    const li = document.createElement('li')
    li.classList.add('details')
    li.innerText = list
    selectDrink.appendChild(li)
 
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
        // userLogin()
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
  
//   function userLogin(e){
//     e.preventDefault()
//     const username = e.target.children[2].value
//     const password = e.target.children[5].value
  
//     fetch(`http://localhost:3000/users?name=${username}&password=${password}`)
//     .then(res => res.json())
//     .then(data => {
//         if(data.length === 0){
//             alert('Incorrect Username or Password')
//         } else {
//             popularDrink()
//         }
//     })
//   }
  
  function logOut (){
    const btnTag = document.createElement('button')
    btnTag.innerText = 'Log Out'
    btnTag.addEventListener('click', (e) => {
      loginPage()
    })
    divTag.appendChild(btnTag)
  }
  
  loginPage()