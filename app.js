const express=require('express');

const app=express();
const path=require('path');

const port=process.env.PORT ||80;
app.use(express.static(path.join(__dirname,'views')));




app.get('/', (req, res)=>{
   res.status(200).sendFile(path.join(__dirname,"index.html"));
 })
app.get('/bas', (req, res)=>{
   res.status(200).sendFile(path.join(__dirname,"basic.html"));
 })
app.get('/arr', (req, res)=>{
   res.status(200).sendFile(path.join(__dirname,"aray.html"));
 })
app.get('/fun', (req, res)=>{
   res.status(200).sendFile(path.join(__dirname,"func.html"));
 })
app.get('/lop', (req, res)=>{
   res.status(200).sendFile(path.join(__dirname,"loops.html"));
 })
 app.listen(port,()=>{
     console.log(`YOUR WEBSITE IS READY TO HOST ${port}`);
 })
