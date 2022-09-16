import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Printers(){
   const[details,setDetails]=useState([]);

useEffect(()=>{
    fetch("https://630e1d5db37c364eb7133650.mockapi.io/Printers")
    .then((res)=>{return res.json()})
    .then((res)=>{setDetails(res)})
},[])

const formeted_detail=details.map((pri)=>{
    return(<>
      <div class="col-3">
      <div class="shadow-lg  bg-body rounded">
        <div class="card border-info mb-4">
        <img src={pri.PrinterImage} class="card-img-top" alt=".." />
        <div class ="card-body"><h5><b>
          <h3 class="text-center">
          <p class="fst-italic">
          <p class="text-body"> 
            Printers Name:
          </p>
          </p>
          </h3>
          <a class="dropdown-item" href={"../printers/" +pri.id}><p class="text-center">{pri.PrinterName}</p></a></b></h5>
        </div>
       </div>
      </div>
    </div>
    <br/>
    </>)})

    return (<>
    <div class ="container">
      <div class="row">{formeted_detail}</div>
    </div>
    </>)
}