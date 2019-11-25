// implement your API here
const express = require("express");
const cors = require("cors");
const db = require("./data/db.js");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/api/users", (req, res) => {
    db.find()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch(() => {
            res.status(500).json({ error: "The users information could not be retrieved." });
        })
});

server.post("/api/users", (req, res) => {
    const userInfo = req.body;

    if (userInfo.name === undefined || userInfo.bio === undefined) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        db.insert(userInfo)
        .then((user) => {
            res.status(201).json({success: true, user})
        })
        .catch(() => {
            res.status(500).json({ error: "There was an error while saving the user to the database" })
        })
    }
});

server.get("/api/users/:id", (req, res) => {
    const id = req.params.id;

    db.findById(id)
        .then((user) => {
            if (user) {
                res.status(200).json({success: true, user})
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exist." })
            }
        })
        .catch(() => {
            res.status(500).json({ error: "The user information could not be retrieved." })
        })
});

server.delete("/api/users/:id", (req, res) => {
    const {id} = req.params;

    db.remove(id)
        .then((deletedUser) => {
            if (deletedUser) {
                res.status(204).end();
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exist." })
            }
        })
        .catch(() => {
            res.status(500).json({ error: "The user could not be removed" })
        })
});

server.put("/api/users/:id", (req, res) => {
    const {id} = req.params;
    const userInfo = req.body;

    if (userInfo.name === undefined || userInfo.bio === undefined) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        db.update(id, userInfo)
            .then((user) => {
                if (user) {
                    db.findById(id)
                        .then(newUser => {
                            res.status(200).json(newUser)
                        })
                        .catch((err) => {
                            res.status(500).json({ error: "The user information could not be modified." })
                        })
                } else {
                    res.status(404).json({ message: "The user with the specified ID does not exist." })
                }
            })
            .catch(() => {
                res.status(500).json({ error: "The user information could not be modified." })
            })
    }
});

server.listen(5000, () => {
    console.log("Server listening on Port 5000");
})