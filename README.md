## Multiply - Server

This is the server for Multiply's landing page. The backend exposes one RESTful API POST endpoint that accepts as sole parameter an email address, which is to be stored in a database (for a mailing list). 

## Tech stack
* JavaScript
* Express
* Sequelize
* PostgreSQL 

## Endpoints: 

* `POST /contacts`:signup for mailing list

## Description

The goal of this project is to create a landing page for Multiply, a vector graphics project. Multiply lets designers quickly create variations of object designs, making them more efficient in creating repetitive patterns, a process that is now done by hand.

Multiply will be released as a plugin for Adobe Illustrator and Bohemian sketch, and will integrate natively with the target software.

## Setup
* You need a working Postgres database that is preferably empty and running. 
* Install the dependencies using `npm install`
* Start the server using `npm start`
* You can now access endpoints with HTTPie commands on `localhost:4000`

## Motivation

I want to practice and improve:
* Building and deploying a basic landing page.
* Using Express.

I want to learn:
* How to deploy on a VPS.
* What is a logging library and how to add one to a project.
* More about config files (how to use them).

## License
MIT Licence - Copyright &copy; 2019 - Alina Rusu.
