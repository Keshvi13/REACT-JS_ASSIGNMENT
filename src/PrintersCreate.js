import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrintersCreate(){
        const navigate=useNavigate();
        const [data,setData]=useState({});

        return(<>
        
        <div class="container">
          <div class="row">
       <div class="input-group mb-3">
       <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterName:</p></b></span>
       <input onChange={(e)=>{setData({...data, PrinterName: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
       </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterModel:</p></b></span>
        <input onChange={(e)=>{setData({...data, PrinterModel: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterMaker:</p></b></span>
        <input onChange={(e)=>{setData({...data, PrinterMaker: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterImage:</p></b></span>
        <input onChange={(e)=>{setData({...data, PrinterImage: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterPrice:</p></b></span>
        <input onChange={(e)=>{setData({...data, PrinterPrice: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterDecription:</p></b></span>
        <input onChange={(e)=>{setData({...data, PrinterDecription: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        </div>
        <tr>
          <td colSpan="3">
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-primary" type="submit" onClick={()=>{
           fetch("https://630e1d5db37c364eb7133650.mockapi.io/Printers",
           {
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-Type": "application/json"}
            })

           .then((res)=>{navigate("/printers"); }) 
           }}>
             CREATE PRINTERS
          </button>
          </td>
        </tr>
        </div>
      
    </>)
}