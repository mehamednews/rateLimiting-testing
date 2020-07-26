const axios = require("axios").default;

function wait(timeout = 61000) {
	return Promise((r, j) => {
		setTimeout(r, timeout);
	});
}

(async function () {
	for (let i = 0; i < 5000; i++) {
		try {
			const response = await axios.get(process.env.URL);
			await wait();
			console.log(i);
		} catch (error) {
			console.log(error);
			debugger;
		}
	}
})();
