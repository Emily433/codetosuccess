import {
    signUp
} from './auth';

export {
    signUp
};
import auth from './authReducer';
const rootReducer = combineReducers({
    form,
    auth
});