
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
    axios.delete("http://localhost:5000/api/carrito/del",mod)
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
        <table className="table table-dark table-hover">
        <thead>
          <tr className="text-primary">
            <th scope="col">Codigo</th>
            <th scope="col">Productos</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
          </tr>
        </thead>
        <tbody className="tbody">
          
        
          
        </tbody>
      </table>
      <div className="card-body">
              <ul id="character-section" className="list-group"></ul>

              {data.map((info) => {
                return (
                  <li className="list-group-item" key={info.id} >
                    <h2>Modelo: {info.modelo}</h2>
                    <h3>Marca: {info.marca}</h3>
                    <h3>Color: {info.color}</h3>
                    <h3>Numero: {info.numero}</h3>
                    <hr />
                    <i className="bi bi-trash3" onClick={() => eliminarMod(info)}></i>
                  </li>
                  
                );
              })}
            </div>
    </div>
  )
}

export default Carrito