# CurrencyConverter
Sample Angular application for currency conversion based on fixer API

### Basic functionality 

1) This application lets the user to select the source currency and get the target currency. 
2) User needs to enter the amount next to source currency to view the equivalent target currency.

### Behind the scenes

1) Consumes api.fixer.io API.
2) Populates the currency types and exchange rates based on the response returned from API.
3) Considered only 3 types of currencies [CAD, USD, EUR].
4) Calculates the target value based on the conversion rate from api with EUR as base.

### Technology stack 

(1) Used angularjs, npm, webpack, es6 ...etc
(2) Used scss for styling.
(3) Please explore package.json and project to get the full understanding.  

### How to run

1) Download or clone the project
   command to clone 'git clone https://github.com/MaanasaL/CurrencyConverter.git'     
2) Install - run 'npm install' command in root directory (same directory with package.json)
3) Run command 'npm start' to start the application
4) Open browser and use URL http://127.0.0.1:4200/ to launch the application
