/*
name = document.getElementById('item-name');
calories = document.getElementById('item-calories');
document.getElementById('add-meal').addEventListener('click', addMeal);

function addMeal(){
  for(i in Range(0,20)){
    if(name.value && calories.value !== ''){
      let html  = '';
      html += `
      <li class="collection-item" id="item-0">
        <strong>${name.value}</strong> <em>${calories.value}</em>
        <a href="#" class="secondary-content">
          <i class="fa fa-pencil"></i>
        </a>
      </li>
      `;
      document.querySelector('item-list').innerHTML = html;
    }
  }
  document.getElementById('clear-all').addEventListener('click', clearAll);
  function clearAll(){
    li.removeChild();
  }
   function edit(){
    var button = document.getElementById("delete");
    button.style.display = "";
   }
}
*/
/*
    item = document.getElementById('item-list')
    const li = document.createElement('li');
    li.className = 'item-list';
    li.appendChild(document.createTextNode(name.value));
    li.appendChild(document.createTextNode(calories.value));
    const link = document.createElement('a');
    link.className = 'secondary-content';
    link.innerHTML = '<i class="fa fa-pencil" id="button"></i>';
    li.appendChild(link);
    item.appendChild(li);

        arr = [];
    item = document.getElementById('item-list');
    const li = document.createElement('li');
    li.className = 'item-list';
    li.appendChild(document.createTextNode(name.value + calories.value))

        arrname = [];
    arrcal = [];
    item = document.getElementById('item-list');
    const li = document.createElement('li');
    li.className = 'item-list';
    if(name in arrname){}
    else{
      arrname += name;
      arrcal += calories;
      for(arrname in Range(0,arrname.length)){
        li.appendChild(arrname[-1])
      }
      for(arrcal in Range(0,arrcal.length)){
        li.appendChild(arrcal[-1])
      }
    }
*/
/*
home = document.getElementById('home').addEventListener('click', jumbotron);
about = document.getElementById('about').addEventListener('click', information);
contact = document.getElementById('contact').addEventListener('click', form);


function jumbotron(){
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  `
}
function information(){
  document.querySelector('#heading').innerHTML = `About Us`;
  document.querySelector('#content').innerHTML = `
  <p>this is the about page</p>
  `;
}
function form(){
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  `
}




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>JavaScript Sandbox: Patterns</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <a class="navbar-brand" href="#">State Pattern</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a id="home" class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a id="about" class="nav-link" href="#">About</a>
            </li> 
            <li class="nav-item">
              <a id="contact" class="nav-link" href="#">Contact</a>
            </li> 
          </ul>
        </div>
      </nav>

      <div class="container">
        <h1 id="heading"></h1>
        <div id="content"></div>
      </div>

      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  <script src="app.js"></script>
</body>

</html>
*/
/*
const data = [
  {
    name: 'Jia Dang',
    age :'12',
    location: 'Fountain Valley, CA',
    image: 'https://i.pinimg.com/originals/4d/3c/f6/4d3cf697eba5935881dbb49379ab4e65.jpg'
  },
  {
    name: 'Myra',
    age: '2',
    loction: 'Fountain Valley, CA',
    image: 'https://i.pinimg.com/originals/4d/3c/f6/4d3cf697eba5935881dbb49379ab4e65.jpg'
  }
]

const profile = profileIterator(data);

nextProfile();

document.getElementById('next').addEventListener('onclick', nextProfile);

function nextPofile(){
  const currentProfile = profile.next().value;

  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${surrentProfile.name}</li>
      <li class="list-group-item">Age: ${surrentProfile.age}</li>
      <li class="list-group-item">Location: ${surrentProfile.location}</li>
    </ul>`;
    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`;
  }else{
    window.loction.reload()
  }
}
function profileIterator(profile) {
  let nextIndex = 0;

  return{
    next: function() {
      return nextIndex < profile.length ? 
      { value: profile[nextIndex++], done: false } :
      { done: true}
    }
  };
}

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <div class="container">
      <h1>Profile Scroller</h1>
      <div id="imageDisplay"></div>
      <div class="card">
        <div id="profileDisplay"></div>
        <btn class="btn btn-dark" id="next">Next</btn>
      </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
*/


