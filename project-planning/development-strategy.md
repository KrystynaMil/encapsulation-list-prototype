# Development Strategy

> `List-prototype`

## Creating To-do Lists

 The project is about to build an app that can create and manage lists. We will use HTML / CSS / JavaScript. 
---

## User Story Dependencies

![Story Dependency Diagram](./story-dependencies.png)

---

## WIREFRAME

![wireframe](figma )

---

## 0. Set-Up

> repository owner: [Krystyna]()

**As a User I can see an empty site at the correct URL**

**As a fellow developer I can see the prepared repository**

### Repo

1. Generate a new repo
2. Create initial README file
3. Turn on GitHub Pages
4. Add collaborators
5. Write a dev strategy
6. Prepare a project board

---


## 1. HTML & CSS structure

> assigned to Krystyna

**As a site visitor, I want to see the website layout and elements**


### HTML

- create `input` element
- div element for each display section

### CSS

- styling of the html document and its body
- styling of the background, inner content and lists

---

## 2. Render list prototype

> assign Brain

**As a site visitor, I want to add a To-do List**

### Repository

- developed on a branch called `render`

### views

- create, inside `const listPrototype` object the `render` function that render the new lists

---

## 3. List prototype Add

> 

**As a site visitor, I want to add items on the lists that I create**

### Repository

- developed on a branch called `add`

### Handler

- Create, inside `const listPrototype` object the `add` function that render the new elements of the list 

### listener

- Add listeners for `button` on the list

### views

-- create, inside `const listPrototype` object the `renderList` function that render the new items of the list.


## 4. List prototype Delete

> 

**As a site visitor, I want to delete items on the lists that I created**

### Repository

- developed on a branch called `delete`

### Handler

- Create, inside `const listPrototype` object the `delete` function that render the new elements of the list 

### listener

- Add listeners for `icon` on the list item

### views

-- Edit the `renderList` function that render the new items of the list.


## 5. List prototype Toggle Complete

> 

**As a site visitor, I want to check the items on the lists that I have completed**

### Repository

- developed on a branch called `complete`

### Handler

- Create, inside `const listPrototype` object the `complete` function that render the new elements of the list 

### listener

- Add listeners for `li` elements on the lists


### views

-- Edit the `renderList` function that render the new items of the list.

### CSS

- Create the `complete` class.

---

## 6. List prototype Toggle All

>

**As a site visitor, I want to check all the items on the lists that I have completed**

### Repository

- developed on a branch called `all`

### Handler

- Create, inside `const listPrototype` object the `completeAll` function that render the new elements of the list 

### listener

- Add listeners for `button` elements on the lists


### views

- Edit the `renderList` function that render the new items of the list.

### HTML

- Create `check all` button


---


## 7. Finishing Touches

>

- W3C code validation made
- Fix all bugs and errors 
