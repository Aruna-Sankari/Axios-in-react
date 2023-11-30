import axios from "axios";
import { useEffect, useState } from "react";
import './Card.css'
const Axios=()=>{
    const[arr,setArr]=useState([])
    const getApi=()=>{
        axios.get("https://api.tvmaze.com/shows/1/cast")
        .then((r)=> setArr(r.data))
       
    }
    useEffect(()=>{
        getApi()

    },[])
    
   



    return(
        <div>
            <div className="row">
            {
                arr.map((e,i)=>{
                    return <div key={i} className="col">
                        <div className="card">
                        <img src={e.person.image.medium} alt=" " />
                        <h2>Name: {e.person.name}</h2>
                        <h5>Birthday: {e.person.birthday}</h5>
                        </div>

                        </div>



                })
            }
            </div>


        </div>
    )
}
export default Axios;