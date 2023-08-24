import { people } from "./Data";
import { getImageUrl } from "./GetImage";
import Button from "./ReuseButton";

/*listitems var was gotten from a map of the people array which was imported to this component, a person object was derived from the iteration and given a unique key which is the unique id in each object.

in real cases, the information in {people} are fetched by async/await promises----

*/
// const ListOfPeople = () => {
//   const listitems = people.map((person) => (
//     <li className="p-4  m-4 overflow-hidden" key={person.id}>
//       <img src={getImageUrl(person)} alt={person.name} />

//       <p className="md:text-3xl">
//         {" "}
//         <b>{person.name}</b> is a{" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//       <button>See More</button>
//     </li>
//   ));
//   return (
//     <>
//       <div className="sm:grid place-items-center text-2xl overflow-hidden">
//         <ul className="">{listitems}</ul>
//       </div>
//     </>
//   );
// };

// export default ListOfPeople;

/*This is a test challenge to list two categories (Chemists and everyone else)
  javascript Filter() comes in handy to filter people with profession===chemists resulting into two different arrayy
  First filter the array and then return a list using map()*/

// export default function ListOfPeople() {
//   const Chemists = people.filter((person) => person.profession === "chemist");
//   console.log(Chemists.length);

//   const everyOneElse = people.filter(
//     (person) => person.profession !== "chemist"
//   );

//   return (
//     <>
//       <article className=" p-4 ">
//         <h1 className="text-4xl py-4 text-center">Scientists</h1>
//         <h2>Chemists</h2>
//         <ul>
//           {Chemists.map((person) => (
//             <li className="p-4  m-4 overflow-hidden" key={person.id}>
//               <img src={getImageUrl(person)} alt={person.name} />
//               <p>
//                 <b>{person.name}</b>
//                 {" " + person.profession} known for {person.accomplishment}
//               </p>
//               <Button
//                 id="reusebtn"
//                 text="See More"
//                 link="https://twitter.com/_kingaustinn"
//                 //find a way to this site on button click without <a> element
//               />
//             </li>
//           ))}
//         </ul>
//         <h2> Other Scientists</h2>
//         <ul>
//           {everyOneElse.map((person) => (
//             <li className="p-4  m-4 overflow-hidden" key={person.id}>
//               <img src={getImageUrl(person)} alt="" />
// <p>
//   <b>{person.name}</b>
//   {" " + person.profession} known for {person.accomplishment}
// </p>
//               <Button id="reusebtn2" text="Go here" />
//               {/* used props to reuse a btn for different texts */}
//             </li>
//           ))}
//         </ul>
//       </article>
//     </>
//   );
// }
