import React from "react";
import ToDoSection from "./components/ToDoSection";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <ToDoSection />
      </main>
    </React.Fragment>
  );
}
export default App;
