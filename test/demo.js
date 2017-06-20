function getRandomStr(a, b) {
　　var len = getRandomNum(a, b);
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
　　var str = '';
　　for (i = 0; i < len; i++) {
		str += $chars.charAt(Math.floor(Math.random() * $chars.length));
　　}
　　return str;
}

function getRandomNum(min, max) {
	var range = max - min;
	return (min + Math.round(Math.random() * range));
}

function runCode(btn) {
	var code = $(btn).parent().find('span.code').text();
	eval(code);
}