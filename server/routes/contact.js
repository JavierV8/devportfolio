const express = require('express');
const router = express.Router();
const config = require('config');

var nodemailer = require('nodemailer');

router.post('/', async (req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.get('email'),
            pass: config.get('emailPass'),
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    var mailOptions = {
        from: config.get('email'),
        to: config.get('email'),
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