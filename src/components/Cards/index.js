import React from "react";
import './style.css';

class Cards extends React.Component {
    render() {
         return (
        <div class="card">
            <div class="card-header">
                Recipe Videos
            </div>
                <div class="card-body">
                        <iframe width="320" height="215" src="https://www.youtube.com/embed/AmC9SmCBUj4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe id="potatoes" width="320" height="215" src="https://www.youtube.com/embed/-Ocre0kXgvg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe id="chicken" width="320" height="215" src="https://www.youtube.com/embed/lz-IV2Z16j0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
        </div>
        );
    }
}
                
                export default Cards;