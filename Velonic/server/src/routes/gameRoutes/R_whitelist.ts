import { Router } from 'express';

import { AppDataSource } from '../../server';
import { Whitelist } from '../../entity/gameEntities/Whitelist'; 

const router = Router();

router.get('/', async (req, res) => {
    try {
        const whitelistEntries = await AppDataSource.manager.find(Whitelist);
        res.json(whitelistEntries);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const whitelistEntry = await AppDataSource.manager.findOneBy(Whitelist, { id });
        if (whitelistEntry) {
            Object.assign(whitelistEntry, req.body);
            const updatedWhitelistEntry = await AppDataSource.manager.save(Whitelist, whitelistEntry);
            res.json(updatedWhitelistEntry);
        } else {
            res.status(404).send('Whitelist entry not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    try {
        const whitelistEntry = await AppDataSource.manager.findOneBy(Whitelist, { id });
        if (whitelistEntry) {
            await AppDataSource.manager.remove(Whitelist, whitelistEntry);
            res.send('Whitelist entry deleted successfully');
        } else {
            res.status(404).send('Whitelist entry not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
