import React, { Component } from "react";
import "./style.css";



class signup extends Component {render() {
  return (
    <div>
        <h1> Hi this is the sign up Component</h1>
      
        <form onSubmit={this.submitFormHandler}>
          <div>
            <input type="text" name="name" ref="name" />
          </div>
        </form>

        
      
    </div>
  );
}
}

export default signup;