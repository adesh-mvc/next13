const bcrypt = require('bcryptjs');;
const Admin = require('../models/admin-book');

const adminResolver = {
    Query: {
        // from adminUser table 
        getAdminUsers: async () => {
            try {
                const users = await Admin.find({});
                return users;
            }
            catch (e) {
                console.log(e)
            }
        }


    },
    Mutation: {
        newAdmin: async (_, { input }) => {
            var salt = bcrypt.genSaltSync(10);
            try {

                const user = new Admin(input);
                user.FullName = input.FullName,
                    user.DisplayName = input.DisplayName,
                    user.UserName = input.UserName,
                    user.Password = bcrypt.hashSync(input.Password, salt),
                    user.ThumbImage = input.ThumbImage

                const result = await user.save();
                return result;
                // return {
                //     code: 201,
                //     success: true,
                //     message: `A user created successfully. `
                // }
            }
            catch (err) {
                console.log(err)
            }
        }
    }
}

module.exports = adminResolver