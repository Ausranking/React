const ListRender = () => {
  let items = ["Home", "About", "Contact", "Career", "portfolio", "Career"];
  const listItems = items.map((item) => <li>{item}</li>);

  // I used a map() to render list items for a navbar, but key prop missing

  //Note that each item must have a unique key prop.To do this, the items must be an object inside the array, will have an id,

   items =[{}]
  return (
    <div className="">
      <ul className=" sm:flex gap-5 sm:flex-shrink">{listItems}</ul>
    </div>
  );
};
export default ListRender;
