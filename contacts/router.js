const { Router } = require('express');
const Contact = require('./model');

const router = new Router();

router.post('/contacts', (req, res) => {
  const { email } = req.body;
  
  Contact.create({ email})
    .then(() => {
      return res.status(201)
        .json({
          message: 'Mail registration was successful'
        });
    })
    .catch(() => {
      res.status(500)
        .json({
          message: 'Something went wrong! Please try again.'
        });
    });
});

module.exports = router;
// .then(playlist => {
//   return res.status(201)
//     .json({ playlist });
// })