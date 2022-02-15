const express = require('express');
const faker = require('faker');

const router = express.Router(); // router es mi manejador de rutas

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query; //le digo que si alguien establece un size, tenga un limite
  const limit = size || 10; //en caso que no manden un limite, que mande 10
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Este es un filtro');
});

router.get('/:id', (req, res) => {
  const { id } = req.params; // esto es sintaxis de ES6, desestructuracion, es lo mismo que poner const id = req.params.id;  // la palabra params me permite leer todos los parametros que trae mi req.
  res.json ({
    id,
    name: 'Product 2',
    price: 2000
  });
});


module.exports = router;
