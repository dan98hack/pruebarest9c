const  CONFIG = require('./app/config/configuracion.js')
const app = require('./app/app.js')

app.listen(CONFIG.PORT, () =>{
    console.log(`Aplicacion corriendo en puerto ${CONFIG.PORT}`);
})