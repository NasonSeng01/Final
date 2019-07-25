import React from "react";
import './style.css'; 

class Nav extends React.Component {
  render() {
    return (
      <div class="nav">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <a  data-micron="pop" class="navbar-brand" href="/">Chefs Anonymous</a>
                                <span class="navbar-toggler-icon"></span>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto"/>
                                    <li class="nav-item active">
                                            <a class="nav-link" href="/addRecipe">Add New Recipe<span class="sr-only">(current)</span></a>
                                    </li>
                            <ul class="navbar-nav mr-auto"/>
                                    <li class="nav-item active">
                                            <a class="nav-link" href="/users">Users<span class="sr-only">(current)</span></a>
                                    </li>
                            <ul class="navbar-nav mr-auto"/>
                                    <li class="nav-item active">
                                            <a class="nav-link" href="/addedRecipes">addedRecipes<span class="sr-only">(current)</span></a>
                                    </li>
                    </div>
            </nav>
      </div>

      

    );
  }
}

export default Nav;
