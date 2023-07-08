const app = require('./src/app');


app.listen(app.get('port'), () => {
    try {
        console.log(`app listening on http://localhost:${app.get('port')}!`);
    } catch (error) {
        console.error(error);
    }
})