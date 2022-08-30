class Movie extends React.Component {
    render() {
        return (
            <div style={{ borderStyle: 'solid', borderWidth: '1px', width: '200px', padding: '5px' }}>
                <p>{this.props.title}</p>
                <p>{this.props.theatre}</p>
                <p>{this.props.time}</p>
            </div>
        )
    }
}

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <Movie title="Frozen 2" theatre="Tennispalatsi - sali 1" time="10:30" />
                <Movie title="Joker" theatre="Tennispalatsi - sali 2" time="12:30" />
                <Movie title="Terminator" theatre="Tennispalatsi - sali 3" time="14:30" />
            </div>
        )
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<MyApp />);