import { Component } from "react";
import Card from "./Card";

//Note that in React, every form input must have an onChange handler which enables Users to provide a value for an input

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
  };

  handleChange = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
  };

  render() {
    return (
      <section className="grid place-items-center">
        <h1>React Form</h1>
        <form action="">
          <div>
            <input
              className="text-primary-dark p-2 rounded shadow-xl"
              onChange={this.handleChange}
              placeholder="Enter Firstname"
              type="text"
              value={this.state.firstname}
            />
          </div>

          <div>
            <input
              className="text-primary-dark my-2 rounded p-2 shadow-xl"
              placeholder="Enter Lastname"
              type="text"
              onChange={this.handleLastNameChange}
              value={this.state.lastname}
            />
          </div>

          <button
            type="submit"
            className="submit-btn w-full p-2 ring"
            onSubmit={this.handleSubmit}
          >
            Submit
          </button>
        </form>

        <div>
          <h1>Display User Input</h1>
          <h3 className="text-center">
            Firstname: {this.state.firstname.toLocaleUpperCase()}
          </h3>
          <h3 className="text-center">
            Lastname: {this.state.lastname.toLocaleUpperCase()}
          </h3>
        </div>
        <Card
          stand="A stand in Form"
          pledge="Pledge $5 or more"
          desc=" I am practicing the principle of reuseability in props by using the card componet across other components. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
        cupiditate! Consectetur illo quaerat velit quae doloribus architecto
        veniam deleniti optio a, rem vitae ipsam facilis eligendi quod sunt
        illum odit"
          num="64"
        />
      </section>
    );
  }
}
export default Form;