/*document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('zip').addEventListener('blur', validateZipCode);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else{
    name.classList.remove('is-invalid')
  }
}

function validateZipCode() {
  const zip = document.getElementById('zip');
  const re = /^[1-10]{5}$/;

  if(!re.test(zip.value)){
    zip.classList.add('is-invalid');
  } else{
    zip.classList.remove('is-invalid')
  }
}
function validateEmail() {
  const email = document.getElementById('email');
  const re = /^[1-10]{5}$/;

  if(!re.test(email.value)){
    zip.classList.add('is-invalid');
  } else{
    zip.classList.remove('is-invalid')
  }
}
function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^[0-10]{10}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else{
    phone.classList.remove('is-invalid')
  }
}

<!doctype html>
<html lang="en">
  <head>
    <title></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h1>User Form</h1>
          <form>
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" id="name" placeholder="Name">
              <div class="invalid-feedback">
                Name must be between 2 and 10 characters
              </div>
            </div>
            <div class="form-group">
              <label>Zipcode</label>
              <input type="text" class="form-control" id="zip" placeholder="Zipcode">
              <div class="invalid-feedback">
                Enter a valid zipcode
              </div>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" id="email" placeholder="Email">
              <div class="invalid-feedback">
                Enter a valid email
              </div>
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input type="text" class="form-control" id="phone" placeholder="Phone Number">
              <div class="invalid-feedback">
               Enter a valid phone
              </div>
            </div>
            <input type="submit" value="Submit" class="btn btn-primary btn-block" id="submit">
          </form>
        </div>
      </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    <script src="app.js"></script>
  </body>
</html>
*/

/*const searchUser = document.querySelector('#search-user');

searchUser.addEventListener('keyup', function(e) {
    const userText = e.target.value;
    var jSonData =[];
    function getUser(name) {
        fetch(`http://api.github.com/users/${name}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log(json)
                jSonData.push(json)
                console.log("jSonData here: "+ JSON.stringify(jSonData[0].public_repos));
                showData();
            })
    }
    getUser(userText)
      if (userText !== '') {
          console.log(userText);
      }
      function showData() {
        
        console.log("jSonData 2nd here: "+ JSON.stringify(jSonData));
          document.getElementById('profile').innerHTML = `<div class='card'>
                                                            <p>Public Repos: ${jSonData[0].public_repos}</p>
                                                            <p>Public Gists: ${jSonData[0].public_gists}</p>
                                                            <p>Public Repos: ${jSonData[0].public_repos}</p>
                                                          </div>`
      }
})







<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="row">FF
      <div class="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded">
        <h1 id="w-location"></h1>
        <h3 class="text-dark" id="w-desc"></h3>
        <h3 id="w-string"></h3>
        <img id="w-icon">
        <ul id="w-details" class="list-group mt-3">
          <li class="list-group-item" id="w-humidity"></li>
          <li class="list-group-item" id="w-dewpoint"></li>
          <li class="list-group-item" id="w-feels-like"></li>
          <li class="list-group-item" id="w-wind"></li>
        </ul>
        <hr>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#locModal" id="change-location">
            Change Location
          </button>
      </div>
    </div>
  </div>

<div class="modal fade" id="locModal" tabindex="-1" role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="locModalLabel">Choose Location</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="w-form">
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" class="form-control">
            </div>
            <div class="form-group">
                <label for="state">State</label>
                <input type="text" id="state" class="form-control">
              </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button id="w-change-btn" type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

  <script src="app.js"></script>
</body>
</html>



const changeLocation = document.querySelector('#change-location')

changeLocation.addEventListener('click', function(e){
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  function getTemp(city,state){
    fetch(`https://openweathermap.org/api`)

  }

  function showData() {
    
    console.log("jSonData 2nd here: "+ JSON.stringify(jSonData));
      document.getElementById('').innerHTML = `<div class='card'>
                                                        <li> ${jSonData[0].humidity}</li>
                                                        <li> ${jSonData[0].mist}</li>
                                                        <li> ${jSonData[0].dewpoint}</li>
                                                        <li> ${jSonData[0].feels_like}</li>
                                                      </div>`
  }
})


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  <title>Document</title>
</head>
<body>
  <nav class="navbar navbar-dark bg-primary md-3">
    <div class="container">
      <a href="" class="navbar-brand">GitHub Finder</a>
    </div>
  </nav>
  <div class="container searchContainer">
    <div class="search card card-body">
      <h1>Search GitHub Users</h1>
      <p class="lead">Enter a username to fetch a user profile and repos</p>
      <input type="text" id="search-user" class="form-control" placeholder="GitHub Username...">
    </div>
    <br>
    <div id="profile">
      <p></p>
    </div>
  </div>

  <footer class="mt-5 p-3 text-center bg-light">
    GitHub Finder &copy;
  </footer>

  <script src="app.js"></script>
</body>
</html>
*/

