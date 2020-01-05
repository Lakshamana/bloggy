const bash = require('child_process')
const path = require('path')
const config = require('../envConfig')

const args = process.argv.slice(2)
const arg = args[0]

if (arg.match(/path=.*/)) {
  let filePath = arg.split('=')[1]
  const dbName = config.db.url.split('/')[3]
  if (filePath.startsWith('./')) filePath = filePath.substring(2)
  const fileName = filePath.split('.')[0] // collectionName should be fileName
  const totalPath = path.resolve(__dirname, fileName) + '.json'
  try {
    console.log(
      'Executing:',
      `mongoimport -d ${dbName} -c ${fileName} -f ${totalPath} --jsonArray`
    )
    bash.execSync(
      `mongoimport -d ${dbName} -c ${fileName} --file ${totalPath} --jsonArray`
    )
  } catch (err) {
    console.error('Error:', err)
  }
} else {
  console.error('Gimme a json file path entry!')
}
