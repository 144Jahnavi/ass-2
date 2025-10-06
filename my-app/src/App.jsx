import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  // Direct Updates: setLikes(likes + 1)
  const handleDirectUpdate = () => {
    setLikes(likes + 1);
    // setLikes(likes + 1);
    // setLikes(likes + 1);
  };

  // Functional Updates: setLikes(prevLikes => prevLikes + 1)
  const handleFunctionalUpdate = () => {
    setLikes((prevLikes) => prevLikes + 1);
    setLikes((prevLikes) => prevLikes + 1);
    setLikes((prevLikes) => prevLikes + 1);
    setLikes((prevLikes) => prevLikes + 1);

  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Likes: {likes}</h2>
      <button onClick={handleDirectUpdate}>Button 1 (Direct Updates)</button>
      <br /><br />
      <button onClick={handleFunctionalUpdate}>Button 2 (Functional Updates)</button>
    </div>
  );
}

export default App;
