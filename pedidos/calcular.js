var precios= {


    "entradas": {
        "Ninguno": 0.00,
        "Hummus": 15.00,
        "Antipasti mixto": 75.00,
        "Camembert fundido": 52.00,
        "Tapenade": 38.00,
        "Burrata": 92.00,
        "Gazpacho": 80.00,
    },
    "platos_fuertes": {
        "Ninguno": 0.00,
         "Risotto": 200.00,
         "Pollo Marsala": 300.00,
         "Oso Bucco": 250.00,
         "Saltimbocca alla Romana": 250.00,
         "Pizza Margarita": 200.00,
         "Ribe ye": 350.00,
    },
    "ensaladas": {
        "Ninguno": 0.00,
        "Ensalada Cesar": 120.00,
        "Ensalada Ventresca": 150.00,
        "Ensalada Affumicata": 110.00,
        "Ensalada Napolitana": 120.00,
        "Ensalada de Queso": 105.00,
        "Ensalada Cowboy Caviar": 120.00,
    },
    "pastas": {
        "Ninguno": 0.00,
        "Fettuccini al pomodoro": 150.00,
        "Fettuccini alla puttanesca": 135.00,
        "Lasagna Classic Tasty": 150.00,
        "Lasagna Vegetariana": 120.00,
        "Spaghetti Classic Personal": 55.00,
        "Trenette al pesto": 110.00,
    },
    "postres": {
        "Ninguno": 0.00,
        "Cheescake": 29.00,
        "Tiramisu": 29.00,
        "Mouse de Nutella": 30.00,
        "Flan de Queso": 27.00,
        "Patesl de Zanahoria": 25.00,
        "Gelatos": 25.00,
    },
    "bebidas": {
        "Ninguno": 0.00,
        "Kiwi soda": 20.00,
        "Cucumber mint lemonade": 36.00,
        "Citrus cooler": 32.00,
        "Wildberry lime agua fresca": 44.00,
        "Vainilla Violet soda": 40.00,
        "Limoncello": 60.00,
    },
}


var items=[];
var total_a_pagar;


function calcularSubtotal(input) {      
    var row = input.parentNode.parentNode; // Get the parent row of the input
    
    var item = row.cells[1].querySelector('select');
    row.cells[3].querySelector('input').value = "Q" + precios[item.name][item.value]
    var quantity = parseFloat(row.cells[2].querySelector('input').value);
    var price = parseFloat(row.cells[3].querySelector('input').value.substr(1)); // Remove 'Q' and parse
    var total = quantity * price;
    console.log(item.value)
    console.log(item.selectedIndex, quantity, price, total);
    
    row.cells[4].textContent = 'Q' + total.toFixed(2); // Update the total cell with the calculated value
    updateTotalAmount(); // Update the total amount in the footer
}

function updateTotalAmount() {
    console.log("abcd")
    var table = document.getElementById('billTable');
    var totalAmount = 0;
    console.log(totalAmount)
    items = [];
    for (var i = 1; i < table.rows.length - 1; i++) { // Skip header and footer rows
        items.push(table.rows[i].cells[1].querySelector('select').value);
        totalAmount += parseFloat(table.rows[i].cells[4].textContent.substr(1)); // Remove 'Q' and sum
    }
    console.log(items)
    document.getElementById('totalAmount').textContent = 'Q' + totalAmount.toFixed(2); // Update the total amount in the footer
    total_a_pagar = 'Q' + totalAmount.toFixed(2);
}

function addOption(select, value) {

    // Create a new option element
    var option = document.createElement("option");

    // Set the text content of the option
    option.textContent = value;

    // Set the value attribute of the option (optional)
    option.value = value;

    // Append the option to the select element
    select.appendChild(option);
}

function crearEntradas(select){
    if (select.options.length==0) {
        console.log("")
        for (let key in precios["entradas"]) {
            console.log(key); // Output: key1, key2, key3
        addOption(select, key)

    }    
    }
    
}

function crearplatos_fuertes(select){
    if (select.options.length==0) {
        console.log("")
        for (let key in precios["platos_fuertes"]) {
            console.log(key); // Output: key1, key2, key3
        addOption(select, key)

    }    
    }
    
}
function crearEnsaladas(select){
    if (select.options.length==0) {
        console.log("")
        for (let key in precios["ensaladas"]) {
            console.log(key); // Output: key1, key2, key3
        addOption(select, key)

    }    
    }
    
}
function crearPastas(select){
    if (select.options.length==0) {
        console.log("")
        for (let key in precios["pastas"]) {
            console.log(key); // Pastasey1, key2, key3
        addOption(select, key)

    }    
    }
    
}
function crearPostres(select){
    if (select.options.length==0) {
        console.log("")
        for (let key in precios["postres"]) {
            console.log(key); // postresey1, key2, key3
        addOption(select, key)

    }    
    }
    
}
function crearBebidas(select){
    if (select.options.length==0) {
        console.log("")
        for (let key in precios["bebidas"]) {
            console.log(key); // Output: key1, key2, key3
        addOption(select, key)

    }    
    }
    
}


function enviarFactura() {
    // Get data you want to pass to the next page
    const data = {
        "total_pagado": total_a_pagar
};
    // Serialize data to pass as a query parameter
    const queryParams = new URLSearchParams(data).toString();
    
    // Redirect to the next page with query parameters
    window.location.href = "../email/index.php?" + queryParams;
}