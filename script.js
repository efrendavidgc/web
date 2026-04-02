// Esperar a que el DOM cargue completamente (buena práctica)
document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDAD 1: MODO OSCURO ---
    
    // 1. Seleccionar el botón y el cuerpo del documento
    const themeButton = document.getElementById('theme-toggle');
    const body = document.body;

    // 2. Agregar el "escuchador" de eventos (Listener)
    themeButton.addEventListener('click', () => {
        // Toggle: Si la clase existe la quita, si no existe la pone
        body.classList.toggle('dark-mode');
        
        // Opcional: Cambiar el texto del botón según el estado
        if (body.classList.contains('dark-mode')) {
            themeButton.textContent = '☀️ Modo Claro';
        } else {
            themeButton.textContent = '🌙 Modo Oscuro';
        }
    });


    // --- FUNCIONALIDAD 2: VALIDACIÓN DE FORMULARIO ---

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        // 1. Prevenir que el formulario se envíe al servidor (por ahora)
        event.preventDefault();

        // 2. Capturar valores
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // 3. Validación simple (lógica condicional)
        if (message.length < 10) {
            alert('Por favor, escribe un mensaje más detallado (mínimo 10 caracteres).');
            return; // Detiene la ejecución si hay error
        }

        // 4. Simulación de éxito
        alert(`¡Gracias! Hemos recibido tu mensaje de: ${email}`);
        
        // Limpiar el formulario
        form.reset();
    });

});