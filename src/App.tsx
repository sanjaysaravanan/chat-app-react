import React from "react";
import "./App.css";
import ChatBox from "./components/ChatBox";
import SignUp from "./SignUp";

const App: React.FC = () => {
  const isAuthenticated = Boolean(localStorage.getItem("auth"));

  const renderUi = () => {
    if (isAuthenticated) {
      return <ChatBox />;
    }
    return <SignUp />;
  };

  return (
    <div className="app">
      <div className="w-screen flex justify-center bg-primary h-screen">
        <div className="w-96 fixed h-screen bg-secondary">{renderUi()}</div>
      </div>
    </div>
  );
};

export default App;
