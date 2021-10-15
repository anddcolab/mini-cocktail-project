class Cocktails {

    constructor() {
        this.classNameActive = 'like__btn--active';
    }
    
    handlerSetLocalStorage(element, id){

        if(!element.classList.contains(this.classNameActive)) {
            element.classList.add(this.classNameActive);
            
        }  else {
            element.classList.remove(this.classNameActive);
        }
    }
    
    handlerOpenPopUpWindow(id){
        popUp.handlerCreatePopUpPageById(id);
    }

    render() {

        let htmlCatalog ='';
        
        
        CATALOG.forEach( (element)=>{ 
            let activeClass = '';

            htmlCatalog += `
                <div class="cocktails-card">
                    <button class="like__btn${activeClass}" onclick="cocktailsPage.handlerSetLocalStorage(this, '${element.idDrink}');">
                    </button>
                    <img class="cocktails-card__img" src="${element.strDrinkThumb}" alt="cocktail image">
                    <div class="cocktails-card__body">
                        <h4 class="cocktails-card__name">${element.strDrink}</h4>
                    </div>
                    <a class="cocktails-card__link-open-popup" href="#" onclick="cocktailsPage.handlerOpenPopUpWindow('${element.idDrink}');"></a>
                </div>
            `
        
        });

        const html = `
            <div class="cocktails-container">
                ${htmlCatalog}
            </div>
        ` 
        console.log(CATALOG)
        ROOT_COCKTAILS.innerHTML = html;
    }
}

const cocktailsPage = new Cocktails();
