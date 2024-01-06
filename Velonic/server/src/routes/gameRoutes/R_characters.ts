import { Router } from 'express';

import { AppDataSource } from '../../server';
import { Character } from '../../entity/gameEntities/Character'; 

const router = Router();

router.get('/', async (req, res) => {
    try {
        const characters = await AppDataSource.manager.find(Character);
        res.json(characters);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const character = await AppDataSource.manager.findOneBy(Character, { id });
        if (character) {
            Object.assign(character, req.body);
            const updatedCharacter = await AppDataSource.manager.save(Character, character);
            res.json(updatedCharacter);
        } else {
            res.status(404).send('Character not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const character = await AppDataSource.manager.findOneBy(Character, { id });
        if (character) {
            await AppDataSource.manager.remove(Character, character);
            res.send('Character deleted successfully');
        } else {
            res.status(404).send('Character not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
