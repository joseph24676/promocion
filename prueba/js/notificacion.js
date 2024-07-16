document.addEventListener('DOMContentLoaded', () => {
    const messagesList = document.getElementById('messagesList');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            addMessage(messageText, 'sent');
            messageInput.value = '';
            // Aquí puedes agregar la lógica para enviar el mensaje al servidor
            // Simulación de respuesta automática
            setTimeout(() => {
                addMessage('Muy buen día, creemos que tiene alguna inquietud. Por eso nos pondremos en contacto con usted en las próximas horas. Por favor, esté atento.', 'received');
            }, 1000); // Ajusta el tiempo de respuesta según sea necesario
        }
    });

    function addMessage(text, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        messageElement.textContent = text;
        messagesList.appendChild(messageElement);
        messagesList.scrollTop = messagesList.scrollHeight;
    }

    // Simulación de mensajes recibidos iniciales
    setTimeout(() => addMessage('Mensaje recibido del revisor.', 'received'), 1000);
    setTimeout(() => addMessage('Por favor, suba los documentos requeridos.', 'received'), 3000);
});
