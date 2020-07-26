const axios = require("axios").default;

(async function () {
	for (let i = 0; i < 5000; i++) {
		try {
			const response = await axios.get(process.env.URL);
			console.log(i);
		} catch (error) {
			console.log(error);
			debugger;
		}
	}
})();