//const searchUser = document.querySelector('#search-user'); 



/*searchUser.addEventListener('keyup',function(e){
  let login = fetch('https://github.com/desktop/desktop')
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    console.log(data);
    let output = '';
    data.forEach(function(user){
      //if(login in data){
        output += `<li>${user.login}</li>`;
      //}
    });
    document.getElementById('profile').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  });
  e.preventDefault()
});
*/

/*document.getElementById('search-user').addEventListener('click', getExternal);

function getExternal(){
  fetch('https://api.github.com/users')
  .then(function(res){
    return res.json();
  })
  .then(function(data) {
    console.log(data);
    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    })
    document.getElementById('profile').innerHTML = output;
  })
  .catch(function(err){
    console.log(err)
  })
}
*/
/*function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI(){}
  UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
                      <td>${book.author}</td>
                      <td>${book.isbn}</td>
                      <td> <a href = "#" class="delete">X</a></td>
  `;
    list.appendChild(row)
    
}
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  const book = new Book(title,author,isbn);
  const ui = new UI();
  ui.addBookToList(book);
  ui.clearFields();
  console.log('Book has been added to list')
  
  e.preventDefault();

});


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" integrity="sha512-5fsy+3xG8N/1PV5MIJz9ZsWpkltijBI48gBzQ/Z2eVATePGHOkMIn+xTDHIfTZFVb9GMpflF2wOWItqxAP2oLQ==" crossorigin="anonymous" />
  <title>Book List</title>
</head>
<body>
  <div class="container">
    <h3>Add Book</h3>
    <p id="alert"></p>
    <form id="book-form">
      <div>
        <label for="title"> Book Title</label>
        <input type="text" class="u-full-width" id="title">
      </div>
      <div>
        <label for="title">Author</label>
        <input type="text" class="u-full-width" id="author">
      </div>
      <div>
        <label for="title">ISBN</label>
        <input type="number" class="u-full-width" id="isbn">
      </div>
      <div>
        <input type="submit" id="submit" value="Submit">
      </div>
    </form>
      <hr>
      <table class="u-full-width">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="book-list"></tbody>
      </table>
      <script src="app.js"></script>
  </div>
</body>
</html>
*/

