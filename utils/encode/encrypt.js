import CryptoJS from 'crypto-js'
let keyStr = 'a6XfySmB' //加密秘钥
let ivStr = ''
export default {
	encrypt: function(word) {
		let key = CryptoJS.enc.Utf8.parse(keyStr);
		let iv = CryptoJS.enc.Utf8.parse(ivStr);
		let srcs = CryptoJS.enc.Utf8.parse(word);
		let encrypted = CryptoJS.AES.encrypt(srcs, key, {
			iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		return encrypted.toString();
	},
	// 解密
	decrypt: function(word) {
		const decipher = CryptoJS.createDecipher('aes192', keyStr)
		let decrypted = decipher.update(word, 'hex', 'utf8')
		decrypted += decipher.final('utf8')
		return decrypted
		
		// const cipher = CryptoJS.createCipher('aes192', keyStr)
		// let crypted = cipher.update(word, 'utf8', 'hex')
		// crypted += cipher.final('hex')
		// var key = CryptoJS.enc.Utf8.parse(keyStr);
		// let iv = CryptoJS.enc.Utf8.parse(ivStr);
		// var decrypt = CryptoJS.AES.decrypt(word, key, {
		// 	iv,
		// 	mode: CryptoJS.mode.CBC,
		// 	padding: CryptoJS.pkcs7
		// });
		// return decrypt.toString(CryptoJS.enc.Utf8);
	}
}

//curl -H "Content-Type: application/json" -X POST -d '{"""acc": "", "pwd":"8859262"}' "http://103.147.225.170:4001/user_login"