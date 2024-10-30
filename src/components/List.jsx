import { useEffect,useContext, useState } from "react";
import Context from "../Context"
import { Link,useNavigate } from "react-router-dom";
import Virat from "./Virat";

const khiladi=[
    {
      name:"sachin",
      game:"cricket",
      popular:true,
      country:"India",
      image:"sachin.jpg"
    },
    {
      name:"virat",
      game:"cricket",
      popular:true,
      country:"India",
      image:"virat.jpg"
    },
    {
      name:"dhoni",
      game:"cricket",
      popular:true,
      country:"India",
      image:"dhoni.jpg"
    },
    {
      name:"ronaldo",
      game:"football",
      popular:false,
      country:"portugal",
      image:"ronaldo.jpg"
    },
    {
      name:"yuvi",
      game:"cricket",
      popular:false,
      country:"India",
      image:"yuvi.jpg"
    },
  ];

  
  const List=()=>{
    
  const navigate = useNavigate();
  const seePlayer=(clickedPlayer)=>{
  console.log("see:", clickedPlayer);
  setPlayers(clickedPlayer);  //update state with selected player
  navigate(`/${clickedPlayer.name}`)
  }  
  const {players,setPlayers} = useContext(Context);
    // useContext provides an object, hence to destructure data in it use {}

  useEffect(()=>{
    setPlayers(khiladi); // Update context state with khiladi data
    console.log(players); 
    },[setPlayers]);
  

    return (
      <div>
        <h1 className="bg-gray-300 text-rose-700 font-bold text-center h-24 py-6 text-4xl">List of <Link to="/player"><span className="hover:text-blue-700 hover:underline">players</span></Link></h1>
        <ul  className="grid gap-2 md:grid-cols-5 grid-cols-2 bg-rose-200">
             {
               players.map((item,index)=>(
                 <li key={index} className="w-72 h-60">
                    <button
                     onClick={()=>seePlayer(item,index)}
                     className="w-full h-full">
                       <img src={`/image/${item.image}`} alt={item.name} className="w-full h-full"/>
                       <p className="font-bold bg-rose-300 py-2 text-center capitalize">{item.name} - {item.country}</p>
                    </button>     
                  </li>
             ))
             }
        </ul>
        
      </div>
    )
  }

  export default List