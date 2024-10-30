import Context from './Context' 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import List from "./components/List"
import Player from "./components/Player"
import Sachin from "./components/Sachin"
import Virat from "./components/Virat"
import Dashboard from './components/Dashboard'
import { useState,useEffect } from 'react'
 

 const App=()=>{
  const[players,setPlayers] = useState([]);
  useEffect(() => {
    console.log("Players set:", players)  //array of players
}, [players]);

  return (
    <Context.Provider value={{players,setPlayers}}> 
    {/* //pass variables as objects in jsx */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/list" element={<List />}/>
          <Route path="/player" element={<Player />}/>
          {/* <Route path="/sachin" element={<Sachin />}/> */}
          {/* <Route path="/virat" element={<Virat/>}/> */}
        </Routes>
      </BrowserRouter>
    </Context.Provider>  
  )
}

export default App