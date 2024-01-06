"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../server");
const Horse_1 = require("../entity/Horse");
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const newHorse = server_1.AppDataSource.manager.create(Horse_1.Horse, req.body);
        await server_1.AppDataSource.manager.save(newHorse);
        res.status(201).json(newHorse);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.get('/', async (req, res) => {
    try {
        const horses = await server_1.AppDataSource.manager.find(Horse_1.Horse);
        res.json(horses);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const horse = await server_1.AppDataSource.manager.findOneBy(Horse_1.Horse, { id: parseInt(id) });
        if (horse) {
            res.json(horse);
        }
        else {
            res.status(404).send('Horse not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let horse = await server_1.AppDataSource.manager.findOneBy(Horse_1.Horse, { id: parseInt(id) });
        if (horse) {
            Object.assign(horse, req.body);
            const updatedHorse = await server_1.AppDataSource.manager.save(horse);
            res.json(updatedHorse);
        }
        else {
            res.status(404).send('Horse not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const horse = await server_1.AppDataSource.manager.findOneBy(Horse_1.Horse, { id: parseInt(id) });
        if (horse) {
            await server_1.AppDataSource.manager.remove(horse);
            res.status(200).send('Horse deleted successfully');
        }
        else {
            res.status(404).send('Horse not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = router;
