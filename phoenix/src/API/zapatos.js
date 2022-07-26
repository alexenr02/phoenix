

var express = require("express");
var cors = require("cors")

var app = express();
var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

let model01 = {
    marca: "Pirma",
    color: "blanco",
    numero: 26
  };
  
  let model02 = {
    marca: "Converse",
    color: "negro",
    numero: 20
  };
  
  let model03  = {
    marca: "Nike",
    color: "rojo",
    numero: 21
  };

var carrito=[  
     {
    id: "",
    modelo: "model05",
    marca: "Nike",
    color: "rojo",
    numero: 21
  }
];

// Routes
  app.get("/", function(req, res) {
    res.send("Welcome to phoenix store");
  });
// Displays carrito
app.get("/api/carrito", function(req, res) {
    return res.json(carrito);
  });

  // Displays a single character, or shows "No character found"
app.get("/api/carrito/:model", function(req, res) {
    var chosen = req.params.model;
  
    console.log(chosen);
  
    for (var i = 0; i < carrito.length; i++) {
      if (chosen === carrito[i].modelo) {
        return res.json(carrito[i]);
      }
    }
  
    return res.send("No moedl found");
  
  });



  // Create New model - takes in JSON input//

  app.post("/api/carrito", function(req, res) {
    var newmodel = req.body;
  
    console.log(newmodel);
  
    carrito.push(newmodel);
  
    res.json(newmodel);
  });

  // Erase model - takes in JSON input//
  app.delete("/api/carrito/del", function(req, res) {
    let delmodel = req.body.id;

    carrito=carrito.filter((prev) => prev.id !== delmodel);
    
    res.status(200).json(delmodel);
    
  });



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  