const movies = [{ title: "predators", year: "1998" }, { title: "Black phone", year: "2010" }, { title: "avatar", year: "2012" }]
const element = <h1>{movies.map((movie) => (<div>
    <p>{movie.title}</p>
    <p>{movie.year}</p>
</div>))}</h1>;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element);