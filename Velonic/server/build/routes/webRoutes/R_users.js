"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../../server");
const Users_1 = __importDefault(require("../../entity/webEntities/Users"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
dotenv.config();
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const newW_Users = server_1.WebDBDataSource.manager.create(Users_1.default, req.body);
        await server_1.WebDBDataSource.manager.save(newW_Users);
        res.status(201).json(newW_Users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.get('/', async (req, res) => {
    try {
        console.log(Users_1.default);
        const users = await server_1.WebDBDataSource.manager.find(Users_1.default);
        res.json(users);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let user = await server_1.WebDBDataSource.manager.findOneBy(Users_1.default, { id: parseInt(id) });
        if (user) {
            Object.assign(user, req.body);
            const updatedW_Users = await server_1.WebDBDataSource.manager.save(user);
            res.json(updatedW_Users);
        }
        else {
            res.status(404).send('W_Users not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await server_1.WebDBDataSource.manager.findOneBy(Users_1.default, { id: parseInt(id) });
        if (user) {
            await server_1.WebDBDataSource.manager.remove(user);
            res.status(200).send('W_Users deleted successfully');
        }
        else {
            res.status(404).send('W_Users not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.post('/login', async (req, res) => {
    //Take the usename and password from the request body
    const { email, password } = req.body;
    //Unhash the password from the database
    //Compare the password from the request body with the unhashed password from the database
    //If email contains @ then search by email else search by username
    try {
        let user;
        if (email.includes('@')) {
            user = await server_1.WebDBDataSource.manager.findOneBy(Users_1.default, { email: email });
        }
        else {
            user = await server_1.WebDBDataSource.manager.findOneBy(Users_1.default, { username: email });
        }
        if (user) {
            const validPassword = await bcrypt_1.default.compare(password, user.password);
            if (!validPassword)
                return res.status(400).send('Invalid password');
            const token = generateToken(user);
            res.status(200).json({ token });
        }
        else {
            res.status(404).send('W_Users not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.post('/register', async (req, res) => {
    //Take the usename and password from the request body
    const { username, firstname, lastname, email, password } = req.body;
    //Hash the password
    const salt = await bcrypt_1.default.genSalt(5);
    const hashedPassword = await bcrypt_1.default.hash(password, salt);
    const newUsername = username.toLowerCase();
    //Create a new user with the username and hashed password
    const newUser = server_1.WebDBDataSource.manager.create(Users_1.default, { username: newUsername, email, password: hashedPassword, firstname, lastname });
    //Save the user in the database
    await server_1.WebDBDataSource.manager.save(newUser).then((result) => {
        try {
            const token = generateToken(result);
            res.status(200).json({ token });
        }
        catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
});
const generateToken = (user) => {
    console.log(process.env.JWT_SECRET);
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
