import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Private from "./pages/Private";
import AuthPage from "./pages/AuthPage";
import CalendarPage from "./pages/CalendarPage";

function App() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<object>({ firstname: "GC" });
  const location: object = window;

  return (
    <div className="App">
      <div>Test</div>
      {
        <Router>
          <Routes>
            <Route path="/auth" element={<AuthPage user={user} />} />
            <Route path="/" element={<Private user={user} />}>
              <Route path="/" element={<CalendarPage />} />
            </Route>
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;
