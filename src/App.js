import { useState } from "react";
import Contact from "./component/Contact";
import ContactForm from "./component/ContactForm";
import { useSelector, useDispatch } from "react-redux";
function App() {
    const details = useSelector((state) => state);
    const dispatch = useDispatch();
    function Edit(id, edited) {
        dispatch({ type: "EDIT_USER", payload: { id, edited } });
    }
    function Delete(id) {
        dispatch({ type: "REMOVE_USER", data: id });
    }

    function ADD(data) {
        dispatch({ type: "ADD", data: data });
    }

    return (
        <div className=" p-5 h-full flex items-start">
            <ContactForm updated={ADD} />
            <Contact details={details} Delete={Delete} edits={Edit} />
        </div>
    );
}

export default App;
