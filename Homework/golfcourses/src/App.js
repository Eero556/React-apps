import 'leaflet/dist/leaflet.css';
import './App.css';
import { useState,useEffect } from 'react';
import "leaflet/dist/images/marker-shadow.png";
import L from 'leaflet';
import {Marker,Popup, TileLayer, MapContainer} from "react-leaflet"
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

function App() {
  const axios = require('axios').default;
  // needed to use to show icon
  const icon = L.icon({ 
    iconRetinaUrl:iconRetina, 
    iconUrl: iconMarker, 
    shadowUrl: iconShadow 
});
  const position = [62.2426, 25.7473]
  


  const [courses, setCourses] = useState([]);

  

  useEffect(() =>{
    const getUsers = async () => {
      const users = await axios.get('http://localhost:3001/courses');
      setCourses(users.data);
      console.log(courses)
    };
    getUsers()
  },[])


  return (
    <MapContainer style={{width: "100vw",height: "100vh"}} center={position} zoom={8} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    {courses.map((course,index) =>
    <Marker position={[course.lat, course.lng]} key={index} icon={icon}>
      
      <Popup>
        <b>{course.course}</b><br/>
        {course.address}<br/>
        {course.phone}<br/>
        {course.email}<br/>
        <a href={course.web} target="_blank" rel="noopener noreferrer">{course.web}</a><br/>
        <br/>
        <i>{course.text}</i>
      </Popup>
    </Marker>
    )}
  </MapContainer>
  );
}

export default App;
