const fs = require('fs');

const goalFile = './goals.json';

try {
    if (fs.existsSync(goalFile)) {
    }
} catch (error) {
  console.error(error);
}

try {
    const data = fs.readFileSync('/goals.json', 'utf8');
    console.log(data);
} catch (error) {
    console.error(error);
}


function add () {
	document.frm.count.value = parseInt(document.frm.count.value) + 1;
	addTextBox();
}

function delete () {
	document.frm.count.value = parseInt(document.frm.count.value) - 1;
	removeTextBox();
}

function addTextBox () {
	var form = document.frm;
	form.appendChild(document.createElement('div')).innerHTML = "<table width=\\"40&#37;\\">"
		+ "<tr><td>Name</td><td><input type=\\"text\\" name=\\"txt\\"></td></tr>"
		+ "</table>";
}

function removeTextBox () {
	var form = document.frm;
	if (form.lastChild.nodeName.toLowerCase() == 'div')
		form.removeChild(form.lastChild);
}