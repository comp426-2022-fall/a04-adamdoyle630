#!/usr/bin/env node
import roll from "./lib/roll.js";
import minimist from "minimist";
import express from "express";

const app = express();
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

app.get('/app', (req, res, next) => {
    res.status(200);
    res.send("Status code : 200 OK");
})

app.get('/app/roll', (req, res, next) => {
    res.status(200).json(roll.roll().end());
})

app.get('*', (req, res, next) => {
    res.status(404)
    res.send("404 NOT FOUND")
})

console.log(JSON.stringify(roll()))