var color='red'; 
var chalk=require('chalk');

var chalkColor= chalk.blue.bold; 
//or any other chalk color combination

var jaskit= require('jaskit');
var cli= jaskit('% ', chalkColor);
var format1={before: "-", replace:/1/ , put:'>x<' , after:"fin"};


//console.log(cli.header('test for CLI'))
cli.ask("Hi.. How'r you?");
      cli.header("JaSkIt.. Java-Script-Interface CLI");
      cli.ask('Can I ask you somethin?');
	  cli.change(1, format1);		
      cli.ask('How about continue asking you..?');
      cli.to('file.JSON');   
      cli.end();