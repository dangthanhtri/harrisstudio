var socket = io();

var toolbox = document.getElementById("toolbox");
console.log(toolbox);

var options = { 
    toolbox : toolbox, 
	collapse : true, 
	comments : true, 
	disable : true, 
	maxBlocks : Infinity, 
	trashcan : true, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : true, 
	sounds : true, 
	oneBasedIndex : true
};

/* Inject your workspace */ 
var workspace = Blockly.inject("BlocklyZone", options);

console.log(workspace);

function submit(){
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	document.getElementById('text').value = code;
	socket.emit("runCode",{
		code:code
	})
}