/**
 * 【example: insurance company】
 *
 * Customer -> (form) -> Form Receiver -> (form) -> Claims History Department -> All Department Data
 *                                     -> (form) -> Policies Department       -> All Department Data
 *                                     -> (form) -> Accounting Department     -> All Department Data
 *
 * ・Insurance Company Cycle(Redux Cycle)
 * 1. Person dropping off the form (Action Creator)
 * 2. the form (Action)
 * 3. form receiver (dispatch)
 * 4. Departments (Reducers)
 * 5. Compiled department Data (State)
 *
 * */

// Person dropping off the form (Action Creator)
const createPolicy = (name, amount) => {
    return {    // action (a from in our analogy)
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
};

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    }
};

// Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        // we care about this action
        return [...oldListOfClaims, action.payload];
    }

    // we don't care about this action
    return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    }

    if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    }
    if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }

    return listOfPolicies;
};


// combineReducers
// createStore
const {createStore, combineReducers} = Redux;
const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
});
const store = createStore(ourDepartments);

// Dispatch
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Bob', 30));
store.dispatch(createPolicy('Cathy', 50));
store.dispatch(createClaim('Bob', 10));
store.dispatch(deletePolicy('Cathy'));

console.log(store.getState());