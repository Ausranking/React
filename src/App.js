import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import About from "./components/About";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ActiveButton from "./components/ActiveButton";
import Example from "./components/Example";

function App() {
  return (
    <div className="app dark:bg-slate-900 dark:text-white">
      <Header />

      <section className="grid place-items-center relative -top-24">
        <About />
      </section>
      {/* <Example/> */}
    </div>
  );
}

export default App;
