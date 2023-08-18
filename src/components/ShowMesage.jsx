import { Component } from "react";

// A function bases component, could be declared using function Keyword or ES6 arrow function style

// const ShowMessage = (props) => {

//destructuring props in a functiona component
// const { message, writter } = props;

// note that props are immutable , cannot be modified like this
//    props.message='This is my story'
//    props.writter='Austranking'

//   return (
//     <>
//       <h1>The Message is : {message}</h1>
//       <p>The writter of the message is {writter}</p>
//     </>
//   );
// };

// export default ShowMessage;

//Class based component where a class extends a React Component

class ShowMessage extends Component {
  render() {
    //destructuring props in a class component
    const { message, writter } = this.props;

    return (
      <div className="Message">
        <h1 className="text-red-500 text-2xl ring ">
          The message is : {message} the Writter is : {writter}
        </h1>
      </div>
    );
  }
}
export default ShowMessage;
