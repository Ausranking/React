import React from "react";
import { people } from "./Data";
import { getImageUrl } from "./GetImage";

/*This comp has props passed into a function to pass the info to another comp*/

function ListSection({ title, people }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {people.map((person) => (
          <li key={person.id} className="p-4  m-4 overflow-hidden">
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}</b>
              {" " + person.profession + " "} known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
//..................ANOTHER COMPONENT TO RENDER IN APP.JS..............

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyOneElse = people.filter(
    (person) => person.profession !== "chemist"
  );
  return (
    <article>
      <h1 className="text-center p-4 text-3xl uppercase">Scientists</h1>
      <ListSection title="OmoAle" people={chemists} />
      <ListSection title="OTHER SCIENTISTS" people={everyOneElse} />
    </article>
  );
}
//........................OR.............................

//There could be another way to avoid repitition of filter()
// export default function list() {
//   const chemists = [];
//   const everyOneElse = [];
//   people.forEach((person) => {
//     if (person.profession === "chemist") {
//       chemists.push(person);
//     } else {
//       everyOneElse.push(person);
//     }
//   });
//   return (
//     <article>
//       <h1 className="text-center p-4 text-3xl uppercase">Scientists</h1>
//       <ListSection title="CHEMISTS" people={chemists} />
//       <ListSection title="OTHER SCIENTISTS" people={everyOneElse} />
//     </article>
//   );
// }
