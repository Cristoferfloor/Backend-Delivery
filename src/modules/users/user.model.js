const db = require('../../config/database');

class UserModel {
    static async create(user) {
        return new Promise((resolve, reject) => {
            const sql = `
            INSERT INTO users (
                email, name, lastname, phone, image, password, created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

            db.query(
                sql,
                [
                    user.email, user.name, user.lastname, user.phone,
                    user.image, user.password, new Date(), new Date()
                ],
                (err, res) => {
                    if (err) {
                        console.log('ERROR: ', err);
                        reject(err);
                    } else {
                        console.log('Id del nuevo usuario: ', res.insertId);
                        resolve(res.insertId);
                    }
                }
            );
        });
    }
}

module.exports = UserModel;
