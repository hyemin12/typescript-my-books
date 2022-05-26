import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

const create = () => {
  const store = createStore(rootReducer);
  return store;
};

export default create;
