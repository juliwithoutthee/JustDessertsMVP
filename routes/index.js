const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

/* GET home page. */
router.get('/', (req, res) => {

  res.send("Hi")
});
router.get('/items', async (req, res) => {
  const items = await prisma.item.findMany()
  console.log(items);
  res.json(items);
})

module.exports = router;
