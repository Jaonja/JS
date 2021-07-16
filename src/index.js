import '.styles/style.css'
import '.script/script.js'
import '.script/calck.js'
import '.script/laberint.js'


const importAll = r => r.keys().map(r);
const images = importAll(require.context('./assets/', true, /.(?:png|jpeg|jpg|svg)$/i));