import {ACTIONS} from "./App"

export default function OperationButton({dispatch, digit}) {
    return (
        <button onClick= {() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
            {operation}
        </button>
    )
}