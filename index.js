function render() {

    cocktailsPage.render();
}

let CATALOG =[];


fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a')
    .then(res => res.json())
    .then(body => {
        CATALOG = body.drinks;
        // console.log(CATALOG);
        
        cocktailsPage.render();
    })
    .catch(() => {
        console.log("error")
    })
