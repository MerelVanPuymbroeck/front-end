import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
     Title: null,
     Author: null,
     Message:null,
     formErrors: {
       Title: "",
       Author:"",
       Message:"",
     }
   };
 } 

 handleSubmit = e => {
   e.preventDefault();
   {/* not going to another page but just staying on the mainpage*/}
 }; 

 render() {
    return (
      <div className="wrapper">
         <div className="form-wrapper">
           <h1>Notes here please</h1>
           <form onSubmit ={this.handleSubmit} noValidate>
            <div className ="Title">
              <label htmlFor="Title">Title</label>
              <input type="text" noValidate className="" placeholder="Title in here" type="text" name="Title" onChange={this.handleChange}/> 
              {/* not be validated when submitted*/}
              </div>
              <div className ="Author">
              <label htmlFor="Author">Author</label>
              <input type="text" noValidate className="" placeholder="Author in here" type="text" name="Author" onChange={this.handleChange}/> 
              {/* not be validated when submitted*/}
              </div>
              <div className ="Message">
              <label htmlFor="Message">Message</label>
              <input type="text" noValidate className="" placeholder="Message in here" type="text" name="Message" onChange={this.handleChange}/> 
              {/* not be validated when submitted*/}
              </div>
              <div className ="Submit">
                <button type="submit">Submit</button>
              </div>
              <div className ="Submit">
                <button type="submit">Edit</button>
              </div>
              <div className ="Submit">
                <button type="submit">Delete</button>
              </div>
           </form>
        </div>
      </div>
    );
  }
}

export default App;
