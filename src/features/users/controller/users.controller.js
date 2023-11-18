import UserModel from "../model/users.model.js";
import jwt from 'jsonwebtoken';

export default class UserController{
   static signUp(req,res){
        console.log(req.body);
        const {
            name,
            email,
            password,
        } = req.body;
        const user = UserModel.signUp(
            name,
            email,
            password,
        );
        const token = jwt.sign({
            userId: user.id,
            email: user.email,
            name: user.name,
        },
        'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
        {
            expiresIn: '2h',
        }
        );
        console.log(user);
        res.status(201).json({token, user });
    }

    static signIn(req,res){
        const result = UserModel.signIn(
            req.body.email,
            req.body.password
        );
        if(!result){
            return res.status(400).send('Incorrect Credentials');
        }
        else{
            const token = jwt.sign({
                userId: result.id,
                email: result.email,
            },
            'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
            {
                expiresIn: '2h',
            }
            );
            return res.status(200).cookie("jwtToken",token,{ maxAge: 900000, httpOnly: false }).send(token);
        }
    }
    static getAll(req,res){
       const users = UserModel.getAll();
       console.log(users);
       if(users){
        return res.status(200).send(users);
       }
       else{
        return res.status(401).send('No Users');
       }
       
    }
}