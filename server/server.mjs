import express from 'express'
import { readdir, stat } from 'node:fs/promises';

const app = express()
const port = 3001

const readDirRecursive = async (dir, mask) => {
  const paths = []
  const files = await readdir(dir);
  for (const file of files) {
    const path = dir + '/' + file
    const fileStat = await stat(path)
    if (fileStat.isDirectory()) {
      paths.push(... await readDirRecursive(path, mask))
    } else if (fileStat.isFile() && mask(file)) {
      paths.push(path)
    }
  }
  return paths
}

app.use('/', express.static('pages'))

app.get('/', async (req, res) => {
  const rootDir = 'pages'
  const files = await readDirRecursive(rootDir, file => /.+\.mdx/.test(file));
  const paths = files.map(file => file.substring(rootDir.length + 1, file.length - 4))
  res.send(JSON.stringify(paths))
})

app.listen(port, () => {
  console.log(`Content server listening on port ${port}`)
})