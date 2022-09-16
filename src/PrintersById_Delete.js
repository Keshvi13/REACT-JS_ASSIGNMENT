import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
//import '../node_modules/bootstrap/dist/bootstrap.min.css';

export default function PrintersById_Delete(){
 
    let params=useParams();
    const navigate=useNavigate();

    const[Printer,setPrinter]=useState({});
    
    useEffect(()=>{
        fetch("https://630e1d5db37c364eb7133650.mockapi.io/Printers/"+params.id,
        {
            method:"GET"
        }
        )
         .then((res)=>{return res.json()})
         .then((res)=>{setPrinter(res)})
    },[])

return(
    <>
    <div class ="container">
        <div class="row">
    <table>
    
        <tr>
             <td><b><p class="text-dark">Printer_Name:</p></b></td>
             <td>{Printer.PrinterName}</td>
        </tr>
        <tr>
            <td><b><p class="text-dark">Printer_img:</p></b></td> 
            <td><img src ={Printer.PrinterImage} alt="abs"/></td>
        </tr>
        <tr>
             <td ><b><p class="text-dark">Printer_Model:</p></b></td>
             <td>{Printer.PrinterModel}</td>
        </tr>
        <tr>
             <td ><b><p class="text-dark">Printer_Maker</p></b></td>
             <td>{Printer.PrinterMaker}</td>
        </tr>
        <tr>
             <td ><b><p class="text-dark">Printer_Price:</p></b></td>
             <td>{Printer.PrinterPrice}</td>
        </tr>
        <tr>
             <td ><b><p class="text-dark">Printer_Decription:</p></b></td>
             <td>{Printer.PrinterDecription}</td>
        </tr>
        <br/>
        <br/>

    </table>
        
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary" 
            onClick={()=>{fetch("https://630e1d5db37c364eb7133650.mockapi.io/Printers/"+ params.id,
            {
             method:"DELETE"
            })
            .then((res)=>{navigate("/printers");}) }}>    
             DELETE PRINTER
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-dark" 
         onClick={()=>{navigate("/printers/update/"+params.id) }}>
            UPDATE PRINTER
        </button>
        </div>
    </>
)
}