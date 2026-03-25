const UserService = require('./user.service');

class UserController {
    static async register(req, res) {
        try {
            const user = req.body;
            const newUserId = await UserService.registerUser(user);
            
            return res.status(201).json({
                success: true,
                message: 'Usuario registrado correctamente',
                data: newUserId
            });
        } catch (err) {
            return res.status(501).json({
                success: false,
                message: 'Error al registrar el usuario',
                error: err.message || err
            });
        }
    }
}

module.exports = UserController;
