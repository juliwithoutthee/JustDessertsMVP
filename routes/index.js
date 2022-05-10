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
router.post('/customer', async (req, res) => {
  console.log(req.body, typeof req.body)
  const { firstName, lastName, address, city, postalCode } = req.body;
  const result = await prisma.customer.create(
    { data: { firstName, lastName, address, city, postalCode } }
  )
  res.json(result)
});

router.get('/orders', async (req, res) => {
  const orders = await prisma.order.findMany()
  res.json(orders);
});

//Create new order
router.post('/order', async (req, res) => {
  const { customer, items, quantity, totalCost, timeOrdered } = req.body;
  const result = await prisma.order.create({
    data: { customer, items, quantity, totalCost, timeOrdered } 
  })
  res.json(result)
});
module.exports = router;
