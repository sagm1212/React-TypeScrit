import newForm from '../hooks/newForm'
import { Sub } from '../types'

interface FormProps{
  onNewSub: (newSub: Sub) => void
}

const Form = ({onNewSub} : FormProps) => {

  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

  const [inputValues, dispatch] = newForm()
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement> ) => {
    event?.preventDefault()
    onNewSub(inputValues)

    handlerClear()
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }
const handlerClear = () => { //funcion para eliminar lo del formulario
  dispatch({type: "clear"})
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick'/>
        <input onChange={handleChange} value={inputValues.subMonths} type='number' name='subMonths' placeholder='subMonths'/>
        <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'/>
        <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'/>
        <button type='submit'>Save New Sub!!</button>
        <button onClick={handlerClear} type='button'> Clear The Form</button>
      </form>
    </div>
  )
}

export default Form