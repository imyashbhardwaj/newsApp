const collection = "Articles";

let addProfile = (req, res, db) => {
    insertDocument(db, req.body, function (result) {
        if (result) {
            res.status(201).send("success");
        } else {
            res.status(502).send("Fail");
        }
    });
};


let insertDocument = function (db, data, callback = {}) {
    db.collection("Profiles").insertOne(data, function (err, result) {
        if (err == null) {
            console.log("Inserted a document into the collection.");
            callback(true);
        } else {
            console.dir(err);
            callback(false);
            return err;
        }
    });
};

let getArticles = (req, res, db) => {
    getDocuments(db, (result) => {
        if (result) {
            res.set("Content-Type", "application/json");
            console.log("sending data", result);
            res.status(200).send(result);
        } else {
            res.status(500).send("Either no documents or error");
        }
    });
};

let getArticlesSort = (req, res, db) => {
    getDocumentsSort(db, (result) => {
        if (result) {
            res.set("Content-Type", "application/json");
            console.log("sending data", result);
            res.status(200).send(result);
        } else {
            res.status(500).send("Either no documents or error");
        }
    });
};

let getArticlesFilter = (req, res, db) => {
    getDocumentsFilter(db, req.body.filters, (result) => {
        if (result) {
            res.set("Content-Type", "application/json");
            console.log("sending data", result);
            res.status(200).send(result);
        } else {
            res.status(500).send("Either no documents or error");
        }
    });
};

let getDocumentsSort = async (db, callback = {}) => {
    var cursor = await db
        .collection(collection)
        .find()
        .sort({ time: -1 })
        .toArray(function (err, result) {
            if (err) {
                callback(false);
                throw err;
            }
            result.sort(function (a, b) {
                return new Date(b.time) - new Date(a.time);
            });
            callback(result);
            return result;
        });
};

let getDocuments = async (db, callback = {}) => {
    var cursor = await db
        .collection(collection)
        .find()
        .toArray(function (err, result) {
            if (err) {
                callback(false);
                throw err;
            }
            result.sort(function (a, b) {
                return new Date(b.time) - new Date(a.time);
            });
            //console.log(result);
            callback(result);
            return result;
        });
};

let getDocumentsFilter = async (db, filters, callback = {}) => {
    var cursor = await db
        .collection(collection)
        .find({ $or: filters })
        .sort({ time: -1 })
        .toArray(function (err, result) {
            if (err) {
                callback(false);
                throw err;
            }
            result.sort(function (a, b) {
                return new Date(b.time) - new Date(a.time);
            });
            //console.log(result);
            callback(result);
            return result;
        });
};

module.exports = { getArticles, getArticlesSort, getArticlesFilter, addProfile };
