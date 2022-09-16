import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PrintersUpdate(){
    const navigate=useNavigate();
    const params=useParams();
    const [data,setData]=useState({});


    useEffect(()=>{
        fetch("https://630e1d5db37c364eb7133650.mockapi.io/Printers/"+ params.id,
        {
            method:"GET"
        }
        )
         .then((res)=>{return res.json()})
         .then((res)=>{setData(res)})
       },[])


    return(<>
    <div class="container">
      <div class="row">
     <div class="input-group mb-3">
       <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterName</p></b></span>
       <input value={data.PrinterName} onChange={(e)=>{setData({...data, PrinterName: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
       </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterModel</p></b></span>
        <input value={data.PrinterModel} onChange={(e)=>{setData({...data, PrinterModel: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterMaker</p></b></span>
        <input value={data.PrinterMaker} onChange={(e)=>{setData({...data, PrinterMaker: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterImage</p></b></span>
        <input value={data.PrinterImage} onChange={(e)=>{setData({...data, PrinterImage: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterPrice</p></b></span>
        <input value={data.PrinterPrice} onChange={(e)=>{setData({...data, PrinterPrice: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default"><b><p class="text-dark">Enter PrinterDecription</p></b></span>
        <input value={data.PrinterDecription} onChange={(e)=>{setData({...data, PrinterDecription: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

      </div>
        <tr>
        <td colSpan="3">
          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-primary" type="submit" onClick={()=>{
            fetch("https://630e1d5db37c364eb7133650.mockapi.io/Printers/"+params.id,
            {
            method:"PUT",
            body:JSON.stringify(data),
            headers:{"Content-Type": "application/json"}
            })
            .then((res)=>{
            navigate("/printers");})
            }}>
            UPDATE PRINTERS
          </button>
        </td>
        </tr>
       </div>
    </>)
}