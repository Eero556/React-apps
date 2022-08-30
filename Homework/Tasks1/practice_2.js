


function MyCalculator() {
    // add more code later here...
    return (
      <div>
        <h1>Calculator</h1>
        <div style={{margin:'5px'}}>
          Number 1: <input style={{textAlign:'right'}}/>
        </div>
        <div style={{margin:'5px'}}>
          Number 2: <input style={{textAlign:'right'}}/>
        </div>
        <div>
          <button style={{width:'30px', margin:'5px'}}>  +  </button>
          <button style={{width:'30px', margin:'5px'}}>  -  </button>
          <button style={{width:'30px', margin:'5px'}}>  *  </button>
          <button style={{width:'30px', margin:'5px'}}>  /  </button>
        </div>
        <div style={{margin:'5px'}}>
          Result: <input style={{textAlign:'right'}} readOnly/>
        </div>
      </div>
    )
  }
  
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(<MyCalculator/>);