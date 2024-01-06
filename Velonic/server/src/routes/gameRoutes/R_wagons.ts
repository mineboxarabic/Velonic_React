import { Router } from 'express';

import { AppDataSource } from '../../server';
import { Wagon } from '../../entity/gameEntities/Wagon'; 

const router = Router();

router.post('/', async (req, res) => {
    try {
        const newWagon = AppDataSource.manager.create(Wagon, req.body);
        await AppDataSource.manager.save(newWagon);
        res.status(201).json(newWagon);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const wagons = await AppDataSource.manager.find(Wagon);
        res.json(wagons);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const wagon = await AppDataSource.manager.findOneBy(Wagon, { id: parseInt(id) });
        if (wagon) {
            res.json(wagon);
        } else {
            res.status(404).send('Wagon not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let wagon = await AppDataSource.manager.findOneBy(Wagon, { id: parseInt(id) });
        if (wagon) {
            Object.assign(wagon, req.body);
            const updatedWagon = await AppDataSource.manager.save(wagon);
            res.json(updatedWagon);
        } else {
            res.status(404).send('Wagon not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const wagon = await AppDataSource.manager.findOneBy(Wagon, { id: parseInt(id) });
        if (wagon) {
            await AppDataSource.manager.remove(wagon);
            res.status(200).send('Wagon deleted successfully');
        } else {
            res.status(404).send('Wagon not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
