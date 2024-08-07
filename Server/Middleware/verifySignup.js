const httpErrors = require("http-errors");
const db = require("../Models");

const { user: User, role: Role } = db;

// Kiem tra user da ton tai tu DB
async function checkExistUser(req, res, next) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw httpErrors.BadRequest("Email or password id required");
        }
        if (await User.findOne({ email: req.body.email })) {
            throw httpErrors.BadRequest("Email đã tồn tại");
        }
        next();
    } catch (error) {
        next(error);
    }
}

// Kiem tra xac thuc so dien thoai
async function checkValidPhone(req, res, next) {
    try {
        const { phone } = req.body;
        if (!phone) {
            throw httpErrors.BadRequest("Phone is required");
        }
        if (phone.length !== 10) {
            throw httpErrors.BadRequest("Số điện thoại không hợp lệ");
        }
        next();
    } catch (error) {
        next(error);
    }
}

// Kiem tra roles da ton tai tu DB chua
async function checkExistRoles(req, res, next) {
    try {
        if (req.body.roles) {
            let ROLES = [];
            let roles = await Role.find({});
            roles?.map(r => ROLES.push(r.name)); // ROLES = ["member", "admin", "mod"]

            for (let i = 0; i < req.body.roles.length; i++) {
                if (!ROLES.includes(req.body.roles[i])) {
                    throw httpErrors.BadRequest(`Role '${req.body.roles[i]}' does not exist`);
                }
            }
            next();
        }    
    } catch (error) {
        next(error);
    }
}

const VerifySignup = {
    checkExistUser,
    checkExistRoles,
    checkValidPhone
}

module.exports = VerifySignup;