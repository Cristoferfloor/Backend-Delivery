const UserModel = require('./user.model');

class UserService {
    static async registerUser(userData) {
        // En un futuro aquí se puede encriptar la contraseña usando bcrypt
        // Ejemplo: userData.password = await bcrypt.hash(userData.password, 10);
        return await UserModel.create(userData);
    }
}

module.exports = UserService;
