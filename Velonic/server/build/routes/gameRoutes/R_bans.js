"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../../server");
const Ban_1 = require("../../entity/gameEntities/Ban");
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const newBan = server_1.AppDataSource.manager.create(Ban_1.Ban, req.body);
        await server_1.AppDataSource.manager.save(newBan);
        res.status(201).json(newBan);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.get('/', async (req, res) => {
    try {
        const bans = await server_1.AppDataSource.manager.find(Ban_1.Ban);
        res.json(bans);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let ban = await server_1.AppDataSource.manager.findOneBy(Ban_1.Ban, { id: parseInt(id) });
        if (ban) {
            Object.assign(ban, req.body);
            const updatedBan = await server_1.AppDataSource.manager.save(ban);
            res.json(updatedBan);
        }
        else {
            res.status(404).send('Ban not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ban = await server_1.AppDataSource.manager.findOneBy(Ban_1.Ban, { id: parseInt(id) });
        if (ban) {
            await server_1.AppDataSource.manager.remove(ban);
            res.status(200).send('Ban deleted successfully');
        }
        else {
            res.status(404).send('Ban not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = router;
