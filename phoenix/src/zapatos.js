var express = require("express");
var cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")




//Importar modelo recien creado
const Product = require("./model/products")

dotenv.config()

var app = express();
var PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGODB_HOSTING,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => console.log('db connected'))
.catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


//var carrito=[  

//];

// Routes
  app.get("/", function(req, res) {
    res.send("Welcome to phoenix store");
  });



// Displays carrito
app.get("/api/carrito", async function(req, res) {

    const prods = await Product.find()

    return res.json(prods);
  });





  // Displays a single character, or shows "No character found"
app.get("/api/carrito/:model", async function(req, res) {
    var chosen = req.params.model;
  
    console.log(chosen);
  
    /*for (var i = 0; i < carrito.length; i++) {
      if (chosen === carrito[i].modelo) {
        return res.json(carrito[i]);
      }
    }
  
    return res.send("No moedl found");*/
  
    const prods = await Product.findOne({routeName:chosen})
    if(prods)
    {
      return res.json(prods)
    }
    else
    {
      return res.json({msj: "No se encontraron productos de ese modelo"})
    }

  });





  // Create New model - takes in JSON input//

  app.post("/api/carrito", async function(req, res) {
    var newmodel = req.body;
  
    newmodel.routeName = newmodel.modelo.replace(/\s+/g, "").toLowerCase();

    console.log(newmodel);
    
    const char = new Product(newmodel)
    
    try{
    await char.save() 
      console.log("datos almacenados correctamente")
    } catch(err){
      console.log(err)
    }

    res.json(newmodel);

  });







  // Erase model - takes in JSON input//
  app.delete("/api/carrito/del", async function(req, res) {
    let delmodel = req.body.id;

    Product=Product.filter((prev) => prev.id !== delmodel);
    
    res.status(200).json(delmodel);
    
  });



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  