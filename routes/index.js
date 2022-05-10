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
router.post('/customers', async (req, res) => {
  const result = await prisma.createCustomer({
  ...req.body,
})
res.json(result)
});

router.get('/orders', async (req, res) =>{
  //get order info from db
});

//Create new order
router.post('/order', async (req, res) => {
  const result = await prisma.createOrder({
    ...req.body,
  })
  res.json(result)
});
module.exports = router;
