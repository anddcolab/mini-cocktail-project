class PopUp {

    constructor(){
        this.drinkName = ''
        this.drinkGlass = ''
        this.instruction = ''
        this.ingredients = []
        this.alcoholic = ''
        this.drinkImg = ''
    }

    handlerCreatePopUpPageById(id){
        // треба зробити запрос а потім відрендерити а не щоб відрендилось нічогоє

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(body => body.drinks[0])
            .then(drink => {
                this.drinkName = drink.strDrink
                this.drinkGlass = drink.strGlass
                this.instruction = drink.strInstructions
                this.alcoholic = drink.strAlcoholic
                this.drinkImg = drink.strDrinkThumb

                for (let i = 0; i < 12; i++) {
                    if (drink['strIngredient'+i]) {
                        
                        let ingredient = ''

                        if (drink['strMeasure'+i]){
                            ingredient = drink['strMeasure'+i] + ' ' + drink['strIngredient'+i] 
                        } else {
                            ingredient = drink['strIngredient'+i];
                        }

                        this.ingredients.push(ingredient)
                    }
                }
                // console.log(this.ingredients)
        })

        this.render();
        ROOT_BODY.classList.add('lock');
    }

    handlerAddListOfIngredients(ingredients) {
        let htmlList = '';

        ingredients.forEach( ingredient => {
            htmlList += `\n<li class="drink-ingredient">${ingredient}</li>`
        })

        return htmlList
    }

    render() {
        const html = `
        <div id="popup1" class="overlay">
        <div class="popup">
            <a class="popup__close" href="#popup1" onclick="ROOT_BODY.classList.remove('lock');">&times;</a>
            <div class="popup__content">
                <div class="popup__drin-img-comtainer">
                    <img class="popup__img" src="${this.drinkImg}" alt="cocktail image">
                </div>
                <div class="popup__drink-info">
                    <h2>${this.drinkName}</h2>
                    <h4>Ingredients :</h4>
                    <div class="popup__information-content">
                        <ul class="list-of-drink-ingredients">
                            ${popUp.handlerAddListOfIngredients(this.ingredients)}
                        </ul>
                        
                        <h4>Instruction :</h4>
                        <p>${this.instruction}</p>
                        
                        <h4>Alcoholic :</h4>
                        <p>${this.alcoholic}</p>
                        
                        <h4>Glass :</h4>
                        <p>${this.drinkGlass}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `

        ROOT_POP_UP.innerHTML = html;
    }
}

const popUp = new PopUp();