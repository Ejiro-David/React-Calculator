import {useReducer} from "react"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"


export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}){
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return{

        ...state,
        currentOperand: `${currentOperand || ""}${payload.digit}`
      }
  }
}


function App() {

  const[{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

  return (
    <div className="calc-grid justify-center grid max-w-lg p-4 ">
      <div className="output grid  min-h-24 max-h-fit bg-blue-500">
        <div className="previous-operand text-right max-w-xs break-words max-h-fit bg-yellow-200">{previousOperand} {operation}</div>
        <div className="current-operand  text-right max-w-xs break-words max-h-fit bg-yellow-400">{currentOperand}</div>
      </div>

      <div className="btns min-h-fit grid grid-cols-4">
        <DigitButton digit='AC' dispatch={dispatch} className="h-full p-2 col-span-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='DEL' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <OperationButton operation='/' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='1' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='2' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='3' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <OperationButton operation='*' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='4' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='5' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='6' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <OperationButton operation='+' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='7' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='8' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='9' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <OperationButton operation='-' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='.' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200"/>
        <DigitButton digit='0' dispatch={dispatch} className="h-full p-2 border-2 bg-blue-200 hover:bg-blue-50"/>
        <DigitButton digit='=' dispatch={dispatch} className="h-full p-2 border-2 col-span-2 bg-blue-200 hover:bg-blue-50"/>
      </div>
    </div>
  )
}

export default App;


