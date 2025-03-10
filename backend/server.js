

import express from 'express'

const port =3000

const app=express()

app.listen(port)

app.get('/',(req,res)=>{

    res.send('hello')
})