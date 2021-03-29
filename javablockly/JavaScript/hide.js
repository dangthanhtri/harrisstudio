var socket = io();


document.getElementById("turnOff").disabled = true;

function lighton(){
    socket.emit("lighton");
    document.getElementById("turnOn").disabled = true;
    document.getElementById("turnOff").disabled = false;
    console.log("on");
};

function lightoff(){
    socket.emit("lightoff");
    document.getElementById("turnOff").disabled = true;
    document.getElementById("turnOn").disabled = false;
    console.log("off");
};