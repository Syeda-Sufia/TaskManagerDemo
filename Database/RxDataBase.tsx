import { addRxPlugin, createRxDatabase } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';

import {TaskSchema} from './Schema';
import { timestamp } from 'rxjs';

export const STORAGE=getRxStorageMemory();

addRxPlugin(RxDBDevModePlugin);

let myDataBase:any;

const initializeDB=async()=> {
try {
 const myDataBase=await createRxDatabase({
    name: 'mydatabase',
    ignoreDuplicate: true,
    storage: STORAGE,
 });
}
catch (err){
    console.log('ERROR CREATING DATABASE', err);
}

try{
    await myDataBase.addCollections({
        tasks:{
            schema: TaskSchema,
        }
    });

}
catch(err){
    console.log("ERROR CREATING DATABASE",err);
}
const myDocument= await myDataBase.tasks.insert({
    id: 'Task1',
    name: 'Learn RxDB',
    done: false,
    timestamp: new Date().toISOString()
});

return myDataBase;

}
export default initializeDB;