/*const taskForm = document.querySelector('#task-form');
const collectionTasks = document.querySelector('.collection-tasks');
const clearTasks = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const task = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
  taskForm.addEventListener('submit', addTask);
}
function addTask(e) {
  if(task.value === '') {
    alert('Add a task');
}

  const li = document.createElement('li');

  li.className = 'collection-item';

  li.appendChild(document.createTextNode(task.value));

  const link = document.createElement('a');

  link.className = 'delete-item secondary-content';

  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);


  collectionTasks.appendChild(li);

  task.value = '';

  e.preventDefault();
}


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <title>Task List</title>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <div id="main" class="card">
          <div class="card-content">
            <span class="card-title">Task List</span>
            <div class="row">
              <form id="task-form">
                <div class="input-field col s12">
                  <input type="text" name="task" id="task">
                  <label for="task">New Task</label>
                </div>
                <input type="submit" id="submit" value="Add Task" class="btn">
              </form>
            </div>
          </div>
          <div class="card-action">
            <h5 id="task-title">Tasks</h5>
            <div class="input-field col s12">
              <input type="text" name="filter" id="filter">
              <label for="filter">Filter Tasks</label>
            </div>
            <ul class="collection-tasks"></ul>
            <a href="#" class="clear-tasks btn black">Clear Tasks</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script
  src="https://code.jquery.com/jquery-3.2.1.js"integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
*/
/*
let min = 1,
    max = 10,
    correctNum= Math.random(min, max),
    guessesLeft= 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min'),
    maxNum = document.querySelector('.max'),
    guesses = document.querySelector('#inputValue'),
    submit = document.querySelector('#submit'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

document.getElementById('submit').addEventListener("click", function(){
    let guess = parseInt(guesses.value);

    if(guess < min || guess > max){
        console.log(`Enter a number between ${min} and ${max}`,'red');
    }
    if(guess === correctNum){
        guess.diabled = true;
        console.log(`The answer ${correctNum} was correct, You win`,'green');
    }else{
        guessesLeft -= 1
    }
    if(guessesLeft === 0){
        guess.disabled = true;
        console.log(`Game Over, you lost. The correct answer is ${correctNum}`,'red')
    }else{
        console.log(`Wrong answer. You have ${guessesLeft} guesses left`,'red')
    }
});

function setMessage(msg){
    message.style.color = color;
    message.textContent = msg;
}


document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e){
  console.log('Calculating...');

  const amount = document.getElementById('amount');
  const percent = document.getElementById('percent');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(percent.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  } else{
    showError('Please check your numbers');
  }

  e.preventDefault();
}

function showError(error){
    const errorDiv = document.createElement('div');
    const card = document.querySelector('card');
    const heading = document.querySelector('.heading')

    errorDiv.className = 'alert alert-danger';
    errorDiv.append(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);
}
*/
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" integrity="sha256-ECB9bbROLGm8wOoEbHcHRxlHgzGqYpDtNTgDTyDz0wg=" crossorigin="anonymous" />
  <title>Document</title>
</head>
<body>
  <div id="game">
      <h1>Number Guesser</h1>
      <p>Guess a number between <span class="min"></span> and <span class="max"></span></p>
      <input type="number" id="inputValue" placeholder="Enter your guess...">
      <input type="submit"  id="submit" placeholder="submit">
      <p class="message"></p>
    </div>
    <script src="app.js"></script>
</body>
</html>

<!doctype html>
<html lang="en">
  <head>
    <title>Hello, world!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  </head>
  <body class="bg-dark">
    <div class="container">
          <div class="card card-body text-center mt-5">
            <h1>Loan Calculator</h1>
            <form id="loan-form">
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">     $       </span>
                  <input type="number" class="form-control" id="amount" placeholder="Loan Amount">
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">     %     </span>
                  <input type="number" class="form-control" id="percent" placeholder="Interest">
                </div>
              </div>
              <div class="form-group">
                <input type="number" class="form-control" id="years" placeholder="Years To Repay">
              </div>
              <div class="forn-group">
                <input type="submit" value="Calculate" class="btn btn-dark btn-block">
              </div>
            </form>
            <!-- LOADER -->
            <!--
            <div id="loading">
              <img src="img/loading.gif" alt="">
            </div>
            -->
            <div id="results" class="pt-4">
              <h5>Results</h5>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">Monthly Payment</span>
                  <input type="number" class="form-control" id="monthly-payment" disabled>
                </div>
              </div>

              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">Total Payment</span>
                  <input type="number" class="form-control" id="total-payment" disabled>
                </div>
              </div>

              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon">Total Interest</span>
                  <input type="number" class="form-control" id="total-interest" disabled>
                </div>
              </div>
            </div>
          </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
    <script src="app.js"></script>
  </body>
</html>
*/
