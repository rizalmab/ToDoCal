import { useState } from "react";
import { Link } from "react-router-dom";

function AuthPage(prop: { user: object }) {
  return (
    <div className="App">
      <h1>Not Logged In</h1>
      <Link to="/"></Link>
    </div>
  );
}

export default AuthPage;
