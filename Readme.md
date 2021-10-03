# NPM Node Package Manager

 ## Steps
 1. Make sure node is installed. Open the VS Code terminal ctrl+`
 ```bash
     node -v
 ```
 1. Make sure npm is installed. By default node installes npm node package  manager. Check that __npm__ is installed
 ```npm
      npm -v
 ```

  ## How To Initalize A Project To Work With NPM
  Create project folder setup src/
  Run npm init command =====> package.json=====>dependancies project uses
  ```
  npm init
  ```
  ```
  npm init -y
  ```
`
  ## node_modules

  ```npm
        npm i bootstrap
  ```
   ```npm
        npm i bootstrap react react-dom
  ```
  Installing npm modules places the module inside the node_modules dirctory. **Never upload this folder to git**

 # ES Modules

## Use a new copy of your development framework

## Call the folder esmodules





## Default Exports

Module Can only have one default export

```js

const sayHello = ()=> {

return "say hello"

}



export default sayHello



```



## Exports



```js

const sayHello = ()=> {

retrun "say hello"

}



export {sayHello}



```



## Exports



```js

const sayHello = ()=> {

retrun "say hello"

}



export {sayHello}



```



## How to import module



## No Module Fallback

```html

<script nomodule src="fallback.js"></script>

```