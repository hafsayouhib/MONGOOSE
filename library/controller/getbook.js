
import bookdb from "../model/book.js";


export const getuser = (req, res) => {
    bookdb.find()
    .then(books => {
        res.render('getbook', { books });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    });

};

export default getuser