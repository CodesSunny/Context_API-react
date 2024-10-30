import { useContext } from "react"
import Context from "../Context"
import { useEffect } from "react"

const Player=()=>{
  const {players}= useContext(Context)

     useEffect(()=>{
      console.log(players);
      
     },[]) 

      return (
        <div>
          <h1 className="bg-gray-300 text-rose-700 font-bold text-center h-24 py-6 text-4xl"> Hello Player</h1>
          <ul  className="grid gap-2 md:grid-cols-5 grid-cols-2 bg-rose-200">
             {
              players.map((item,index)=>(
                <li key={index} className="w-72 h-60">
                       <img src={`/image/${item.image}`} alt={item.name} className="w-full h-full"/>
                       <p className="font-bold bg-rose-300 py-2 text-center capitalize">{item.name} - {item.country}</p>
                </li>
             ))
             }
        </ul>
        </div>
      )
    }
    export default Player