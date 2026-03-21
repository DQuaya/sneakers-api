const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const Upcoming = [
    { id: 1, type: 'Air Jordan 1 Retro High OG', name: 'Flight CLub', image:'https://cdn.sanity.io/images/pu5wtzfc/production/9f873b3b77bc6771c839fd568001c664a62efe2c-1200x750.jpg/concept-lab-travis-scott-x-air-jordan-1-high-purple.jpg?w=1200&h=750&auto=format', date: 'April 11, 2026'},
    { id: 2, type: 'Air Jordan 5', name: 'Metallic', image:'https://sneakernews.com/wp-content/uploads/2025/07/jordan-5-white-metallic-2000.jpg?w=1920', date:'April 25, 2026'},
    { id: 3, type: 'Air Jordan 6', name: 'Cap And Gown', image:'https://sneakernews.com/wp-content/uploads/2026/03/air-jordan-6-cap-and-gown-2.jpg?w=1200', date:'April 30, 2026'},
    { id: 4, type: 'Air Jordan 4', name: 'Toro', image:'https://sneakernews.com/wp-content/uploads/2026/01/air-jordan-4-toro-bravo-fq8138-600-1.jpg?w=1200', date:'May 2, 2026'},
    { id: 5, type: 'Travis Scott X Air Jordan 1 Low', name: 'Pink Pack', image:'https://sneakernews.com/wp-content/uploads/2026/01/travis-scott-air-jordan-1-low-og-pink-IQ7604-100-5.jpg?w=1200', date:'May 22, 2026'},
    { id: 6, type: 'Travis Scott X Air Jordan 1 Low', name: 'Pink Pack', image:'https://sneakernews.com/wp-content/uploads/2026/01/travis-scott-air-jordan-1-low-og-pink-IQ7604-101-2.jpg?w=1200', date:'May 22, 2026'},
    { id: 7, type: 'Air Jordan 4', name: 'Tour Yellow', image:'https://sneakernews.com/wp-content/uploads/2026/02/air-jordan-1-retro-low-og-howard-ix8478-410.jpg?w=1200', date:'September 5, 2026'},
    { id: 8, type: 'Air Jordan 1 Low', name: 'Howard', image:'https://sneakernews.com/wp-content/uploads/2026/02/air-jordan-1-retro-low-og-howard-ix8478-410.jpg?w=1200', date:'October 1, 2026'},
    { id: 9, type: 'Air Jordan 1 High', name: 'Royal', image:'https://sneakernews.com/wp-content/uploads/2026/01/air-jordan-1-royal-2026-1.jpg?w=1200', date:'October 10, 2026'},
    { id: 10, type: 'Air Jordan 4', name: 'Bred', image:'https://sneakernews.com/wp-content/uploads/2025/12/air-jordan-4-bred-FV5029-001-3.jpg?w=1200', date:'November 27, 2026'},

  ];
  

app.get('/upcoming', (req, res) => {
    res.json(Upcoming);
  });
  
  app.get('/upcoming/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const shoe = Upcoming.find((shoe) => shoe.id === id);
  
    if (!shoe) {
      res.status(404).json({ error: 'Shoe not found' });
    } else {
      res.json(shoe);
    }
  });
  
  app.post('/upcoming', (req, res) => {
    const newShoe = req.body;
    if (!newShoe.id || !newShoe.name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    Upcoming.push(newShoe);
    res.status(201).json(newShoe);
  });
  
  app.put('/upcoming/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedShoe = req.body;
  
    const shoeIndex = Upcoming.findIndex((shoe) => shoe.id === id);
    if (shoeIndex === -1) {
      res.status(404).json({ error: 'Shoe not found' });
    } else {
      Upcoming[shoeIndex] = updatedShoe;
      res.json(updatedShoe);
    }
  });
  
  app.delete('/upcoming/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const shoeIndex = Upcoming.findIndex((shoe) => shoe.id === id);
  
    if (shoeIndex === -1) {
      res.status(404).json({ error: 'Shoe not found' });
    } else {
      Upcoming.splice(shoeIndex, 1);
      res.status(204).send();
    }
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

//   coded by DB
