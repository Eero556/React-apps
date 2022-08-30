
import './App.css';

function App() {
  const movies = [{ title: "predators", year: "1998" }, { title: "Black phone", year: "2010" }, { title: "avatar", year: "2012" }]
  return (
    <div className="App">
      <div>{movies.map((movie) => (
            <div>
                <p>{movie.title}</p>
                <p>{movie.year}</p>
            </div>
        ))}</div>
    </div>
  );
}

export default App;
