# JaSkIt

> Java-Script-Interface for CLI

Node module as a object factory. Ask in the console and Write the answers into a file in raw text. More or less, as npm init command.



![](https://github.com/llucbrell/jaskit/captura.png)



## Install

```
$ npm install JaSkIt
```


## Usage

```js
var color='red'; 
var chalkColor= chalk.red; 
//or any other chalk color combination

var jaskit= require('JaSkIt');
var cli= jaskit('promt', color);

jaskit.ask('This is my question');     
      jaskit.ask('This is other question');
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
      jaskit.ask('This is another question'); //change the last
      jaskit.change(questionId, objectFormat);
      jaskit.to('name.txt');
   jaskit.end();
    
  }); 
```


## License

MIT © [Lucas_C/llucbrell](https://github.com/llucbrell)