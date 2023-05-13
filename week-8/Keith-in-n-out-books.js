/*
=================================================
;  Title: Keith-in-n-out-books.js
;  Author: Alexander Keith
;  Date: 5/7/2023
;  Description: Keith-in-n-out-books.js file for assignment 8.2 - Keith-in-n-out-books
;================================================
*/

// Define constant objects for three books
const book1 = {
  isbn: "0261103571",
  title: "The Fellowship of the Ring",
  pages: 432
}

const book2 = {
  isbn: "1514297272",
  title: "The Two Towers",
  pages: 322
}

const book3 = {
  isbn: "1514298139",
  title: "The Return of the King",
  pages: 432
}

// Define constant objects for three authors
const author1 = {
  name: "John Ronald Reuel Tolkien",
  genre: "Fantasy"
}

const author2 = {
  name: "Franklin Patrick Herbert Jr.",
  genre: "Science Fiction"
}

const author3 = {
  name: "Clive Staples Lewis",
  genre: "Fantasy, sciencefiction, children's literature"
}

// A function to display results based on user selection
function display () {
  const selection = document.getElementById('selection').value
  const formResults = document.getElementById('results')

// A switch case to evaluate the user's choice to display the selection.
switch (selection) {
    case "books":
      // HTML table for displaying books
      let tblBooks = `<h3>Top 3 Favorite Books</h3>
        <table class="table">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${book1.isbn}</td>
              <td>${book1.title}</td>
              <td>${book1.pages}</td>
            </tr>
            <tr>
              <td>${book2.isbn}</td>
              <td>${book2.title}</td>
              <td>${book2.pages}</td>
            </tr>
            <tr>
              <td>${book3.isbn}</td>
              <td>${book3.title}</td>
              <td>${book3.pages}</td>
            </tr>
          </tbody>
        </table>`
      
      // Display results
      formResults.innerHTML = tblBooks
      break;

    // HTML table for displaying authors 
    case "authors":
      let tblAuthors = `<h3>Top 3 Favorite Authors</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${author1.name}</td>
              <td>${author1.genre}</td>
            </tr>
            <tr>
              <td>${author2.name}</td>
              <td>${author2.genre}</td>
            </tr>
            <tr>
              <td>${author3.name}</td>
              <td>${author3.genre}</td>
            </tr>
          </tbody>
        </table>`
      
      // Display results
      formResults.innerHTML = tblAuthors
      break;

    // Default for invalid selection
    default:
      alert('Invalid selection, please try again!')
      break;
  }
}