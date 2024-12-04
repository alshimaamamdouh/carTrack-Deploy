"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
var tokenAuth = function (req, res, next) {
    try {
        // add token in middleware to use it any where in handlers
        var tokenSecret = process.env.TOKEN_SECRET;
        var authorizationHeader = req.headers.authorization;
        var token = authorizationHeader.split(' ')[1];
        var decoded = jsonwebtoken_1.default.verify(token, tokenSecret);
        req.body.user = decoded;
        return next();
    }
    catch (err) {
        res.status(401);
        res.json('Access denied, invalid token');
    }
};
exports.default = tokenAuth;
