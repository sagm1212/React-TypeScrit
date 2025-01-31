import { useReducer } from "react"
import { Sub } from "../types"

interface FormState{
  inputValues: Sub
}

type FormReducerAction = {
  type: "change_value",
  payload: {
    inputName: string,
    inputValue: string
  } 
} | {
  type: "clear",
}

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: '',
  }

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => { // el reducer recibe dos parametros, el estado y la accion
  switch(action.type){
    case "change_value": 
    const {inputName, inputValue} = action.payload
    return{
      ...state,
      [inputName]: inputValue 
    }
    case "clear":
      return INITIAL_STATE
      default: return state
  }
  }

  
  
  const newForm = () => {
   
    return  useReducer(formReducer, INITIAL_STATE)
  }
  export default newForm
  
  
