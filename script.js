const fs = require('fs');

const goalFile = './goals.json';

function loadSettings () {
  try {
    if (fs.existsSync(goalFile)) {
      const data = fs.readFileSync(goalFile, 'utf8');
      const goals = JSON.parse(data);
      document.getElementById('enterGoal').value = goals.goal;
      document.getElementById('enterMotivation').value = goals.motivations;
      document.getElementById('g1').value = goals.monthlyGoals[0];
      document.getElementById('g2').value = goals.monthlyGoals[1];
      document.getElementById('g3').value = goals.monthlyGoals[2];
    }
  } catch (error) {
    console.error(error);
  }
}
loadSettings();

/*
function add () {
  document.frm.count.value = parseInt(document.frm.count.value) + 1;
  addTextBox();
}

function subtract () {
  document.frm.count.value = parseInt(document.frm.count.value) - 1;
  removeTextBox();
}

function addTextBox () {
  var form = document.frm;
  form.appendChild(document.createElement('div')).innerHTML = "<table>"
    + "<tr><td>Name</td><td><input type=\"text\" name=\"txt\"></td></tr>"
    + "</table>";
}

function removeTextBox () {
  var form = document.frm;
  if (form.lastChild.nodeName.toLowerCase() == 'div')
    form.removeChild(form.lastChild);
}
*/
