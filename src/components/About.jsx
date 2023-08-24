import Card from "./Card";
import InactiveCard from "./InactiveCard";

//
const About = () => {
  return (
    <div
      id="about"
      className="about-page dark:text-slate-800  p-6 mt-9 bg-white rounded shadow-2xl w-5/6 lg:w-2/3"
    >
      <h1 className="text-2xl py-2">About this project</h1>

      <p className="text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
        cupiditate! Consectetur illo quaerat velit quae doloribus architecto
        veniam deleniti optio a, rem vitae ipsam facilis eligendi quod sunt
        illum odit!
      </p>
      <p className="text-xl py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elizt. Tempore unde
        possimus dolore deleniti quod totam dicta et corporis.
      </p>
      <Card
        stand="Bamboo Stand"
        pledge="Pledge $25 or more"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
        cupiditate! Consectetur illo quaerat velit quae doloribus architecto
        veniam deleniti optio a, rem vitae ipsam facilis eligendi quod sunt
        illum odit!"
        num="101"
      />
      <Card
        stand="Black Edition Stand"
        pledge="Pledge $75 or more"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
        cupiditate! Consectetur illo quaerat velit quae doloribus architecto
        veniam deleniti optio a, rem vitae ipsam facilis eligendi quod sunt
        illum odit"
        num="64"
      />

      <InactiveCard
        stand="Mahoganu Special Edition"
        pledge="Pledge $200 or more"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
        cupiditate! Consectetur illo quaerat velit quae doloribus architecto
        veniam deleniti optio a, rem vitae ipsam facilis eligendi quod sunt
        illum odit"
      />
    </div>
  );
};

export default About;
