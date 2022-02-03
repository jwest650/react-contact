import { useState } from "react";
import Contact from "./component/Contact";
import ContactForm from "./component/ContactForm";
import { v4 as uuid } from "uuid";
function App() {
    const [details, setdetails] = useState([
        { name: "adwoa", contact: "0055523688", location: "tema", id: uuid() },
        {
            name: "joseph",
            contact: "4785222139",
            location: "legon",
            id: uuid(),
        },
        {
            name: "trusty",
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
    ]);
    function Edit(id, edited) {
        const updates = details.map((detail) => {
            return detail.id === id ? edited : detail;
        });
        setdetails(updates);
    }
    function Delete(id) {
        const filtered = details.filter((filter) => id !== filter.id);
        setdetails(filtered);
    }

    return (
        <div className=" p-5 h-full flex items-start">
            <ContactForm updated={setdetails} />
            <Contact details={details} Delete={Delete} edits={Edit} />
        </div>
    );
}

export default App;
