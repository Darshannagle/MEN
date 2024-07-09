const express = require('express')
const mongoose = require('mongoose');
const Product = require('./model/product.js')
const app = express()
const cors = require('cors')
app.listen(2500, () => {
    console.log("running : 2500");
})
app.get('/', (req, res) => {
    res.send("hello")
})
mongoose.connect("mongodb+srv://username:password@dan.szrelsh.mongodb.net/?retryWrites=true&w=majority&appName=DAN").then(console.log("connected ")).catch((e) => console.log(e));

app.use(cors())
app.use(express.json())

app.post('/api/product', async (req, res) => {
    try {
        console.log(req.body);
        const product = await Product.create(req.body);
        console.log(product);
        res.status(201).send(product);
        // res.created
    } catch (error) {
        console.log(error);
        res.status(500).send(error);


    }

}

)
app.get('/api/product', async (req, res) => {
    try {
        var product = await Product.find();
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);

        console.log(error);
    }
})

app.get('/api/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        var product = await Product.findById(id);
        res.status(200).send(product);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
})

app.put('/api/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log("id", id);
        console.log("body", req.body);
        const up = await Product.findById(id);
        if (!up) {
            return res.status(400).send("product not exist");
        } else {
            var product = await Product.findByIdAndUpdate(id, req.body);
            res.status(200).send(JSON.stringify(product));

        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})
app.use(express.urlencoded({ extended: false }))
app.delete('/api/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        var product = await Product.findByIdAndDelete(id);
        // res.status(200).send(product);
        if (!product) {
            return res.status(400).send("product not exist");
        } else {
            res.status(200).send("product Deleted");

        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error);

    }
})

