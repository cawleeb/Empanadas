document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const empanadaType = document.getElementById('empanadaType').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Thank you for your order, ${name}! You have ordered ${quantity} ${empanadaType} empanadas. We will contact you at ${email} for further details.`);
});
