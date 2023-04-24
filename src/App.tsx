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
      <div className="relative">
        <div className="pt-20 md:pt-0 z-0">
          <PaymentTable />
        </div>
      </div>
    </div>
  );
};

export default App;
