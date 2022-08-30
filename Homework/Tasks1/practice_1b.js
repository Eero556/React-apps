import React from 'react'

function practice_1b() {
    const movies = [{ title: "predators", year: "1998" }, { title: "Black phone", year: "2010" }, { title: "avatar", year: "2012" }]
    return (
        <div>{movies.map((movie) => (
            <div>
                <p>{movie.title}</p>
                <p>{movie.year}</p>
            </div>
        ))}</div>
    )
}
const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<practice_1b />);
