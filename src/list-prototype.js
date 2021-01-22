"use strict";

import { logger } from "../../lib/logger.js";


/* List Prototype

  This object will contain all the methods for your many lists
  in your app you will use Object.create(listPrototype) to create many lists
  it will include all the functions you need for a list:
    logic
    views
    handlers

  You will need to use binding (or arrow functions) to connect handlers to views

*/

export const listPrototype = {
  printState: function () {
    console.log(this.state.name);
  },
  render: function () {
     
    const div = document.createElement("div");

    div.className = "warper";
   
    const button = document.createElement('button');
    button.id='remove';
    button.innerHTML = '<i class="fa fa-trash"></i>';
    button.style.float = 'right';
    button.addEventListener('click',function remove() {
     this.parentNode.remove(); 
    })
    div.appendChild(button);

    //Toggle All button
    const buttonAll = document.createElement('button');
    buttonAll.innerHTML =
      '<i class="fa fa-angle-down" style="font-size:15px"></i>';
    buttonAll.style.float = 'left';
    
    div.appendChild(buttonAll);

    buttonAll.addEventListener("click", this.toggleAll.bind(this));
    const divh3 = document.createElement("h3");
    divh3.innerHTML = this.state.name;


    
    const buttonEl = document.createElement("button");
    buttonEl.innerHTML = "Add";
    buttonEl.id = "add";
    buttonEl.addEventListener("click", this.addTodos.bind(this));
    const todosIN = document.createElement("input");
    todosIN.type = "text";
    todosIN.placeholder = "Todo next";
    todosIN.id = `${this.state.name}newToDo`;
    const todosUl = document.createElement("ul");
    todosUl.id = `${this.state.name}ul`;

    div.appendChild(divh3);
    div.appendChild(todosIN);
    div.appendChild(buttonEl);
    div.appendChild(todosUl);
    return div;
  },

  
