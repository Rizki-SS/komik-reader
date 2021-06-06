import Dexie from 'dexie'
import { useLiveQuery } from "dexie-react-hooks";

const DB_NAME = "BacaKomik"

const localDB = new Dexie(DB_NAME);
localDB.version(1).stores(
    { items: "++id,endpoin,value" }
)

const add = async ({ endpoin, value }) => {
    await localDB.items.add({
        endpoin: endpoin,
        value: value
    })
}

const getAll = async () => {
    return await localDB.items.toArray()
}

const getByEndpoin = async ({ key }) => {
    return await localDB.items.get({ endpoin: key })
}

const deleteById = async ({ key }) => {
    return await localDB.items.delete(key)
}


export default localDB
export { add, getAll, getByEndpoin, deleteById }