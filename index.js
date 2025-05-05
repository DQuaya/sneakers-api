const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const Jordan = [
    { id: 1, type: 'Travis Scott x Air Jordan 1 High', name: 'Purple', image:'https://cdn.sanity.io/images/pu5wtzfc/production/9f873b3b77bc6771c839fd568001c664a62efe2c-1200x750.jpg/concept-lab-travis-scott-x-air-jordan-1-high-purple.jpg?w=1200&h=750&auto=format', link: 'https://houseofheat.co/jordan/concept-lab-travis-scott-x-air-jordan-1-high-purple'},
    { id: 2, type: 'Travis Scott x Air Jordan 1 High', name: 'Olive', image:'https://cdn.sanity.io/images/pu5wtzfc/production/e742937ed95215402a4abc994f82a4d52e4f6347-1200x750.jpg/concept-lab-travis-scott-x-air-jordan-1-high-olive.jpg?w=1200&h=750&auto=format', link:'https://houseofheat.co/jordan/concept-lab-travis-scott-x-air-jordan-1-high-olive'},
    { id: 3, type: 'Travis Scott x Air Jordan 1 High', name: 'University Blue', image:'https://cdn.sanity.io/images/pu5wtzfc/production/3edb0dbcf8e67e6a848b5405c924af175d4f6c59-1200x750.jpg/concept-lab-travis-scott-x-air-jordan-1-high-university-blue.jpg?w=1200&h=750&auto=format', link:'https://houseofheat.co/jordan/concept-lab-travis-scott-x-air-jordan-1-high-university-blue'},
    { id: 4, type: 'OFF-WHITE x Air Jordan 1 High', name: 'Alternate Colorways', image:'https://cdn.sanity.io/images/pu5wtzfc/production/d4cfb4b9389d3867150d967a801d999a135333e8-1200x750.jpg/concept-lab-off-white-x-air-jordan-1-high-alternate-colorways.jpg?w=1200&h=750&auto=format', link:'https://houseofheat.co/jordan/concept-lab-off-white-x-air-jordan-1-high-alternate-colorways'},
    { id: 5, type: 'OFF-WHITE x Air Jordan 1 High', name: 'Neon', image:'https://cdn.sanity.io/images/pu5wtzfc/production/c74b89c1cdc77eb906a9db3d05c19c475bc34cc5-1200x826.jpg/OFF-WHITE-x-Air-Jordan-1-High-Neon.jpg?w=1200&h=826&auto=format', link:'https://houseofheat.co/jordan/concept-lab-off-white-x-air-jordan-1-high-alternate-colorways'},
    { id: 6, type: 'OFF-WHITE x Air Jordan 1 High', name: 'Football Grey', image:'https://cdn.sanity.io/images/pu5wtzfc/production/0ba7472bf381f086a63a4ff10699ef4946a2e13e-1200x826.jpg/OFF-WHITE-x-Air-Jordan-1-High-Dolphins.jpg?w=1200&h=826&auto=format', link:'https://houseofheat.co/jordan/concept-lab-off-white-x-air-jordan-1-high-alternate-colorways'},
    { id: 7, type: 'OFF-WHITE x Air Jordan 1 High', name: 'Crimson Tint', image:'https://cdn.sanity.io/images/pu5wtzfc/production/c6ccc4dce50dbe4ad2d7007192be4203fb4b47af-1200x826.jpg/OFF-WHITE-x-Air-Jordan-1-High-Football-Grey.jpg?w=1200&h=826&auto=format', link:'https://houseofheat.co/jordan/concept-lab-off-white-x-air-jordan-1-high-alternate-colorways'},
    { id: 8, type: 'OFF-WHITE x Air Jordan 1 High', name: 'Spruce Green', image:'https://cdn.sanity.io/images/pu5wtzfc/production/f8421af101162b8cb25f4c905cbee660b12fd0bc-1200x826.jpg/OFF-WHITE-x-Air-Jordan-1-High-Crimson-Tint.jpg?w=1200&h=826&auto=format', link:'https://houseofheat.co/jordan/concept-lab-off-white-x-air-jordan-1-high-alternate-colorways'},
    { id: 9, type: 'OFF-WHITE x Air Jordan 1 High', name: 'Blink', image:'https://cdn.sanity.io/images/pu5wtzfc/production/066d074d837cdb48db2690bb939c7ffec52c4f77-1200x826.jpg/OFF-WHITE-x-Air-Jordan-1-High-Blink.jpg?w=1200&h=826&auto=format', link:'https://houseofheat.co/jordan/concept-lab-off-white-x-air-jordan-1-high-alternate-colorways'},
  ];
  

app.get('/jordan', (req, res) => {
    res.json(Jordan);
  });
  
  app.get('/jordan/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const shoe = Jordan.find((shoe) => shoe.id === id);
  
    if (!shoe) {
      res.status(404).json({ error: 'Shoe not found' });
    } else {
      res.json(shoe);
    }
  });
  
  app.post('/jordan', (req, res) => {
    const newShoe = req.body;
    if (!newShoe.id || !newShoe.name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    Jordan.push(newShoe);
    res.status(201).json(newShoe);
  });
  
  app.put('/jordan/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedShoe = req.body;
  
    const shoeIndex = Jordan.findIndex((shoe) => shoe.id === id);
    if (shoeIndex === -1) {
      res.status(404).json({ error: 'Shoe not found' });
    } else {
      Jordan[shoeIndex] = updatedShoe;
      res.json(updatedShoe);
    }
  });
  
  app.delete('/jordan/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const shoeIndex = Jordan.findIndex((shoe) => shoe.id === id);
  
    if (shoeIndex === -1) {
      res.status(404).json({ error: 'Shoe not found' });
    } else {
      Jordan.splice(shoeIndex, 1);
      res.status(204).send();
    }
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

//   coded by DonQuaya