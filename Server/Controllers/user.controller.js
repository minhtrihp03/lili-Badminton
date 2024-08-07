const db = require("../Models");
const User = db.user;

async function create(req, res, next) {
    try {
        const newUser = new User({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            phone: req.body.phone,
            dob: req.body.dob,
            gender: req.body.gender,
            address: req.body.address,
            roles: req.body.roles
        });

        await newUser.save()
            .then(newDoc => {
                res.status(201).json(newDoc);
            });
    } catch (error) {
        next(error);
    }
}

async function getAllUsers(req, res, next) {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

const userController = {
    create,
    getAllUsers,
    deleteUser
};

module.exports = userController;