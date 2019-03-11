const express = require('express');

const app = express();

app.get('/client/src/Components/About.js', (req, res) => {
	const tailors = [
		{id: 1, fistName: "Effiong", lastName: "Daniel"},
		{id: 2, firstName: "Abdul", lastName: "Mohammed"},
		{id: 3, firstName: "Ekiti", lastName: "Kevin"}

	];
	res.json(tailors);
});

const port = 5000;
app.listen(port, ()=>{
	console.log(`Server is running at port ${port}`);
})