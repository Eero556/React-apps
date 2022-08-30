
function Car() {
    const [counta, setcounta] = React.useState(0)
    const [countb, setcountb] = React.useState(0)
    return (
        <div>
            Audi: {counta}
            <div><h1>audi</h1><img onClick={() =>{setcounta(counta + 1)}} src={"https://audimediacenter-a.akamaihd.net/system/production/media/90567/images/72391bd2d21a80a761f0df1bd5bff197d5804daa/A201895_x500.jpg?1583155437"} /></div>
            <div><h1>bwm</h1><img onClick={() =>{setcountb(countb + 1)}} src={"https://w0.peakpx.com/wallpaper/266/654/HD-wallpaper-bwm-m6-edited-car-logo-cars-black-quattro-cool-auto-lancer.jpg"}/></div>
            Bwm: {countb}
        </div>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(<Car />);