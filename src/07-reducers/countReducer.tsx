export function counterInit(initialCount: number) {
  return { count: initialCount };
}

export interface ActionInterface {
  type: string;
  payload?: number;
}

export function counterReducer(state: any, action: ActionInterface) {
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
