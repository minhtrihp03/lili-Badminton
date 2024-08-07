const createHttpError = require("http-errors");
const config = require("../Config/auth.config");
const db = require("../Models");
const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require("jsonwebtoken");

const { user: User, role: Role } = db;

async function verifyToken(req, res, next) {
    try {
        const token = req.headers["x-access-token"];
        if (!token) {
            throw createHttpError.Unauthorized("Token not provided");
        }

        // Verify token
        jwt.verify(token, config.secret, (error, decoded) => {
            if (error) {
                const message = error instanceof JsonWebTokenError ? "Unauthorized: Access Token was expired" : error.message;
                throw createHttpError.Unauthorized(message);
            }
            req.userId = decoded.id;
            next();
        });
    } catch (error) {
        next(error);
    }
}

async function isMember(req, res, next) {
    try {
        
    } catch (error) {
        next(error);
    }
}

async function isMod(req, res, next) {
    try {
        
    } catch (error) {
        next(error);
    }
}

async function isAdmin(req, res, next) {
    try {
        
    } catch (error) {
        next(error);
    }
}

const authJwt = {
    verifyToken,
    isMember,
    isMod,
    isAdmin
}

module.exports = authJwt;