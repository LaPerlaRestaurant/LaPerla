


document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form values
    const to = "laperlarestaurante24@gmail.com";
    const name = document.getElementById("nombre").value;
    const phone = document.getElementById("correo").value;
    const subject = document.getElementById('asunto').value;
    const message = document.getElementById('mensaje').value;

    // Construct email body
    const body = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nombre: " + name + "\n Correo: \n " + phone + "\nMensaje:\n" +  message)}`;

    // Open default email client with prefilled data
    window.location.href = body;
});