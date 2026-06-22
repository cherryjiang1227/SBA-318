# SBA 318: Express Server Application — Modern Furniture Store

## Project Overview
For this skill-based assessment, I built **Modern Furniture Store**, a fictional furniture retailer featuring contemporary furniture from well-known brands such as Design Within Reach, Herman Miller, West Elm, CB2, and IKEA.

The goal of this project was to create a RESTful Express application that allows users to browse furniture, organize products by brand and room, and perform basic CRUD operations through a custom API. I also implemented server-side rendering using EJS to create simple webpages that interact with the API.
---

## Technical Breakdown

### Express Server
The application was built using **Node.js** and **Express**. Express handles routing, middleware, and API responses while EJS renders the application's views.

### RESTful API
The application contains three primary data categories: furniture, brands, and rooms
The Furniture API supports full CRUD functionality: GET, POST, PATCH, and DELETE
Route parameters are used to retrieve individual furniture items, while query parameters allow filtering furniture by brand or room.

### Middleware
The application includes multiple middleware functions, including:
* Express JSON middleware
* URL-encoded form middleware
* Custom request logging middleware
* Custom welcome middleware
* Error-handling middleware

### Views
The application uses EJS as its template engine to render multiple pages. Users can navigate between pages and submit a form that sends data directly to the RESTful API.

### Styling
A simple external CSS stylesheet provides consistent styling throughout the application.

---

## Technologies Used
* Node.js
* Express
* EJS
* HTML5
* CSS3
* JavaScript (ES6)

---

## Project Structure
* RESTful Express server
* Route organization
* Reusable middleware
* Data stored in separate modules
* Template views with EJS
* Static CSS served through Express

---

## GitHub Repository

**Repository:** (https://github.com/cherryjiang1227/SBA-318)

---

## Reflection

### What could I have done differently during the planning stages?
I would have spent more time planning the overall navigation and user experience before beginning development. While the API structure came together fairly quickly, planning the rendered views ahead of time would have made organizing the pages even easier.

### Were there any difficult requirements?
The most challenging part of the project was organizing the Express routes and making sure each route worked correctly alongside the middleware. Implementing CRUD operations while keeping the application organized required careful planning.

### What would I add with more time?
With additional time, I would expand the furniture catalog by adding images, product descriptions, and additional filtering options. I would also like to connect the application to a database so that new furniture items persist after restarting the server instead of existing only in memory.
