const express = require('express');

const app = express();

app.get('/', (req,res) => {

    const blog = { id: 1, title: "Blog title", description: "Blog description" }

    res.send(blog);
})

port = 3001;

app.listen(port, () => {
    console.log(`Server opened successfully. Port: ${port}`);
});