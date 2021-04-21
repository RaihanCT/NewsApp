const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
const mongourl = "mongodb://127.0.0.1:27017/newsApp";
mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });
autoIncrement.initialize(mongoose.connection)

const newsModel = require("./models/news.model");
const userModel = require("./models/users.model");
const contactusModel = require("./models/contactus.model");

require("dotenv").config({ path: ".env" })

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
const axios = require("axios").default;

// Fix for CORS issue.
const cors = require("cors");

app.set("view engine", "ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/news", (req, res) => {
    res.render("addNews")
})

app.post("/news", async (req, res) => {
    try {
        const { body } = req;
        const news = new newsModel(body);
        const response = await news.save();
        res.json({message : "Article created"})
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

app.get("/delNewsArticle/:id", async (req, res) => {
    try {
        const {params} = req;
        const id = params.id;
        const docs = await newsModel.deleteOne({id : id});
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

app.get("/newsArticles", async (req, res) => {
    const docs = await newsModel.find({ category: "news" }).sort({ publishedAt: -1 }).limit(3);
    newsList = docs.map((news, index) => {
        return { news }
    })
    // console.log(newsList);
    res.json(newsList);
})

app.get("/allNewsArticles", async (req, res) => {
    const docs = await newsModel.find({ category: "news" }).sort({ publishedAt: -1 });
    newsList = docs.map((news, index) => {
        return { news }
    })
    // console.log(newsList);
    res.json(newsList);
})

app.get("/sportsArticles", async (req, res) => {
    const docs = await newsModel.find({ category: "sports" }).sort({ publishedAt: -1 });
    newsList = docs.map((news, index) => {
        return { news }
    })
    // console.log(newsList);
    res.json(newsList);
})

app.get("/sportsArticles/:id", async (req, res) => {
    const {params} = req;
    const id = params.id;
    //console.log(id);
    const docs = await newsModel.findOne({id: id});
    //console.log(docs);
    res.json(docs);
    
})

app.get("/weather", async (req, res) => {
    try {
        const { latitude, longitude } = req.query
        const dataResponse = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + process.env.WEATHER_API_KEY + '&units=imperial')
        const data = dataResponse.data;
        res.send(data)
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

app.post("/admin-login", async (req, res) => {
    const { body } = req;

    if (body.email && body.email !== "" && body.password && body.password !== "") {
        try {
            const user = await userModel.findOne({ email: body.email, password: body.password }, "-password")
            const token = jwt.sign({ name: user.name, email: user.email }, process.env.APPLICATION_SECRET_KEY)
            res.json({ accessToken: token })
            return true;
        } catch (error) {
            res.status(401).json({ message: "not authorzied" })
            return false;
        }
    }
})

app.get("/verify", async (req, res) => {
    const token = req.headers.authorization || null;
    if (!token) {
        res.status(401).json({ message: "not authorzied" })
        return false;
    }

    try {
        const decoded = jwt.verify(token, process.env.APPLICATION_SECRET_KEY);
        const user = await userModel.findOne({ id: decoded.id }, "-password -_id")
        res.json(user)
        return true;
    } catch (error) {
        res.status(401).json({ message: "not authorzied" })
        return false;
    }
})

app.post("/admin-register", async (req, res) => {
    try {
        const { body } = req;
        const user = new userModel(body)
        const response = await user.save();
        res.json({ message: "User created" })
    } catch (error) {
        res.status(500)
    }
})

//port method for contact-us form
app.post("/contactus", (req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const description = req.body.description;
    let contactUs = new contactusModel({ fName, lName, email, description });
    contactusModel.create(contactUs, function (err, data) {
        if (err) {
            throw err;
        }
        //  res.json({ message : "Record created"})
        res.redirect("http://localhost:4200/contactus")
    })
})

app.listen(3000, () => {
    console.log("App running")
})