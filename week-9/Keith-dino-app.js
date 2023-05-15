/*
=================================================
;  Title: Keith-dino-app.js
;  Author: Alexander Keith
;  Date: 5/14/2023
;  Description: Keith-dino-app.js file for assignment 9.2 Dino App
;================================================
*/


// Gigantosaurus class
class Gigantosaurus {
  constructor(name) {
    this.name = name;
  }

  // Roar method for the Gigantosaurus class
  roar() {
    return `${this.name} says: rooooooar`;
  }
}

// Tyrannosaurus class child Gigantosaurus
class Tyrannosaurus extends Gigantosaurus {
  constructor(name) {
    super(name);
  }

  // Growl method for the Tyrannosaurus class
  growl() {
    return `${this.name} says: groooooowl`;
  }
}

// Velociraptor class child Tyrannosaurus
class Velociraptor extends Tyrannosaurus {
  constructor(name) {
    super(name);
  }

  // Define the awk method for the Velociraptor class
  awk() {
    return `${this.name} says: awk awk awwwwwwk`;
  }
}

// Create a new instance of the Velociraptor class
const dinoRaptor = new Velociraptor("Output");

function display() {
  // Get the radio buttons for each dinosaur option
  const giga = document.getElementById('giga');
  const rex = document.getElementById('rex');
  const raptor = document.getElementById('raptor');

  let result = "";

  // Check which radio button is selected and call the appropriate method on the dinoRaptor object
  if (giga.checked) {
    const dino = new Gigantosaurus("Gigantosaurus");
    result = dino.roar();
  } else if (rex.checked) {
    const dino = new Tyrannosaurus("Tyrannosaurus");
    result = dino.growl();
  } else if (raptor.checked) {
    const dino = new Velociraptor("Velociraptor");
    result = dino.awk();
  } else {
    alert("Invalid selection, please try again!");
  }

  // Display the results 
  document.getElementById('results').innerHTML = result;
}
