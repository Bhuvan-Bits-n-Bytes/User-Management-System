const db = require('../db');

// GET all users
const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// CREATE user
const createUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and Email are required" });
    }

    db.query(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email],
        (err) => {
            if (err) return res.status(500).json(err);

            res.status(201).json({ message: "User created successfully" });
        }
    );
};

// UPDATE user
const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;

    db.query(
        "UPDATE users SET name=?, email=? WHERE id=?",
        [name, email, id],
        (err) => {
            if (err) return res.status(500).json(err);

            res.json({ message: "User updated successfully" });
        }
    );
};

// DELETE user
const deleteUser = (req, res) => {
    const id = req.params.id;

    db.query(
        "DELETE FROM users WHERE id=?",
        [id],
        (err) => {
            if (err) return res.status(500).json(err);

            res.json({ message: "User deleted successfully" });
        }
    );
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};