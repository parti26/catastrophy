import {toExport as preData} from '/data.js';
import {postError, pImp} from '/public/jet.js';



// TODO: use dynamic import for better debugger responses
const loadModule = async () => {

    try {
        return await import(modulePath)
    } catch (e) {
        // send a POST message to the server in case of
        console.dir(e);
    }
}

const addAndStore = (parent, element, where, selector) => {
    parent.insertAdjacentHTML(where, element);
    return parent.querySelector(selector);
}


const loadEvent = async _ => {

    const ROOT = document.getElementById("root");

    const data = pImp(preData);
    const renderCats = data.catNames.map(function (cat) {
        return cat;
    }).join('<br>');

    try {
        const MAIN = addAndStore(ROOT, `
      <main class="main">
      <h1>These cats have similar names: </h1>
      <h2>${renderCats}</h2>
      <img src="https://i.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.webp" alt="this slowpoke moves"  width="250" height="250" />
     </main>
    `, "beforeend", "main");

    } catch (error) {
        console.log(error.message);
        postError(`\n\nSomething is not good with your variables, please try to fix it then refresh the page in the browser.\n\n`)
    }
}

window.addEventListener("load", loadEvent);
