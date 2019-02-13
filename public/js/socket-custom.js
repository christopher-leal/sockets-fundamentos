var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function () {
    console.log('Perdimon conexion con el servidor');
});

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Christopher',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('respuesta Server:', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', (message) => {
    console.log('Servidor', message);
});