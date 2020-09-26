const axios = require("axios").default;
const https = require("https");

function wait(timeout = 1000) {
	return new Promise((r, j) => {
		setTimeout(r, timeout);
	});
}

// At request level
const agent = new https.Agent({
	rejectUnauthorized: false,
});

(async function () {
	console.clear();
	for (let i = 0; i < 10000; i++) {
		try {
			const response = await Promise.all(["a", "b", "c", "d", "e", "f"].map((el) => axios.get(`https://www.chewy.com/`, { httpsAgent: agent })));
			console.log((i + 1) * 6);
		} catch (error) {
			debugger;
		}
	}
})();
