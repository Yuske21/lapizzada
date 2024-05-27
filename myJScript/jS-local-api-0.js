
const listaPizzas = document.querySelector("#pizzaList");

/* */

const url = 'https://api.jsonserver.io/pizzas'; // Reemplaza con tu URL JSON correcta
const options = {
    method: 'GET',
    headers: {
        'X-Jsio-Token': 'b2ce9672a7e8d2658f0512ce586f71a6'
    }
};

async function fetchData() {
    
    try {
        const response = await fetch(url,options);
        const data = await response.json();

        //Asi llega el JSON
        console.log("Así llega el JSON****************************************************");
        console.log(data.pizzas);

        // Limpiar los datos del JSON
        const cleanedData = limpiarDatos(data);
        console.log("Así queda limpio JSON****************************************************");
        console.log(cleanedData);

        mostrarPizzas(cleanedData);
    } catch (error) {
        console.error('Error al obtener el JSON:', error);
    }
}

function limpiarDatos(data) {
    const cleanedPizzas = data.pizzas.map(pizza => {
        return {
            id: limpiarCampo(pizza.id),
            nombre: limpiarCampo(pizza.nombre),
            descripcion: limpiarCampo(pizza.descripcion),
            ingredientes: limpiarCampo(pizza.ingredientes),
            precio: limpiarCampo(pizza.precio)
        };
    });

    return { pizzas: cleanedPizzas };
}

function limpiarCampo(campo) {
    return campo.replace('INVALID_EXPRESSION: ', '').trim();
}

fetchData();

function mostrarPizzas(data){

    data.pizzas.forEach(pizza => {
        const span = document.createElement("span");
        span.classList.add("box-menu");
        span.innerHTML = `<span class="panel-ima-menu-details">
                <img src="./myIma/pizzas/pizzaInferno.jpg" class="ima-menu-details">
            </span>
            <span class="menu-details-data">
                <div class="menu-details-name-price">
                    <span class="font1">${pizza.nombre}</span>
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
        listaPizzas.appendChild(span);
    });
}



/**************************************************************************/
/*OPTION 2*/

/*
const url ='https://api.jsonserver.io/pizzas'
const options = {
	method: 'GET',
	headers: {
        'X-Jsio-Token': 'b2ce9672a7e8d2658f0512ce586f71a6'
	}
};

async function fetchData() {
    try {
		const response = await fetch(url,options);
		const result = await response.json();

        const miPizza = result.pizzas;

        miPizza.forEach((element) => {
            mostrarPizza(element);
            //console.log(result);
        });
        
        
	} catch (error) {
		console.error(error);
	}
}

fetchData();

function mostrarPizza(pizza){
    console.log(pizza);

    const span = document.createElement("span");
    span.classList.add("box-menu");
    span.innerHTML = `<span class="panel-ima-menu-details">
            <img src="./myIma/pizzas/pizzaModerna.jpg" class="ima-menu-details">
        </span>
        <span class="menu-details-data">
            <div class="menu-details-name-price">
                <span class="font1">${pizza.nombre}</span>
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
}*/
