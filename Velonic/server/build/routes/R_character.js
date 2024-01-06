"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterRoutes = void 0;
const express_1 = require("express");
const server_1 = require("../server");
const Character_1 = require("../entity/Character");
const router = (0, express_1.Router)();
exports.characterRoutes = router;
router.get('/characters', async (req, res) => {
    try {
        const characters = await server_1.AppDataSource.manager.find(Character_1.Character);
        res.json(characters);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.put('/character/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const character = await server_1.AppDataSource.manager.findOneBy(Character_1.Character, { id });
        if (character) {
            Object.assign(character, req.body);
            const updatedCharacter = await server_1.AppDataSource.manager.save(Character_1.Character, character);
            res.json(updatedCharacter);
        }
        else {
            res.status(404).send('Character not found');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
router.delete('/character/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const character = await server_1.AppDataSource.manager.findOneBy(Character_1.Character, { id });
        if (character) {
            await server_1.AppDataSource.manager.remove(Character_1.Character, character);
            res.send('Character deleted successfully');
        }
        else {
            res.status(404).send('Character not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
