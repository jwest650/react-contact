import { useState } from "react";
import Contact from "./component/Contact";
import ContactForm from "./component/ContactForm";

function App() {
    let [displaycontact, setdisplaycontact] = useState(false);
    const [details, setdetails] = useState([]);
    console.log(displaycontact);
    console.log(details);
    return (
        <div className="bg-[#59abe3] p-5 h-screen  ">
            <ContactForm details={setdetails} display={setdisplaycontact} />
            {displaycontact ? <Contact contacts={details} /> : null}
        </div>
    );
}

export default App;
