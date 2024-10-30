import { useContext,useEffect} from "react";
import Context from "../Context";

const Sachin=()=>{
    const {players}= useContext(Context)

    
    if (!players)
      return <Navigate to="/list" />

    return (
      <div>
        <h1 className="bg-gray-300 text-rose-700 font-bold text-center h-24 py-6 text-4xl"> This is Sachin</h1>
            <div className="bg-gray-300 min-h-screen flex justify-center items-center gap-20">
              <img className="w-6/12 border rounded h-96" src={`/image/${players.image}`} alt={players.name}/>   
              <div className="flex flex-col gap-16 capitalize text-xl text-purple-900">
                <p className="font-semibold ">Name: {players.name} </p>
                <p className="font-semibold "> Country: {players.country}</p>
                <p className="font-semibold ">Game:  {players.game}</p>
                <p className="font-semibold ">Popular:  {players.popular == true ?"True" : "False"}</p>
              </div>
            </div>
      </div>
    )
  }

  export default Sachin