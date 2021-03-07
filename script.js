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
