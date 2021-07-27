const {Socket} = require('net');

const socketCli = new Socket();


socketCli.connect({host: 'localhost' , port: 4004}); 
setInterval(myFunction,3000);


function myFunction(){
    socketCli.write('Hola, como estas?');
}
socketCli.setEncoding('utf-8');
socketCli.on('data',(data)=>{
    console.log(data);
})