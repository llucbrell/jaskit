# JaSkIt

> Java-Script-Interface for CLI

Node module as a object factory. Ask in the console and Write the answers into a file in raw text. More or less, as npm init command.



![](https://raw.githubusercontent.com/llucbrell/jaskit/master/captura.png)



## Install

```
$ npm install jaskit
```


## Usage

```js
var color='red'; 
var chalkColor= chalk.red; 
//or any other chalk color combination

var jaskit= require('JaSkIt');
var cli= jaskit('promt', color);

jaskit.header('This is my question');     
      jaskit.ask('This is other que');
      jaskit.ask('This is another question');
   jaskit.end();
```

Use jaskit for writting raw text on a file

```js
jaskit.ask('This is my question');     
      jaskit.ask('This is other question');
      jaskit.ask('This is another question'); //change the last
      jaskit.change(questionId, objectFormat);
      jaskit.to('name.txt');
   jaskit.end();
```

## Mix It!

Use it alone or with your favorite CLI. 

```js
program
  .command('write [name]') 
  .description('Create a new gangnam-style-guide')
  .action(function(name){
    //body...
    jaskit.ask('This is my question');     
      jaskit.ask('This is other question');
      jaskit.ask('This is another question');
      jaskit.to('name.txt');
   jaskit.end();
    
  }); 
```

## Change format!

Change the text of the user response with a JavaScript object and regular expressions.

```js
var formatFor1={before: "", replace:/fine/ , put:'Ok' , after:""};


cli.ask("Hi.. How'r you?");
      cli.header("JaSkIt.. Java-Script-Interface CLI");
      cli.ask('Can I ask you somethin?');
    cli.change(1, formatFor1);   
      cli.ask('How about continue asking you..?');
      cli.to('file.JSON');   
      cli.end();
```


## License

MIT © [Lucas_C/llucbrell](https://github.com/llucbrell)