const express = require('express');
const router = express.Router();

var nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
    console.log(req.body)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'javier.san.desarollo@gmail.com',
            pass: 'a6G23f@msHU%23'
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    var mailOptions = {
        from: 'javier.san.desarollo@gmail.com',
        to: 'javier.san.desarollo@gmail.com',
        subject: 'PAGINA WEB!!!',
        text: `
        email: ${req.body.email},
        first name: ${req.body.firstName},
        last name: ${req.body.lastName},
        message: ${req.body.questions}
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.send({ isSend: true });
});
module.exports = router;