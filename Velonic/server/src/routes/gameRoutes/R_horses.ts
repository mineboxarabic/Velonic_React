import { Router } from 'express';

import { AppDataSource } from '../../server';
import { Horse } from '../../entity/gameEntities/Horse'; 

const router = Router();

router.post('/', async (req, res) => {
    try {
        const newHorse = AppDataSource.manager.create(Horse, req.body);
        await AppDataSource.manager.save(newHorse);
        res.status(201).json(newHorse);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const horses = await AppDataSource.manager.find(Horse);
        res.json(horses);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const horse = await AppDataSource.manager.findOneBy(Horse, { id: parseInt(id) });
        if (horse) {
            res.json(horse);
        } else {
            res.status(404).send('Horse not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let horse = await AppDataSource.manager.findOneBy(Horse, { id: parseInt(id) });
        if (horse) {
            Object.assign(horse, req.body);
            const updatedHorse = await AppDataSource.manager.save(horse);
            res.json(updatedHorse);
        } else {
            res.status(404).send('Horse not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const horse = await AppDataSource.manager.findOneBy(Horse, { id: parseInt(id) });
        if (horse) {
            await AppDataSource.manager.remove(horse);
            res.status(200).send('Horse deleted successfully');
        } else {
            res.status(404).send('Horse not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
