import { Router } from 'express';

import { WebDBDataSource } from '../../server';
import  W_Users  from '../../entity/webEntities/Users';

import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

import bcrypt from 'bcrypt';
dotenv.config();


const router = Router();

router.post('/', async (req, res) => {
    try {
        const newW_Users = WebDBDataSource.manager.create(W_Users, req.body);
        await WebDBDataSource.manager.save(newW_Users);
        res.status(201).json(newW_Users);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        console.log(W_Users);
        const users = await WebDBDataSource.manager.find(W_Users);
        res.json(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let user = await WebDBDataSource.manager.findOneBy(W_Users, { id: parseInt(id) });
        if (user) {
            Object.assign(user, req.body);
            const updatedW_Users = await WebDBDataSource.manager.save(user);
            res.json(updatedW_Users);
        } else {
            res.status(404).send('W_Users not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await WebDBDataSource.manager.findOneBy(W_Users, { id: parseInt(id) });
        if (user) {
            await WebDBDataSource.manager.remove(user);
            res.status(200).send('W_Users deleted successfully');
        } else {
            res.status(404).send('W_Users not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/login', async (req, res) => {
    //Take the usename and password from the request body
    const { email, password } = req.body;


    //Unhash the password from the database
    //Compare the password from the request body with the unhashed password from the database

    //If email contains @ then search by email else search by username




    try {

        let user;
      if(email.includes('@')){
        user = await WebDBDataSource.manager.findOneBy(W_Users, { email: email });
      }else{
        user = await WebDBDataSource.manager.findOneBy(W_Users, { username: email });
      }
    
    
        if (user) {
            //Compare the password and validate the user
            const validPassword = await bcrypt.compare(password, user.password);

            //Here we check if the password is valid and if it is we generate a token
            if (!validPassword) return res.status(400).send('Invalid password');


            const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
            
            const token = generateToken(user);

            res.status(200).json({token});
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/register', async (req, res) => {
    //Take the usename and password from the request body
    const { username,firstname, lastname, email , password } = req.body;
    //Hash the password
    const salt = await bcrypt.genSalt(5);

    const hashedPassword = await bcrypt.hash(password, salt);


    const newUsername = username.toLowerCase();
    //Create a new user with the username and hashed password
    const newUser = WebDBDataSource.manager.create(W_Users, { username: newUsername, email, password: hashedPassword, firstname, lastname });
    

    //Save the user in the database
    await WebDBDataSource.manager.save(newUser).then((result) => {
      try{
        const token = generateToken(result);

        res.status(200).json({token});
      }catch(err){
        console.log(err);
        res.status(400).json(err);
      }
    }).catch((err) => {

        res.status(500).json(err);
    });

    

});

const generateToken = (user: W_Users) => {
    console.log(process.env.JWT_SECRET);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
    return token;
};

const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        return decoded;
    } catch (error) {
        return null;
    }
};

export default router;
