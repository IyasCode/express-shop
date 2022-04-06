const path = require('path');
const fs = require('fs');

const dataPath = path.join(
  __dirname,
  '..',
  'datas',
  'products.json'
  )

fs.readFile(dataPath, (err, data) => {
  console.log("r1", JSON.parse(data))
})
  
const data = JSON.parse(fs.readFileSync(dataPath))

console.log("r2", data)
  

