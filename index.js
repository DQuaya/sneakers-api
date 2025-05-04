const express = require('express');
const app = express();

app.use(express.json());

const Jordan = [
    { id: 1, type: 'Jordan Retro 1 High', name: 'Reimagined Royal', image:''},
    { id: 2, type: 'Jordan Retro 4', name: 'University Red', image:''},
    { id: 3, type: 'Jordan Retro 1 High', name: 'Pine Green', image:''},
    { id: 4, type: 'Jordan Retro 3', name: 'University Red', image:''},
    { id: 5, type: 'Jordan Retro 12', name: 'Pine Green', image:''},
    { id: 6, type: 'Jordan Retro 4', name: 'University Red', image:''},
    { id: 7, type: 'Jordan Retro 11', name: 'Pine Green', image:''},
    { id: 8, type: 'Jordan Retro 11', name: 'University Red', image:''},
    { id: 9, type: 'Jordan Retro 14', name: 'Pine Green', image:''},
    { id: 10, type: 'Jordan Retro 3', name: 'University Red', image:''},
    { id: 11, type: 'Jordan Retro 1 High', name: 'Pine Green', image:''},
    { id: 12, type: 'Jordan Retro 5', name: 'University Red', image:''},
    { id: 13, type: 'Jordan Retro 1 High', name: 'Pine Green', image:''},
    { id: 14, type: 'Jordan Retro 13', name: 'University Red', image:''},
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