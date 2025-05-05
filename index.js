const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const Jordan = [
    { id: 1, type: 'Travis Scott x Air Jordan 1 High', name: 'Purple', image:'https://cdn.sanity.io/images/pu5wtzfc/production/9f873b3b77bc6771c839fd568001c664a62efe2c-1200x750.jpg/concept-lab-travis-scott-x-air-jordan-1-high-purple.jpg?w=1200&h=750&auto=format', link: 'https://houseofheat.co/jordan/concept-lab-travis-scott-x-air-jordan-1-high-purple'},
    { id: 2, type: 'Travis Scott x Air Jordan 1 High', name: 'Olive', image:'https://cdn.sanity.io/images/pu5wtzfc/production/e742937ed95215402a4abc994f82a4d52e4f6347-1200x750.jpg/concept-lab-travis-scott-x-air-jordan-1-high-olive.jpg?w=1200&h=750&auto=format', link:'https://houseofheat.co/jordan/concept-lab-travis-scott-x-air-jordan-1-high-olive'},
    { id: 3, type: 'Travis Scott x Air Jordan 1 High', name: 'University Blue', image:'https://cdn.sanity.io/images/pu5wtzfc/production/3edb0dbcf8e67e6a848b5405c924af175d4f6c59-1200x750.jpg/concept-lab-travis-scott-x-air-jordan-1-high-university-blue.jpg?w=1200&h=750&auto=format', link:'https://houseofheat.co/jordan/concept-lab-travis-scott-x-air-jordan-1-high-university-blue'},
    { id: 4, type: 'Air Jordan 1 Patent Leather', name: 'Royal', image:'https://cdn.sanity.io/images/pu5wtzfc/production/b41bfba6009bd2fcd12e12f3c1934de2b770bc29-1080x674.jpg/air-jordan-1-patent-leather-Royal-concept-house-of-heat-leader.jpg?w=1024&h=639&auto=format', link:'https://houseofheat.co/jordan/concept-lab-air-jordan-1-patent-leather-royal'},
    { id: 5, type: 'Air Jordan 1 Patent Leather', name: 'Black Toe', image:'https://cdn.sanity.io/images/pu5wtzfc/production/5bd133df2156225507d05d5fe1a7aa76665907ef-1080x674.jpg/air-jordan-1-patent-leather-black-toe-concept-house-of-heat-leader-min.jpg?w=1024&h=639&auto=format', link:'https://houseofheat.co/jordan/air-jordan-1-patent-leather-black-toe-concept-house-of-heat'},
    { id: 6, type: ' Air Jordan 1 High', name: 'Varsity', image:'https://cdn.sanity.io/images/pu5wtzfc/production/cf3cc6b179a38dc2b58e9adbbe5b012c08e17f80-1200x750.jpg/concept-lab-air-jordan-1-high-varsity.jpg?w=1200&h=750&auto=format', link:'https://houseofheat.co/jordan/concept-lab-air-jordan-1-high-varsitys'},
    { id: 7, type: 'Air Jordan 1 High', name: 'Mocha Toe', image:'https://cdn.sanity.io/images/pu5wtzfc/production/73c95e4aa5a2d2a9687281c33980fe1fe9e9565e-1200x750.jpg/concept-lab-air-jordan-1-high-mocha-toe-3.jpg?w=1200&h=750&auto=format', link:'https://houseofheat.co/jordan/concept-lab-air-jordan-1-high-mocha-toe'},
    { id: 8, type: 'Air Jordan 1 High', name: 'Bordeaux Toe', image:'https://cdn.sanity.io/images/pu5wtzfc/production/a06f3923b6c2c48620f38a397b5f41515d226bb3-1200x750.jpg/concept-lab-air-jordan-1-high-bordeaux-toe.jpg?w=1200&h=750&auto=format', link:'https://houseofheat.co/jordan/concept-lab-air-jordan-1-high-bordeaux-toe'},
    { id: 9, type: 'Air Jordan 1 High', name: 'UNC Toe', image:'https://cdn.sanity.io/images/pu5wtzfc/production/9e260d514cc81485d0081113c8bd53683d227a4c-1200x750.jpg/concept-lab-air-jordan-1-high-unc-toe.jpg?w=1200&h=750&auto=format', link:'https://houseofheat.co/jordan/concept-lab-air-jordan-1-high-unc-toe'},
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
//inputing the line to test