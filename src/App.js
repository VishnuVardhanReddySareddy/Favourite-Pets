import "./App.css";

function App() {
  const pets = [
    {
      name: "Lenny",
      age: 2,
      habits: ["runnig", "sleeping", "playing"],
      image:
        "https://cdn.pixabay.com/photo/2023/08/23/03/33/boxer-8207572_1280.jpg",
    },
    {
      name: "Casey",
      age: 5,
      habits: ["runnig", "jumping", "fetching"],
      image:
        "https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_1280.jpg",
    },
  ];
  return (
    <div className="App">
      <h1>My Favourite Pets</h1>
      <ul className="Container">
        {pets.map((pet, index) => (
          <li key={index}>
            <h1>{pet.name}</h1>
            <h2>
              {pet.name} is {pet.age} years old
            </h2>
            <img src={pet.image} alt="first Pet" width="200px" height="200px" />
            <h3>Habits</h3>
            <ul className="Habits">
              {pet.habits.map((habit, index) => (
                <li key={index}>{habit}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
