// the button to generate a Pokemon
let generatePokemonButton = document.getElementById("monGenerator");
generatePokemonButton.addEventListener('click', generatePokemon);

// the img html element that will show the sprite
let pokemonDisplayWindow = document.getElementById("displayPokemon");

// this will be updated
let thePokemonName = document.getElementById("thePokemonName");

// use this to get a random pokemon from the api out of the 1025 in existence
let totalPokemon = 1025;

// the pokemon that will be refreshed
let randomPokemon;

// shininess factor
let shininess = false;



// function to re-get a number to use with the generator
function refreshPokemon(){
    randomPokemon = Math.floor((Math.random() * totalPokemon) + 1);
}

// function to call the api when the button is pressed
function generatePokemon(){
    // generate
    refreshPokemon();
    // send request to the API
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        // fetching gives us a response
        // after we get our response, then check if it's good

        .then(res => {
            if (!res.ok){
                // if not, throw an error
                throw new Error("Something went wrong...");
            }
                //return the response as json
            return res.json();
        })

        // first then checks validity of fetch's response, now this one
        // basically says, "ok, now we can finally use our response"

        // since this then assumes res.json() has returned, we can use
        // the variable 'data', which is what res.json() is converted to
        .then(data => {
            // debug
            console.log(data);
            // get the name and update the html
            // gets first char, uppercases it, then gets the rest of the string and appends a exclamation
            thePokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.substring(1) + "!";
            
            // get the url of the sprite sheet
            // determining if the pokemon should be shiny
            let spriteFrontURL;
            determineShiny();
            if (shininess){
                // shiny
            spriteFrontURL = data.sprites.front_shiny;
            thePokemonName.textContent += " Wow, a shiny! You are very lucky."
                // else, don't return a shiny
            } else {
            spriteFrontURL = data.sprites.front_default;
        }

            pokemonDisplayWindow.src = spriteFrontURL;


        })

        // if we get an error upon the initial attempt to fetch
        .catch(error => {
            // log it to find out what happened
            console.error(error);
        });

    }

    // a FUNction to display shiny Pokemon occasionally
    // these odds are greatly increased, do not reflect the real
    // ones at all (1/4096)
    function determineShiny(){
        let num = Math.floor((Math.random() * 100) + 1);
        // debug
        //console.log("generated num: " + num);

        if(num == 1){
            shininess = true;
        } else {
            shininess = false;
        }

        //console.log("shininess? " + shininess);
    }



