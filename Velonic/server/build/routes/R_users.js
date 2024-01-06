"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../server");
const Users_1 = require("../entity/Users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const newUser = server_1.AppDataSource.manager.create(Users_1.User, req.body);
        await server_1.AppDataSource.manager.save(newUser);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.get('/', async (req, res) => {
    try {
        const users = await server_1.AppDataSource.manager.find(Users_1.User);
        res.json(users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let user = await server_1.AppDataSource.manager.findOneBy(Users_1.User, { id: parseInt(id) });
        if (user) {
            Object.assign(user, req.body);
            const updatedUser = await server_1.AppDataSource.manager.save(user);
            res.json(updatedUser);
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await server_1.AppDataSource.manager.findOneBy(Users_1.User, { id: parseInt(id) });
        if (user) {
            await server_1.AppDataSource.manager.remove(user);
            res.status(200).send('User deleted successfully');
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.post('/login', async (req, res) => {
    //Take the usename and password from the request body
    const { email, password } = req.body;
    try {
        /*const user = await AppDataSource.manager.findOneBy(User, { "username": email });
        if (user) {
            if (user.password === password) {
                const token = generateToken(user);
                res.json({ token });
            } else {
                res.status(401).send('Incorrect password');
            }
        } else {
            res.status(404).send('User not found');
        }*/
    }
    catch (error) {
        res.status(500).send(error);
    }
});
const generateToken = (user) => {
    const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return token;
};
const verifyToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
exports.default = router;
