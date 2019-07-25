import React, { Component } from "react";
import Nav from "../components/Nav/index";
import Button from "../components/Button/index";
import Cards from "../components/Cards/index";
import Form from "../components/Form/index";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


render() 
    return (
        <body>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a data-micron="pop" class="navbar-brand" href="/">Chefs Anonymous</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button> 
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                        <a class="nav-link" href="/addRecipe">Add New Recipe<span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item active">
                                        <a class="nav-link" href="/users">Users</a>
                                </li>
                                <li class="nav-item active">
                                        <a class="nav-link" href="/addedRecipes">addedRecipes</a>
                                </li>
                        </ul>
                    <form id="searchRecipes" class="form-inline my-2 my-lg-0">
                            <input id = "homeSearch" class="form-control mr-sm-2" size="40" type="search" placeholder="Search..." aria-label="Search"/>
                                <button id = "homeBtn" class="myButton" type="submit" data-micron = "tada">Search</button>
                    </form>
                </div>
            </nav>
                    <div class="container">
                            <div class="shadow-lg p-12 mb-12 bg-white rounded">
                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                            <img src="img/nicolesy-food-6490_Edit_131011.jpg" class="d-block w-100" alt="Toast"/>
                                                            <div class="carousel-caption d-none d-md-block">
                                                                    <p class="caption"><strong> Discover and Share all of these wonderful recipes</strong></p>
                                                            </div>
                                                    </div>
                                                    <div class="carousel-item">
                                                            <img src="img/Chicken-Curry-_-Food-Photography.jpg" class="d-block w-100" alt="Curry"/>
                                                            <div class="carousel-caption d-none d-md-block">
                                                                    <p class="caption"><strong> Search for Recipes from other Chefs</strong></p>
                                                            </div>
                                                    </div>
                                                    <div class="carousel-item">
                                                            <img src="img/Simplicious-Feb-2012-178-proof.jpg" class="d-block w-100" alt="Noodles"/>
                                                            <div class="carousel-caption d-none d-md-block">
                                                                    <p class="caption"><strong> Understand Your Addiction for Food</strong></p>
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                            <div class="card bg-light border-white mb-3">
                                <div class="card-header">
                                    Recipe Videos
                                </div>
                                    <div class="card-body">
                                            <iframe width="320" height="215" src="https://www.youtube.com/embed/AmC9SmCBUj4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            <iframe id="potatoes" width="320" height="215" src="https://www.youtube.com/embed/-Ocre0kXgvg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            <iframe id="chicken" width="320" height="215" src="https://www.youtube.com/embed/lz-IV2Z16j0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                            </div>
                    </div>
                <script src = "/js/home.js"></script>
            <script src = "/js/chef.js"></script>
        </body>
    );

export default homepage;