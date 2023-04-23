import React from "react";
import "./App.css";
import PaymentTable from "./PaymentTable/PaymentTable";
import Header from "./Header"; 

const App: React.FC = () => {
  const handleBack = () => {
    console.log("Back button clicked");
  };

  return (
    <div className="App">
      <Header title="Payment" onBack={handleBack} />
      <main className="p-4">
        <PaymentTable />
      </main>
    </div>
  );
};

export default App;
