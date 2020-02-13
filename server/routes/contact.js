const express = require('express');
const router = express.Router();

var nodemailer = require('nodemailer');

router.post('/', async (req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    var mailOptions = {
        from: '',
        to: '',
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