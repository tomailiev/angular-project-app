const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('./dist/project-app'));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/project-app/' }
    );
});

app.listen(port, () => {
    console.log('listening on ' + port);
});