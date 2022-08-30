function MyCalculator() {
    const [count, setcount] = React.useState(0)
    
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => {setcount(increment + 1)}}></button>
        <button onClick={() => {setcount(degreace - 1)}}></button>
      </div>
    )
  }
  
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(<MyCalculator/>);