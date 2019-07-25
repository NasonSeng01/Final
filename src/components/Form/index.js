import React from "react";

class Form extends React.Component {
    render() {
      return (
<div class="form">
        <form id="recipeAdd">
                <div class="form-group">
                        <input placeholder="Search..." type="text" class="form-control" id="search"/>
                </div>
        </form>
</div>
                 
     );
  }
}

export default Form;
