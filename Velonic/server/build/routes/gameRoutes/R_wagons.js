"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../../server");
const Wagon_1 = require("../../entity/gameEntities/Wagon");
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const newWagon = server_1.AppDataSource.manager.create(Wagon_1.Wagon, req.body);
        await server_1.AppDataSource.manager.save(newWagon);
        res.status(201).json(newWagon);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.get('/', async (req, res) => {
    try {
        const wagons = await server_1.AppDataSource.manager.find(Wagon_1.Wagon);
        res.json(wagons);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const wagon = await server_1.AppDataSource.manager.findOneBy(Wagon_1.Wagon, { id: parseInt(id) });
        if (wagon) {
            res.json(wagon);
        }
        else {
            res.status(404).send('Wagon not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let wagon = await server_1.AppDataSource.manager.findOneBy(Wagon_1.Wagon, { id: parseInt(id) });
        if (wagon) {
            Object.assign(wagon, req.body);
            const updatedWagon = await server_1.AppDataSource.manager.save(wagon);
            res.json(updatedWagon);
        }
        else {
            res.status(404).send('Wagon not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const wagon = await server_1.AppDataSource.manager.findOneBy(Wagon_1.Wagon, { id: parseInt(id) });
        if (wagon) {
            await server_1.AppDataSource.manager.remove(wagon);
            res.status(200).send('Wagon deleted successfully');
        }
        else {
            res.status(404).send('Wagon not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = router;
