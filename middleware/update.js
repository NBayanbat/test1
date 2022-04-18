const { body, validationResult } = require("express-validator");

const updateBook = () =>{
    return[
        body("name")
            .not()
            .isEmpty(),
        body("price")
            .not()
            .isEmpty()
            .withMessage("Price empty!"),
        body('isbn')
            .isNumeric()
            .isLength({min:10, max:10})
    ]
}

exports.updateBook = updateBook