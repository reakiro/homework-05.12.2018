var nodemailer = require('nodemailer');

var myService = 'gmail';
var myEmail = 'email@gmail.com';
var myPassword = 'password';

var transporter = nodemailer.createTransport({
	service: myService,
	auth: {
		user: myEmail,
		pass: myPassword
	}
})

var receiverEmail = 'email@gmail.com';

var mailOptions = {
	from: myEmail,
	to: receiverEmail,
	subject: 'sending my first email with node.js',
	text: 'hi:-)'
}

transporter.sendMail(mailOptions, function(err, info){
	if (err) 
		console.log(err);
	else
		console.log('email sent' + info.response)
})

//письмо не получила зато получила след письмо от гугла 

// Важное оповещение системы безопасности
// Входящие
// x

// Google <no-reply@accounts.google.com>
// 14:50 (1 мин. назад)
// кому: я

// 	darn iln	

// Предотвращена попытка входа в аккаунт

//поэтому до конца не понятно работает или нет