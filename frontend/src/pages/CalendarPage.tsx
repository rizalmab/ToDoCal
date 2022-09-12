import { useState } from "react";

function CalendarPage() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<object>({ user: "GC" });

  return (
    <div className="App">
      <h1>Calendar Page</h1>
    </div>
  );
}

export default CalendarPage;
