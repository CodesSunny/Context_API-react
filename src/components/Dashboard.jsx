import { useEffect,useContext } from "react";
import Context from "../Context";
import { Link,useNavigate } from "react-router-dom";

const Dashboard=()=>{
  const {players} = useContext(Context);
  const navigate = useNavigate();

   useEffect(()=>{
      if(players.length === 0){
        const timer = setTimeout(()=>{
          navigate("/list")
          console.log("Players in Dashboard:", players);
        },3000)
        return ()=> clearTimeout(timer);
      }
      },[ navigate])

      return (
        <div>
          <h1 className="bg-gray-300 text-rose-700 font-bold text-center h-24 py-6 text-4xl">Know our players</h1>
          <Link className="font-bold text-right block p-3" to="/list">Go to List </Link>
          {players.length === 0 ?(
            <p> Loading interface...</p>
          ) : (
          <ul  className="grid gap-2 md:grid-cols-5 grid-cols-2">
            console.log("Players in Dashboard:", players) 
             {players.map((item,index)=>(
                   <li key={index} className="w-72 h-60">
                       <p>Players</p> 
                       <img src={`/image/${item.image}`} alt={item.name} className="w-full h-full"/>
                  </li>
             ))}
          </ul>
          )}
        </div>
      )
    }
    export default Dashboard