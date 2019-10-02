import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

const composeEnhancers = composeWithDevTools({});

export default createStore(Reducers, composeEnhancers(applyMiddleware(ReduxThunk)));
