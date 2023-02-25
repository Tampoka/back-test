const express = require('express')
const app = express()
const port = 3010

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    let helloMessage = 'hello baka';
    res.send(helloMessage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})