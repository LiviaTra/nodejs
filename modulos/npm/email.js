var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'livia.trajano05@gmail.com',
    pass: 'iezjrhazsgmqjicp'
  }
});

var mailOptions = {
  from: 'livia.trajano05@gmail.com',
  to: 'arthursilvajorge347@gmail.com, fragagoulartraissa20@gmail.com, luisfiabani@gmail.com, mateuselias4048@gmail.com',  
  subject: 'Mandando E-mail usando o Node.js',
  html: '<h2>Eai, meu!</h2> <p>Tudo bom meus consagrateds?</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});