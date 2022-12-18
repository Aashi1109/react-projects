import { useSelector, useDispatch } from "react-redux";

const useSelDis = (key, value) => {
  const tempState = useSelector((state) => state[key]);

  let reqState = null;
  const dispatch = useDispatch();

  if (!value) return [tempState, dispatch];
  if (value.constructor === Array) {
    const reqStates = {};
    for (const val of value) {
      reqStates[val] = tempState[val];
    }
    // console.log(reqStates)
    reqState = reqStates;
  } else {
    reqState = tempState[value];
  }

  return [reqState, dispatch];
};

export default useSelDis;
