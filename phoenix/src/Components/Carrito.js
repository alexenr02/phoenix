
import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

function Carrito() {

  useEffect(() => {
    getAllCharacters();
    
   
  }, []);


  const [data, setData] = useState([]);


  const getAllCharacters = () => {
    axios.get("http://localhost:5000/api/carrito").then((response) => {
      console.log(response);
      setData(response.data);
      suma();
      
    });
  };


  function suma(){
    let tot=0;
  data.map((zapato) => (

    tot=tot+zapato.price
   
  ));
  return tot;
 }

 function totalProd(){
return data.length;
}


  const eliminarMod = (mod) => {
    //setData((prev) => prev.filter((prev) => prev.id !== mod.id));
    console.log(mod)
    axios.delete("http://localhost:5000/api/carrito/del",{
      data:{mod,id:mod.id}
    })
  .then((response)=>{

      getAllCharacters();
  })
  .catch((error)=>{
      console.log(error)
  })
 
  };


  return (
    <div>
        <table className="table table-striped table-white">
        <thead className="table-dark" >
        
          <tr className="tamano">

            <th className ="tamTable" scope="col">Modelo</th>
            <th className ="tamTable" scope="col">Marca</th>
            <th className ="tamTable" scope="col">Color</th>
            <th className ="tamTable" scope="col">Numero</th>
            <th className ="tamTable" scope="col">Precio</th>
            <th></th>
          </tr>

        </thead>
        <tbody className="tbody">
          
     
              {data.map((info) => {
                return (
                  <tr className="text-primary" key={info.id}>
                    <th> {info.modelo}</th>
                    <th> {info.marca}</th>
                    <th> {info.color}</th>
                    <th> {info.numero}</th>
                    <th> $ {info.price}</th>
                    <th><i className="bi bi-trash3" onClick={() => eliminarMod(info)}></i>
                    </th>
                  </tr>
                
                );

              })}

              
        
          
        </tbody>
      </table>
      <h4 className="total">Total = ${suma()}</h4>
      <h4 className="total">Productos en el carrito = {totalProd()}</h4>
    </div>
  )
}

export default Carrito