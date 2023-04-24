/*
=================================================
;  Title: Keith-bookstore.js
;  Author: Alexander Keith
;  Date: 4/23/2023
;  Description: Keith-bookstore.js file for assignment 6.2 - Bookstore App
;================================================
*/

//variables books, authors, and publishers//
let books = ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"];
let authors = ["Franklin Patrick Herbert Jr.", "Clive Staples Lewis", "John Ronald Reul TOlkien"];
let publishers = ["Manning Publications", "O Reilly Media", "Pact Publishing"];

//function to display to table
function display(){

//sorts the authors string in ascending order
authors.sort();

//sorts the publishers array in descending order
publishers.sort().reverse();


    //choice constant for userselection
    const choice = document.getElementById('choice').value;

    //creates a row with an empty string value
    let row = "";

    
    switch(choice){

        //books case
        case "books":

            //HTML table strings using string concatenation
            let tblBooks = `
                <h3>Books Listing</h3>
                <table class="table">
                    <thread>
                        <tr>
                            <th>Book Title</th>
                        </tr>
                    </thread>
                    <tbody>`;
            
            //books for of loop
            for(let b of books){
                row += `<tr><td>${b}</td></tr>`;
            }

            tblBooks += row + `</tbody></table>`;

            //links tblBooks to results
            document.getElementById('results').innerHTML = tblBooks;
            break;

        //
        case "authors":

            let tblAuthors = `
            <h3>Authors Listing</h3>
            <table class="table">
                <thread>
                    <tr>
                        <th>Author Name</th>
                    </tr>
                </thread>
                <tbody>`;

            for (let a of authors){
                row += `<tr><td>${a}</td></tr>`;
            }

            tblAuthors += row + `</tbody></table>`;

            document.getElementById('results').innerHTML = tblAuthors;
            break;

        case "publishers":

        let tblPublishers = `
        <h3>Publishers Listing</h3>
        <table class="table">
            <thread>
                <tr>
                    <th>Publisher Name</th>
                </tr>
            </thread>
            <tbody>`;

        for (let p of publishers){
            row += `<tr><td>${p}</td></tr>`;
        }

        tblPublishers += row + `</tbody></table>`;

        document.getElementById('results').innerHTML = tblPublishers;
        break;

        //Alert message popup when an invalid selection is submitted
        default: alert("Invalid selection, please try again!");

    }
}
