const express = require('express');
const router = express.Router();
const {fetchFilm} = require('../utils/fetchfilms'); 

router.get('/:title', async (req, res) => {
  try {
      const details = await fetchFilm(req.params.title);
      if (details) {
          res.json(details);
      } else {
          res.status(404).json({ message: "Film not found" });
      }
  } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
  }
});


router.post('/', (req, res) => {
  try {
      res.status(200).json({
          success: true,
          message: `Se ha guardado ${req.body.title}`,
          title: req.body.title,
          id: Math.floor(Math.random() * (10000 - 1) + 1),
          data: req.body
      });
  } catch (error) {
      res.status(500).json({error: `ERROR: ${error.stack}`, message: `Your POST couldn't be saved.`});
  };
});


router.put('/', (req, res) => {
  try {
      res.status(200).json({
          message: `Se ha actualizado ${req.body.title}` 
      });
  } catch (error) {
      res.status(500).json({error: `ERROR: ${error.stack}`, message: `${req.params.title} couldn't be edited.`});
  };
});


router.delete('/', (req, res) => {
  try {
      res.status(200).json({
          message: `Se ha borrado la película con ID: 123`
      });
  } catch (error) {
      res.status(500).json({error: `ERROR: ${error.stack}`, message: `Movie with ID: 123 couldn't be deleted.`});
  };
});

module.exports = router;