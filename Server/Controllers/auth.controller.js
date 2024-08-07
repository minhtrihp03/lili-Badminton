const bcrypt = require('bcrypt');
const db = require('../Models');
const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
const config = require('../Config/auth.config');

const { user: User, role: Role } = db;

// Register action
async function register(req, res, next) {
    try {
        if (req.body) {
            const newUser = new User({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, parseInt(process.env.PASSWORD_KEY)),
                phone: req.body.phone,
                username: req.body.username || '',
                dob: req.body.dob || null,
                gender:'',
                address:'',
                roles: req.body.roles
            });

            if (req.body.roles) {
                const roles = await Role.find({name: {$in: req.body.roles}}).exec();

                newUser.roles = roles.map(r => r._id);
                await User.create(newUser)
                    .then(createdUser => {
                        res.status(201).json({ message: "Đăng ký thành công!", user: createdUser });
                    });
                return;
            } else {
                const role = await Role.findOne({name: "member"}).exec();
                newUser.roles = [role._id];
                await User.create(newUser)
                    .then(createdUser => {
                        res.status(201).json({ message: "Đăng ký thành công!", user: createdUser });
                    });
                return;
            }
        }
    } catch (error) {
        next(error);
    }
}

// Login action
async function login(req, res, next) {
    try {
        if (!req.body.email || !req.body.password) {
            throw createHttpError.BadRequest("Email or password is required");
        }
        const existUser = await User.findOne({ email: req.body.email }).populate("roles", "-__v").exec();
        if (!existUser) {
            throw createHttpError.BadRequest("This email does not exist");
        }
        const isMatchPassword = bcrypt.compareSync(req.body.password, existUser.password);
        if (!isMatchPassword) {
            throw createHttpError.BadRequest("Password is incorrect");
        }

        // Generate access token
        let token = jwt.sign({id: existUser._id}, config.secret, {
            algorithm: "HS256",
            expiresIn: config.jwtExpiration
        });

        let authorization = [];
        for (let i = 0; i < existUser.roles.length; i++) {
            authorization.push("ROLE_" + existUser.roles[i].name.toUpperCase());
        }

        // Send object to Client
        res.status(200).json({
            userId: existUser._id,
            email: existUser.email,
            username: existUser.username,
            phone: existUser.phone,
            dob: existUser.dob,
            gender: existUser.gender,
            address: existUser.address,
            roles: authorization,
            accessToken: token
        });
    } catch (error) {
        next(error);
    }
}

// Logout action
async function logout(req, res, next) {
    try {
        
    } catch (error) {
        next(error);
    }
}

// RefreshToken action
async function refreshToken(req, res, next) {
    try {
        
    } catch (error) {
        next(error);
    }
}

const AuthController = {
    register,
    login,
    logout,
    refreshToken
};

module.exports = AuthController;