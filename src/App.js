import React from "react";
import "./App.css";

function App() {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <input
            className="form-field"
            placeholder="Imię"
            name="firstName"
            required
          />
          <input
            className="form-field"
            placeholder="Nazwisko"
            name="lastName"
          />
          <input className="form-field" placeholder="Email" name="email" />
        </div>
      </form>
    </div>
  );
}

export default App;
