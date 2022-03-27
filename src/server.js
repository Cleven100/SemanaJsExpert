import { createServer } from 'http';
import { once } from 'events';
import { randomUUID } from 'crypto';



const dataBase = new Map();

function respondJSON(data, response){
    return response.end(JSON.stringify(data))
}

async function handler(request, response){
    const { method } = request;


if(method === 'GET'){

    return respondJSON([...dataBase.values()], response);
}

if(method === 'POST'){
   const body = JSON.parse(await once(request, 'data'))
   const id = randomUUID();
   dataBase.set(id, body)
   
   console.log('recebido', body);
    return respondJSON({ ok: 1}, response);
}



if(method === 'DELETE'){

    return respondJSON({ ok: 1}, response);
}
}


export default createServer(handler)