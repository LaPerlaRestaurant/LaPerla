
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    const to = "laperlarestaurante24@gmail.com";
    const name = document.getElementById("nombres").value;
    const last_name = document.getElementById("apellidos").value;
    const email = document.getElementById("correo").value;
    const event = document.getElementById('evento').value;
    const phone = document.getElementById('telefono').value;

    // Construct email body
    const body = "mailto:${to}?subject=${encodeURIComponent('Eventos La Perla')}&body=${encodeURIComponent('Nombres: ' + name + '\n Apellidos: \n ' + last_name + '\n Correo: \n ' + email + '\n Teléfono: \n ' + phone + '\Evento:\n' +  event )}";
    // Open default email client with prefilled data
    window.location.href = body;
});