import { v4 as uuidv4 } from 'uuid'

export const getUUID = ()=>{
    let uuidCode = localStorage.getItem('uuid')
    if(!uuidCode){
        uuidCode = uuidv4()
        localStorage.setItem('uuid',uuidCode)
    }
}