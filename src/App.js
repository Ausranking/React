import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import About from "./components/About";
import InactiveCard from "./components/InactiveCard";

function App() {
  return (
    <div className="app dark:bg-slate-900 dark:text-white">
      <Header />

      <section className="grid place-items-center relative -top-24">
        <About />
      </section>
      <Form />
    </div>
  );
}

export default App;
