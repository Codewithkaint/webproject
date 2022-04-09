burger=document.querySelector('.burger')
list=document.querySelector('.list')
bar=document.querySelector('.bars')
const express=require('express');
const app=express();
app.get('/aray.html',(req,res)=>{
    const pars={}
    res.status(200).render('aray.html',pars);
    res.end();
})
app.get('/text1.txt', (req, res)=>{
    const par={}
     res.status(200).render('text1.txt', par);
     res.end();
 })
app.get('/text2.txt', (req, res)=>{
    const par={}
     res.status(200).render('text2.txt', par);
     res.end();
 })
app.get('/text3.txt', (req, res)=>{
    const par={}
     res.status(200).render('text3.txt', par);
     res.end();
 })
app.get('/text4.txt', (req, res)=>{
    const par={}
     res.status(200).render('text4.txt', par);
     res.end();
 })
app.get('/text5.txt', (req, res)=>{
    const par={}
     res.status(200).render('text5.txt', par);
     res.end();
 })
app.get('/text6.txt', (req, res)=>{
    const par={}
     res.status(200).render('text6.txt', par);
     res.end();
 })

cont=document.querySelector('.cc')
burger.addEventListener('click',()=>{
    bar.classList.toggle('high')
    list.classList.toggle('v-clss')
    cont.classList.toggle('v-clss')
})
