require("dotenv").config();
const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
const {
    getArticles,
    getArticlesSort,
    getArticlesFilter,
    addProfile,
} = require("./DBOperations");
const port = process.env.PORT || 5000;
const uri = process.env.CONNECTION_URI;
const client = new MongoClient(uri);

let db;

async function connectDB() {
    await client.connect();
    db = client.db("newsArticles");
    await db.command({ ping: 1 });
    console.log("Connected successfully to Database");
    app.listen(port, () => console.log(`Listening on port ${port}`));
}

connectDB().catch(console.dir);

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    if (req.body.sort == "true") {
        console.log("sending sorted articles");
        getArticlesSort(req, res, db);
        return;
    } else if (req.body.filter == "true") {
        console.log("sending filtered articles");
        getArticlesFilter(req, res, db);
        return;
    }
    getArticles(req, res, db);
});

app.post("/profile", (req, res) => addProfile(req, res, db));
