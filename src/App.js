import React from "react";
import ToDoTable from "./components/toDoSection";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <ToDoTable />
      </main>
    </React.Fragment>
  );
}
export default App;
