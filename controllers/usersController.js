const User = require('../models/user');

module.exports = {

    register(req, res) {
        const user = req.body; // Captura los datos que envía el cliente

        User.create(user, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al registrar el usuario',
                    error: err
                });
            }

            return res.status(201).json({  // Corregido: se usa un punto (.) en vez de coma (,)
                success: true,
                message: 'Usuario registrado correctamente',
                data: data  // ID del nuevo usuario registrado
            });
        });
    }
};
