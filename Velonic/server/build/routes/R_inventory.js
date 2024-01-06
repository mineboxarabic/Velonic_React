"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../server");
const Inventory_1 = require("../entity/Inventory");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    try {
        const inventoryItems = await server_1.AppDataSource.manager.find(Inventory_1.Inventory);
        res.json(inventoryItems);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const inventoryItem = await server_1.AppDataSource.manager.findOneBy(Inventory_1.Inventory, { id });
        if (inventoryItem) {
            Object.assign(inventoryItem, req.body);
            const updatedInventoryItem = await server_1.AppDataSource.manager.save(Inventory_1.Inventory, inventoryItem);
            res.json(updatedInventoryItem);
        }
        else {
            res.status(404).send('Inventory item not found');
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
        const inventoryItem = await server_1.AppDataSource.manager.findOneBy(Inventory_1.Inventory, { id });
        if (inventoryItem) {
            await server_1.AppDataSource.manager.remove(Inventory_1.Inventory, inventoryItem);
            res.send('Inventory item deleted successfully');
        }
        else {
            res.status(404).send('Inventory item not found');
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.default = router;
