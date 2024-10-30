// import { useLocation } from "react-router-dom"
import { useContext } from "react";


const Virat=()=>{
      // const location = useLocation();
   
    if (!players) return <p>Loading...</p>;

    return (
      <div>
        <h1 className="bg-gray-300 text-rose-700 font-bold text-center h-24 py-6 text-4xl"> Hello bhaiya</h1>
       
        {
          players.map((item)=>(
            item.name === "virat" ? 
            <div key={item.name}> 
              <p>{item.name}</p>
              <p>{item.country}</p>
            </div>
              : 
            <p>expected player data not found</p>

          )
          )
        }
        
      </div>
    )
  }

  export default Virat