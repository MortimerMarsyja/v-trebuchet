import { useReducer } from "react";

function counterInit(initialCount: number) {
  return { count: initialCount };
}

interface ActionInterface {
  type: string;
  payload?: number;
}

function reducer(state: any, action: ActionInterface) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return counterInit(action.payload!!);
    default:
      return state;
  }
}

const Counter = ({ initialCount }: { initialCount: number }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, counterInit);
  return (
    <div className="flex bg-blue items-center flex-wrap flex-col w-[220px] justify-items-start">
      <div className="h-[36px] flex items-center">Count: {state.count}</div>
      <div className="flex flex-wrap">
        <button
          className="m-3 h-3 flex items-center"
          onClick={() => dispatch({ type: "reset", payload: initialCount })}
        >
          Reset
        </button>
        <button
          className="m-3 h-3 flex items-center justify-start"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </button>
        <button
          className="m-3 h-3 flex items-center justify-items-start"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
