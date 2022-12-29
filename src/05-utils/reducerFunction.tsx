interface ActionInterface {
  type: string;
  payload?: any;
}

const reducerFunction = (
  state: any,
  action: ActionInterface,
  cases: any
): any => {
  const caseFn = cases[action.type];
  return caseFn ? caseFn(state, action) : state;
};

export default reducerFunction;
