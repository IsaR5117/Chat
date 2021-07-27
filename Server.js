const net = require('net');

const server = net.createServer();



server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('Mensaje recibido desde el cliente: '+ socket.remoteAddress + ' Por el puerto: ' + socket.remotePort + ' Info: ' + data);
        socket.write('Respondo');
    })

    socket.on('close', ()=>{
        console.log('Comunicacion finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    }) 

   /*  setInterval(()=>{
        socket.write('Hola, como estas');
    },6000); */

})


server.listen(4004, ()=>{
console.log('El servidor esta escuchando por el puerto ',server.address().port);
})