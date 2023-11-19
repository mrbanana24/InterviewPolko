import {addFernet, addCafe, addArroz, addPan, addGaseosa} from '../../assets/api'

// Add fernet
export const handleClickFernet = async() => {
    try{
      const response = await addFernet()
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
}

// Add cafe
export const handleClickCafe = async() => {
    try{
      const response = await addCafe()
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
}

// Add arroz
export const handleClickArroz = async() => {
    try{
      const response = await addArroz()
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
}

// Add pan
export const handleClickPan = async() => {
    try{
      const response = await addPan()
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
}

// Add gaseosa
export const handleClickGaseosa = async() => {
    try{
      const response = await addGaseosa()
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
}