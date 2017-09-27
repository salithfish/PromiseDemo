function timeout(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

timeout(100).then(() => {
	console.log('done');
});
//************************************************* 
var sleep = function (time) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve();
		}, time);
	})
};

var start = async function () {

	console.log('start');
	await sleep(3000);
	console.log('end');
};

start();