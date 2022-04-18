const express = require('express')
const { validationResult } = require('express-validator')
const Book = require('../models/Book')

const getBooks = (req, res, next)=>{
    Book.find({},function(err,data){
        if(err)
        res.json({
            success: false,
            data: err
        })
        else
        res.json({
            success: true,
            data: data
        })
    })
}

const createBook =  (req, res, next)=>{
    const data = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    }else{
    Book.create(data, function(err, data){
        if(err) res.json({
            success: false,
            data: err
        })
        else
        res.json({
            success: true,
            data: data
        })
    })}
}

const updateBook = (req, res, next)=>{
    const data = req.body
    const id = req.params.id
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            success: false,
            errors: errors.array()
        })
    }else{
        Book.updateOne({_id: id}, data, (err,data)=>{
            if(err)res.json({
                success: false,
                data: err
            })
            else
            res.json({
                success: true,
                data: data
            })
        })
    }
}

const deleteBook = (req, res, next)=>{
    const data = req.body
    Book.findOneAndDelete({_id: req.params.id})
    .then((data)=>res.json(data))
    .catch(err => res.json({success:false, data: err}))
}

module.exports = {
    getBooks, createBook, updateBook, deleteBook
}