import { Router } from 'express';

import { AppDataSource } from '../../server';
import { Ban } from '../../entity/gameEntities/Ban'; 

const router = Router();

router.post('/', async (req, res) => {
    try {
        const newBan = AppDataSource.manager.create(Ban, req.body);
        await AppDataSource.manager.save(newBan);
        res.status(201).json(newBan);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const bans = await AppDataSource.manager.find(Ban);
        res.json(bans);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let ban = await AppDataSource.manager.findOneBy(Ban, { id: parseInt(id) });
        if (ban) {
            Object.assign(ban, req.body);
            const updatedBan = await AppDataSource.manager.save(ban);
            res.json(updatedBan);
        } else {
            res.status(404).send('Ban not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ban = await AppDataSource.manager.findOneBy(Ban, { id: parseInt(id) });
        if (ban) {
            await AppDataSource.manager.remove(ban);
            res.status(200).send('Ban deleted successfully');
        } else {
            res.status(404).send('Ban not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
