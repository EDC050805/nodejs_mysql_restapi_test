import {pool} from '../db.js' //Va js porque es un módulo local, no de terceros como express, que se tuvo que instalar

export const ping =  async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
}