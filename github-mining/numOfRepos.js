const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: "c0364bbf1afdd771b0ae1486e78cd1036d7c7402" });

// 
(async () => {
	let results = await octokit.request('GET /users/{username}/repos',
	{
  		username: 'roadhog666',
	});
	results = results["data"];
	console.log(results.length);
})();