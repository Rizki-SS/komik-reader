import Dexie from 'dexie'
import { useLiveQuery } from "dexie-react-hooks";

const DB_NAME = "BacaKomik"

const localDB = new Dexie(DB_NAME);
localDB.version(1).stores(
    { items: "++id,endoin,value" }
)

const add = async ({ endpoin, value }) => {
    await localDB.items.add({
        endoin: endpoin,
        value: value
    })
}

const remove = async ({ endoin }) => {
    await localDB.items.delete(endoin)
}

const getAll = () => {
    // return localDB.table(DB_NAME).toArray()
}

const getByEndpoin = ({ key }) => {
    // return localDB.table(BD_NAME).get({ endpoin: key })
}

export default localDB
export { add, remove, getAll, getByEndpoin }