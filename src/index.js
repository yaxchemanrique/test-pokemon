const app = require('./app')

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Api trainers running on ${PORT}... src...`);
});

module.exports = app;