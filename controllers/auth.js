import { db } from "../connect.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";

export const register = async (req,res) =>{
    const q = "SELECT * FROM users WHERE username = ?"

     db.query(q,[req.body.username], (error,data)=>{
        if(error) return res.status(500).json(error)
        if(data.length) return res.status(409).json('ce compte n"existe deja...')

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const Values = [ req.body.username, req.body.email, hashedPassword, req.body.name ]

        const q = "INSERT INTO users(`username`,`email`,`password`,`name`) VALUES (?)";

        db.query(q, [Values], (error, data) => {
        if(error) return res.status(500).json(error)
        return res.status(200).json('utilisateur a ete cree avec succes') 
    }); 
});
};

export const login = async (req,res) =>{
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (error,data) => {
        if(error) return res.status(500).json(error)
        if(data.length === 0) return res.status(404).json('Ce compte n"existe pas')

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
        if(!checkPassword) res.status(404).json('Entrer un bon mot de passe ou un bon nom')

        const token = jwt.sign({ id: data[0].id }, 'secretKey')
        const {password, ...others} = data[0];

        res
        .cookie('accessToken', token, {
            httpOnly:true,
        })
        .status(200).json(others)
    })
}


export const logout = async (req,res) =>{
    res.clearCookie("accessToken", {
        secure:true,
        sameSite: 'none'
    }).status(200).json("Application deconnectée...")
}