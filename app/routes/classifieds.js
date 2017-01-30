
'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

router.get('/:id?', (req, res, next) => {
  if (req.params.id) {
    knex.select('id', 'title', 'description', 'price', 'item_image')
      .from('classifieds')
      .where('id', req.params.id)
      .then(result => {
        res.send(result[0]);
      })
      .catch(err => {
        console.log(err);
      })
  } else {
    knex.select('id', 'title', 'description', 'price', 'item_image')
    .from('classifieds')
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.log(err);
    })
  }
});

router.post('/', (req, res, next) => {
  knex('classifieds')
    .insert(req.body, ['id', 'title', 'description', 'price', 'item_image'])
    .then(postedItem => {
      res.send(postedItem[0])
    })
    .catch(err => {
      console.log(err);
    });
});

router.patch('/:id', (req, res, next) => {
  knex('classifieds')
    .update(req.body, ['id', 'title', 'description', 'price', 'item_image'])
    .where('id', req.params.id)
    .then(updatedItem => {
      res.send(updatedItem[0]);
    })
    .catch(err => {
      console.log(err);
    })
});

router.delete('/:id', (req, res, next) => {
  let deletedItem = {};
  knex('classifieds')
    .where('id', req.params.id)
    .then(itemToDelete => {
      if (!itemToDelete) {
        return next();
      }

      deletedItem = itemToDelete[0];

      knex('classifieds')
        .del()
        .where('id', req.params.id)
        .then(() => {
          delete deletedItem.created_at;
          delete deletedItem.updated_at;
          res.send(deletedItem);
        })
        .catch(err => {
          console.log(err);
        })
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;
