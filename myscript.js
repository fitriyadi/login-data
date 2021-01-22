
console.log('makan');

var message = 'My string - Could also be an JS array/object';
var iv = 'a1a2a3a4a5a6a7a8b1b2b3b4b5b6b7b8';
var key = 'c1c2c3c4c5c6c7c8d1d2d3d4d5d6d7d8c1c2c3c4c5c6c7c8d1d2d3d4d5d6d7d8'; // 256-bit hex encoded

var keyBytes = CryptoJS.enc.Hex.parse(key);
var ivBytes = CryptoJS.enc.Hex.parse(iv);

var encrypt = CryptoJS.AES.encrypt(message, keyBytes, {
    iv: ivBytes, 
    padding: CryptoJS.pad.ZeroPadding 
}).ciphertext.toString(CryptoJS.enc.Base64);


console.log(encrypt);
