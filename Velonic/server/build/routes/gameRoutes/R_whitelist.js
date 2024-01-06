"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../../server");
const Whitelist_1 = require("../../entity/gameEntities/Whitelist");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    try {
        const whitelistEntries = await server_1.AppDataSource.manager.find(Whitelist_1.Whitelist);
        res.json(whitelistEntries);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const whitelistEntry = await server_1.AppDataSource.manager.findOneBy(Whitelist_1.Whitelist, { id });
        if (whitelistEntry) {
            Object.assign(whitelistEntry, req.body);
            const updatedWhitelistEntry = await server_1.AppDataSource.manager.save(Whitelist_1.Whitelist, whitelistEntry);
            res.json(updatedWhitelistEntry);
        }
        else {
            res.status(404).send('Whitelist entry not found');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const whitelistEntry = await server_1.AppDataSource.manager.findOneBy(Whitelist_1.Whitelist, { id });
        if (whitelistEntry) {
            await server_1.AppDataSource.manager.remove(Whitelist_1.Whitelist, whitelistEntry);
            res.send('Whitelist entry deleted successfully');
        }
        else {
            res.status(404).send('Whitelist entry not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = router;
