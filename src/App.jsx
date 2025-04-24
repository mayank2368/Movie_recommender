import { useEffect, useState } from "react";

const Champ = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}!`);
  }, [hasLiked]);

  useEffect(() => {
    console.log("Card rendered");
  }, []);

  return (
    <div
      className="card"
      onClick={() => setCount((prevCount) => prevCount + 1)}
    >
      <h2>
        {title} <br /> {count || null}
      </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "liked" : "like"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Champ title="Hangover" />
      <Champ title="Mission Impossipimble" />
      <Champ title="Gonjiam" />
    </div>
  );
};

export default App;
