
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    const to = "laperlarestaurante24@gmail.com";
    const name = document.getElementById("nombres").value;
    const last_name = document.getElementById("apellidos").value;
    const email = document.getElementById("correo").value;
    const evento = document.getElementById('evento').value;
    const phone = document.getElementById('telefono').value;

    // Construct email body
    const body = `mailto:${to}?subject=${encodeURIComponent("Planificacion de evento")}&body=${encodeURIComponent("Nombre: " + name + "\nApellido: " + last_name + "\nCorreo: " +  email+ "\nEvento: " +  evento + "\nTeléfono: " +  phone)}`;
    // Open default email client with prefilled data
    window.location.href = body;
});