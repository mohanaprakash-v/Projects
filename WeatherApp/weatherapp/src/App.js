import { useState } from "react"
import axios from "axios"

function App(){

      //getting data from api
      const [deg,setdeg] = useState("0")
      const [city,setcity] = useState("France")
      const [desc,setdesc] = useState("Rainy")

      //for input data storing in searchbar
      const [evalue, setevalue] = useState("")
      //event is a object
      function handlechange(event){
        setevalue(event.target.value)
      }

      function getweather(){
        // storing datas in weatherdata
          var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${evalue}&appid=972b4cb7b36186bb5d5ec854ce381795`)
          console.log(weatherdata)

          weatherdata.then(function(dalta){
            setdeg(dalta.data.main.temp)
            setdesc(dalta.data.weather[0].main)
            setcity(dalta.data.name)

          })
      }
    return(
      <div className="flex flex-row justify-center h-[100vh] items-center">
        <div style={{"background-image": "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}}
        className="p-4 rounded-xl shadow" >
          <h2 className="font-medium">Hey! ⛅ </h2>
          <p className="text-xs">Do you want to know the Weather Report :)</p>
          <input onChange={handlechange} className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="City Name"></input>
          <br></br>
          <button onClick={getweather} className="bg-black text-white rounded-md p-1 mt-2 text-xs">Get Report ⚡</button>
          <p className="mt-2 text-xs">Degree: {deg} | City: {city}| Weather: {desc}</p>
        </div>
      </div>
    )
  }

export default App