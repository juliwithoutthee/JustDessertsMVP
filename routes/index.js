const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Just Desserts' });
  res.send("Hi")
});
router.get('/item', async (req, res) => {
  const items = await prisma.item.findMany()
  res.json(items)
})

module.exports = router;
