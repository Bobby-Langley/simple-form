import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogName: " ",
      breed: " ",
      age: " ",
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
      this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    const { dogName, breed, age } = this.state 
    return(
        <>
        <h1>Hi {dogName} </h1>
        <form>
            <label for="dogName">
                Dog Name: &nbsp;
                <input 
                name="dogName"
                type= "text"
                value= {dogName}
                onChange={this.handleChange}
                />
            </label>
            <br/>
            <label for="breed">
                Breed: &nbsp;
                <input 
                name="breed"
                type= "text"
                value= {breed}
                onChange={this.handleChange}
                />
            </label>
            <br/>
            <label for="age">
                age: &nbsp;
                &nbsp;
                <input 
                name="age"
                type= "number"
                value= {age}
                onChange={this.handleChange}
                />
            </label>
        </form>
    </>
    )
  }
}

export default Form;
