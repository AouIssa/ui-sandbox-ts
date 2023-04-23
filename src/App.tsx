import React from "react";
import "./App.css";
import PaymentTable from "./PaymentTable/PaymentTable";

const App: React.FC = () => {
  return (
    <div className="App">
      <main className="p-4">
        <PaymentTable />
      </main>
    </div>
  );
};

export default App;
