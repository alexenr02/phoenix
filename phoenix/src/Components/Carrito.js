
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
    });
  };



  const eliminarMod = (mod) => {
    //setData((prev) => prev.filter((prev) => prev.id !== mod.id));
    console.log(mod)
    axios.delete("http://localhost:5000/api/carrito/del",{
      data:{mod,id:mod.id}
    })
  .then((response)=>{
    console.log(response)
      getAllCharacters();
  })
  .catch((error)=>{
      console.log(error)
  })

  };


  return (
    <div>
        <table className="table table-striped table-white">
        <thead className="thead-dark" >
        
          <tr >

            <th scope="col">Modelo</th>
            <th scope="col">Marca</th>
            <th scope="col">Color</th>
            <th scope="col">Numero</th>
            
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
                    <th><i className="bi bi-trash3" onClick={() => eliminarMod(info)}></i>
                    </th>
                  </tr>
                  
                );
              })}
        
          
        </tbody>
      </table>
    </div>
  )
}

export default Carrito