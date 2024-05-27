
const listaPizzas = document.querySelector("#pizzaList");

/* */

async function fetchData() {
	try {
		const response = await fetch('./myJson/my-Json1.json');
		const result = await response.json();

        result.forEach((element) => {
            mostrarPizza(element);
            //console.log(result);            
        });
        
	} catch (error) {
		console.error(error);
	}
}

fetchData();

function mostrarPizza(pizza){
    //console.log(pizza);

    const span = document.createElement("span");
    span.classList.add("box-menu");
    span.innerHTML = `<span class="panel-ima-menu-details">
            <img src="${pizza.imagen}" class="ima-menu-details">
        </span>
        <span class="menu-details-data">
            <div class="menu-details-name-price">
                <span class="font1">${pizza.id} ${pizza.nombre}</span>
                <span class="font1">$ ${pizza.precio}
                    <a href="#" class="menu-details-buy">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </span>
            </div>
            <div class="menu-details-description">
                ${pizza.descripcion}
            </div>
            <div class="menu-details-ingredients font2">
                ${pizza.ingredientes}
            </div>
        </span>`;
    listaPizzas.append(span);
}