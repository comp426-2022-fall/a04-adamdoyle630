#!/usr/bin/env node
import roll from "./lib/a03/lib/roll.js";
import minimist from "minimist";
import express from "express";

console.log(JSON.stringify(roll(1,2,3)))