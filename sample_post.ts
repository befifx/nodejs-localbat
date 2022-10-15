import * as http from 'http';

const data = JSON.stringify({
  path: 'aiueo',
});
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
const url = 'http://localhost:3000/execbat';
const request = http.request(url, options, (response) => {
  console.log(`statusCode: ${response.statusCode}`);
});
request.write(data);
request.end();
