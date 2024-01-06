import { Router } from 'express';

import { AppDataSource } from '../../server';
import { Inventory } from '../../entity/gameEntities/Inventory';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const inventoryItems = await AppDataSource.manager.find(Inventory);
        res.json(inventoryItems);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const inventoryItem = await AppDataSource.manager.findOneBy(Inventory, { id });
        if (inventoryItem) {
            Object.assign(inventoryItem, req.body);
            const updatedInventoryItem = await AppDataSource.manager.save(Inventory, inventoryItem);
            res.json(updatedInventoryItem);
        } else {
            res.status(404).send('Inventory item not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const inventoryItem = await AppDataSource.manager.findOneBy(Inventory, { id });
        if (inventoryItem) {
            await AppDataSource.manager.remove(Inventory, inventoryItem);
            res.send('Inventory item deleted successfully');
        } else {
            res.status(404).send('Inventory item not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
