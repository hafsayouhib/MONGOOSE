
import Userdb from "../model/user.js";


export const getuser = (req, res) => {
    Userdb.find()
    .then(users => {
        res.render('getuser', { users });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    });

};


// export const getuser1 = (req, res) => {
//     Userdb.find()
//     .then(users => {
//         res.render('addbook', { users });
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: err.message || "some error occur while retrieving users"
//         })
//     });

// };

export default getuser