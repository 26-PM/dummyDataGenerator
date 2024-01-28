const express = require('express')
const Employee=require('./models/Employee')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@pm.m2egxdw.mongodb.net/?retryWrites=true&w=majority/test');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
// GENERATE
app.get('/generate', async (req, res) => {
  // clear the collection employee
  await Employee.deleteMany({});
  for (let index = 0; index < 10; index++) {
    let e=await Employee.create({
      name:"Abc",
      salary:999
    });
    console.log(e);
  }
  res.render('index', { foo: 'FOO' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


