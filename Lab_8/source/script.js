const TOKEN = prompt("Input the key please");

const to_id = (id, mode, message) =>
{
	if(mode == "add")
		document.getElementById(id).innerHTML +=  message 
	else if (mode == "replace")
		document.getElementById(id).innerHTML =  message 
}
lastUpdate = Date.now()
const stocks = 
[
	"TTWO",
	"ATVI",
	"TSLA",
	"EA",
	"GOOG",
	"MSFT",
	"HKG",
	"UBI",
]
const themes = 
[
	"symbol",
	"companyName",
	"latestPrice",
	"change"
]
const dyn_themes = 
[
	"latestPrice",
	"change"
]
const url = `https://cloud.iexapis.com/v1/stock/market/batch?symbols=${
	stocks.join(",")}&types=quote&filter=${
		themes.join(",")}&token=${TOKEN}`
const dyn_url = `https://cloud.iexapis.com/v1/stock/market/batch?symbols=${
	stocks.join(",")}&types=quote&filter=${
		dyn_themes.join(",")}&token=${TOKEN}`
k = []
async function get_done(url){
const fetchData = (url) => {
    return fetch(url)
            .then(response =>
				response.json().then(r => r
				));
}
await fetchData( url ).then( el => { k.push(el) } );

return k}

async function use_done(url){
	const m = await get_done(url)
	const a = await Object.values(m[0]).map( el => Object.values(el)[0] )
	.filter( el => el != null)
	.map( el => Object.values(el) )

	to_id("replace", "replace", `<table class="table table-bordered table-hover" style="width:75vw;margin-left: 12.5vw; )">
		<thead class="thead-dark">
		<tr>${ themes.map( el => `<th>${ el[0].toUpperCase() + el.slice(1) }</th>` ).join("") }	</tr>
		 </thead>
	<tbody>${
		a.map( el => `<tr>${
			el.map( e => `<td>${e}</td>` ).join('')
		}</tr>`).join('')
	}</tbody>
	</table>
	`)
}

async function update_table(url, id)
{
	const m = await get_done(url)
	a = await Object.values(m[0]).map( el => Object.values(el)[0] )
	.filter( el => el != null)
	.map( el => Object.values(el) )
	a = Object.values(a)
	const rows = document.getElementById(id).rows;
	let x = 0;
	for (i in a)
	{
		let z = 0;
		for (j in a[i].quote)
		{
			rows[x].cells[z].textContent = a[i].quote[j] + " $";
			z++;
		}
		x++;
	}
}
rxjs.interval(100)
.subscribe(() => to_id("update", "replace",`<p class="h2 text-justify font-weight-light">${((Date.now() - lastUpdate) / 1000).toFixed(1)}</p>`));

use_done(url)


rxjs.interval(20000)
.subscribe(() =>{
	update_table(dyn_url, "replace");
	lastUpdate = Date.now();
})