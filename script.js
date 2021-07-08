// api url
const api_url =
	"https://jsonplaceholder.typicode.com/todos";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>userId</th>
		<th>id</th>
		<th>title</th>
		<th>completed</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
		tab += `<tr>
	<td>${r.userId} </td>
	<td>${r.id}</td>
	<td>${r.title}</td>
	<td>${r.completed}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("detial").innerHTML = tab;
}
