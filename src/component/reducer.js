const initial = [];
export const reducer = (state = initial, action) => {
    switch (action.type) {
        case "fetch":
            return [...action.payload];

        default:
            return state;
    }
};
