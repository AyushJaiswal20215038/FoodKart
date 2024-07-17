import React, { createContext, useContext, useReducer } from 'react'


const ItemStateContext = createContext();
const ItemDispatchContext = createContext();


const reducer = (state, action) => {
    // let fetch;
    let newArr;
    switch (action.type) {
        case "ADD":
            let Arr = [...state[0]];
            const IsPresent = Arr.findIndex((element) => element.name === action.Item.name);
            if (IsPresent === -1) {
                newArr = [...state[0], action.Item];
                return [[...newArr], [...state[1]]];
            }
            else if(IsPresent !== -1 && IsPresent < state[0].length ){
                newArr=[...state[0].slice(0,IsPresent),action.Item,...state[0].slice(IsPresent+1)];
                return [[...newArr],[...state[1]]];
            }
            return [...state];

        // console.log("Problem in fetching from database");
        // return [...state];
        case "DELETE":
            newArr = [...state[0]];
            // console.log(`newArr`, newArr);
            // console.log('ActionItemName', action);
            newArr = newArr.filter((item) => {
                return item.name !== action.ItemName;
            })
            // console.log('FilterArr', newArr);
            // console.log("Problem in fetching from database");
            newArr = [[...newArr], [...state[1]]];
            // console.log("#newArr", newArr);
            return newArr;
        case "FETCH":
            // fetch=await fetchItemRes(action);
            // console.log('fetch:',fetch);
            if (action.Item.length !== 0) {
                return [...action.Item];
            }
            return [...state];
        default:
            console.log("ERROR occured in fetching or reducer");
            return [...state];
    }
}



export const ItemProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <ItemDispatchContext.Provider value={dispatch}>
            <ItemStateContext.Provider value={state}>
                {props.children}
            </ItemStateContext.Provider>
        </ItemDispatchContext.Provider>
    );
}

export const useItem = () => useContext(ItemStateContext);
export const useDispatchItem = () => useContext(ItemDispatchContext);

