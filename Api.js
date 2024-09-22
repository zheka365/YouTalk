// Задание 1


const btn = document.querySelector('.btn-active');

btn.addEventListener('click', () => {
    const first = document.querySelector('.btn-one');
    const second = document.querySelector('.btn-two');
    if (first.style.display === 'block') {

        first.style.display = 'none';
        second.style.display = 'block';
    } else {
        first.style.display = 'block';
        second.style.display = 'none';
    };
});


// Задание 2


const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    const viewWidth = document.documentElement.clientWidth;
    const viewHeight = document.documentElement.clientHeight;
    alert("Ширина видимой области: " + viewWidth + " пикселей" + "\nВысота видимой области: " + viewHeight + " пикселей");
});


// Задание 3

const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com');

const messageInput = document.getElementById('message-input');
const btn = document.getElementById('send-button');
const chat = document.getElementById('chat-window');

function displayMessage (message) {
    let messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    chat.appendChild(messageDiv);
}


btn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        websocket.send(message);
        messageInput.value = '';
        displayMessage(`Вы: ${message}`);    
    }
})

websocket.onmessage = (e) => {
    displayMessage(`Сервер: ${e.data}`);
}

websocket.onopen = () => {
    console.log('Подключение к серверу');
}

websocket.onclose = () => {
    console.log('Отключение от сервера');
}

websocket.onerror = () => {
    console.log('Ошибка подключения к серверу');
}

const geo = document.getElementById('geo');

geo.addEventListener('click',() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const messageHref = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
            websocket.send(`Ваши координаты: ${latitude}, ${longitude}`);
            displayMessage(`<a href="${messageHref}" target="_blank" title="Открыть в новом окне">${messageHref} Перейти к просмотру геопозиции?</a>`, () => {
            })
        })
    } else {
        displayMessage('Браузер не поддержвиает отправку геопозиции');
    }
})

function displayMessage (messageHref) {
    let messageDiv = document.createElement('div');
    messageDiv.innerHTML = messageHref;
    chat.appendChild(messageDiv);
}
