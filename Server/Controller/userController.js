const User = require('../Model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

// Đăng ký người dùng mới
exports.register = async (req, res, next) => {
    try {
        const { username, email, password, role, profile } = req.body;

        // Kiểm tra xem email đã tồn tại chưa
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return next(createError(400, 'Email is already in use.'));
        }

        // Tạo hash cho mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Lưu người dùng mới vào cơ sở dữ liệu
        const user = new User({
            username,
            email,
            password: hashedPassword,
            role,
            profile
        });
        await user.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Error during registration:', error);
        next(error);
    }
};

// Đăng nhập người dùng
exports.login = async (req, res, next) => {
  try {
      const { email, password } = req.body;
      console.log(`Login attempt: ${email}`);

      // Tìm kiếm người dùng theo email
      const user = await User.findOne({ email });
      if (!user) {
          console.log("User not found");
          return next(createError(401, 'Invalid email or password.'));
      }

      console.log(`User found: ${user.email}, Role: ${user.role}`);
      console.log(`Stored hashed password: ${user.password}`);

      // Kiểm tra mật khẩu
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          console.log(`Input password: ${password}`);
          console.log("Password does not match");
          return next(createError(401, 'Invalid email or password.'));
      }

      // Tạo token JWT
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      // Gửi token về client
      res.json({ token });
  } catch (error) {
      console.error('Error during login:', error);
      next(error);
  }
};

// Đăng xuất người dùng
exports.logout = (req, res, next) => {
    res.json({ message: 'Logged out successfully!' });
};
