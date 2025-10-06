import React from "react";
import "./App.css";

function UserCard({ name, age }) {
  // Determine experience
  const experience =
    age < 22 ? "Beginner" : age < 30 ? "Intermediate" : "Expert";

  // Determine profession
  const profession =
    age < 22 ? "Student" : age < 30 ? "Developer" : "Senior Engineer";

  // Determine status (optional)
  const status = age >= 18 ? "Adult" : "Minor";

  return (
    <div className="user-card">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Experience:</strong> {experience}</p>
      <p><strong>Profession:</strong> {profession}</p>
    </div>
  );
}

export default function App() {
  const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

  return (
    <div className="App">
      <h1>User Cards</h1>
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} age={user.age} />
      ))}
    </div>
  );
}
