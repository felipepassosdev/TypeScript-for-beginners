import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request : Request, response: Response) {
    
    const user = createUser({
        name : 'felipe', 
        email : 'felipepassosdev@gmail.com', 
        password : '12312dasd34d', 
        techs : ['React', 'Node', 'React Native', {
            linguage : 'JavaScript', experience : 100
        }]
    });

    return response.json({
        msg: `Hello ${user.name}, your email is ${user.email} and your passwword is ${user.password}`
    });
}