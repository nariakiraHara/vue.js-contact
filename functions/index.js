const functions = require('firebase-functions');
// const モジュール名(任意) = require('モジュールの場所')
const nodemailer = require('nodemailer');

// nodemailer: https://qiita.com/hshimo/items/ac599f5f25a3fa105ddd

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.onCreateContact = functions.database.ref('/contact/{contactId}').onCreate(event => {
  let message = {
      from: event.data.email,
      to: 'nariakra@gmail.com',
      subject: 'お問い合わせメール',
      text: event.data.message
  };

  mailTransport.sendMail(message)

// 関数のデプロイ方法
// firebase deploy --only functions

// 個別の関数のデプロイ
// firebase deploy --only functions:関数名
