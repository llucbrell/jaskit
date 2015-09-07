module.exports =function(prom, colr){

 var fs=require('fs');
 var chalk= require('chalk');
 var myStyle;


 var prompt=prom;
 var header;
 var color= setColor(colr);
 var questions=[];
 var index=0;
 var bool=false;
 var fname;
 var confirm;
 var confQuestion;

 return{
 header: function(string){header= myStyle(string);},
 	ask: function(string){ questions.push({quest: string});},
 change: function(callback, number){change(callback, number);    },
     to: function(name){  bool=true; fname=name;           },
    end: function(string){ confQuestion= string; runCLI(); }                              
 };


 function setColor(colorUser){
 	if(!colorUser){
 		myStyle=chalk.white;
 	}
 	else{

 		switch (colorUser){
 			case 'red':
	 			myStyle=chalk.red;
	 			break;
 			case 'green':
 				myStyle=chalk.green;
	 			break;
 			case 'yellow':
 				myStyle=chalk.yellow;
	 			break;
 			case 'blue':
 				myStyle=chalk.blue;
	 			break;
 			case 'grey':
 				myStyle=chalk.grey;
	 			break;
 			case 'white':
 				myStyle=chalk.white;
	 			break;
	 		default:
	 			myStyle=colorUser;
	 			break;
 		}
 	}
}


function runCLI(callback){

writeHeader(header);
console.log(myStyle('Press enter to continue'));
startLoop();
}

function writeHeader(header){
	if(header){
	//header
	console.log();
	console.log(myStyle(header));
	console.log();
 	}
 }

 function writeQuestion(){
 	console.log(myStyle(prompt+ questions[index].quest));	

 }

function writeFile(name, last){
	var toFile=[];

	if(confirm==='Y\n' || confirm==='y\n'){	
		
	questions.forEach(function(element){
		
		 toFile.push(element.answer);
	});
			fs.writeFile(name, toFile.join(""), function (err){
				if (err){
					console.log(err);
					process.exit();
				}
				else{			
					console.log(myStyle(name+' correctly writed'))	;
				    process.exit();
				}	
			});
	}
	else{		
		console.log(myStyle(name+' not writed, try it again'));	
		process.exit();
	}
}


function startLoop(){	
	process.stdin.resume();
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', function (text) {
	//console.log(index);
	getAnswer(text);    
	});
}

function getAnswer(text){

if(questions[index]){
	if(index< questions.length){
	if(questions[index-1]) questions[index-1].answer=text;
    writeQuestion(questions[index]);
    index++;
	}
}
else{	
	if(!bool) process.exit();
	else{
   // questions[index].answer=last;
   		if(questions[index-1].answer){ 
		
		}
		else{
		questions[index-1].answer=text;	
		    console.log();
			console.log(myStyle(confQuestion||'Is every question all right? \n y or n to write them on a file'));
			endLoop();			
		}
	}	
}

}


function endLoop(){	

	process.stdin.resume();
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', function (text) {
	//console.log(index);
	confirm= text;
	//console.log("l"+last);
	format();
	writeFile(fname);    

	});
}

function format(){
	questions.forEach(function(element){
		if(element.replace){
			element.answer= element.answer.replace(element.replace, element.put);
		
		}
		if(element.before){
			element.answer= element.before+ element.answer;
	
		}
		 if(element.after){	
			var arri=element.answer.split("\n");
			arri+=element.after+"\n";
			element.answer=	arri;
		}
		//console.log(element.answer);
	});
}

function change(id, object){

questions[id].before=object.before;
questions[id].replace= object.replace;
questions[id].put= object.put;
questions[id].after= object.after;
	
}


};