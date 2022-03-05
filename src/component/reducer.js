import { v4 as uuid } from "uuid";
const initial = [
    { name: "adwoa", contact: "0055523688", location: "tema", id: uuid() },
    {
        name: "joseph",
        contact: "4785222139",
        location: "legon",
        id: uuid(),
    },
    {
        name: "kokor",
        contact: "0179258745",
        location: "accra",
        id: uuid(),
    },
    {
        name: "prince",
        contact: "5411258745",
        location: "kumasi",
        id: uuid(),
    },
    {
        name: "tony",
        contact: "8911258745",
        location: "mamobi",
        id: uuid(),
    },
];
export const reducer = (state = initial, action) => {
    switch (action.type) {
        case "EDIT_USER":
            return state.map((state) => {
                if (state.id == action.payload.id) return action.payload.edited;
                return state;
            });
        case "ADD":
            return [...state, action.data];
        case "REMOVE_USER":
            return state.filter((user) => user.id !== action.data);
        default:
            return state;
    }
};
