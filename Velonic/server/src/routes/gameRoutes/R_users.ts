import { Router } from 'express';

import { AppDataSource } from '../../server';
import { User } from '../../entity/gameEntities/Users'; 

import dotenv from 'dotenv';
dotenv.config();


const router = Router();

router.post('/', async (req, res) => {
    try {
        const newUser = AppDataSource.manager.create(User, req.body);
        await AppDataSource.manager.save(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await AppDataSource.manager.find(User);
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let user = await AppDataSource.manager.findOneBy(User, { id: parseInt(id) });
        if (user) {
            Object.assign(user, req.body);
            const updatedUser = await AppDataSource.manager.save(user);
            res.json(updatedUser);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await AppDataSource.manager.findOneBy(User, { id: parseInt(id) });
        if (user) {
            await AppDataSource.manager.remove(user);
            res.status(200).send('User deleted successfully');
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


export default router;
