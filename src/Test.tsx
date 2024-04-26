import React from "react";
import { signIn } from "./apis";

const Test: React.FC = () => {
  return <button onClick={signIn}>Sign In With Google</button>;
};

export default Test;
