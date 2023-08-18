import React from "react";
import Header from "./components/Header";
import ListOfPeople from "./components/ListOfPeople";

// export default function List() {
//   const listItems = people.map((person) => (
//     <li key={person.id}>
//       <img src={getImageUrl(person)} alt={person.name} />

//       <p>
//         <b>{person.name}</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }

function App() {
  return (
    <div className="app dark:bg-slate-900 dark:text-white">
      <Header />
      <section className=" grid place-items-center">
      </section>
        <ListOfPeople />
    </div>
  );
}

export default App;
