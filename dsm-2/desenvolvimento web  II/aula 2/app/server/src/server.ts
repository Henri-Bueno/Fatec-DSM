import {app} from "./app";

function main(){
    const port = 3000;
    app.listen(port, () => {console.log(`Rodando em http://localhost:${port}`);});
}

main();