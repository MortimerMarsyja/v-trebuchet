interface ActionInterface {
  type: string;
  payload?: any;
}

interface CasesInterface {
  [key: string]: (state: any, action: ActionInterface) => any;
}

const reducerFunction = (
  state: any,
  action: ActionInterface,
  cases: CasesInterface
): any => {
  const caseFn = cases[action.type];
  return caseFn ? caseFn(state, action) : state;
};

export default reducerFunction;
