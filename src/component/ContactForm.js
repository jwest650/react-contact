import React, { useState } from "react";

const ContactForm = ({ details, display }) => {
    const [name, setname] = useState("");
    const [contact, setcontact] = useState("");
    const [location, setloacation] = useState("");

    function setInfo(e) {
        e.preventDefault();
        let user = {
            name: name,
            contact: contact,
            location: location,
        };
        details((prev) => [...prev, user]);
        setname("");
        setcontact("");
        display(true);
        setloacation("");
    }
    return (
        <div className="w-[30%] bg-[#e6e6e6] mx-auto p-10 shadow-lg shadow-[#141414]  rounded-lg  capitalize  space-y-5">
            <header className="w-fit uppercase text-lg text-[#97848c]">
                <h1>Contacts</h1>
                <hr className="border border-[#97848c]" />
            </header>
            <form action="" onSubmit={setInfo} className="space-y-7">
                <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                        type="text"
                        id="name"
                        placeholder="Write your name here"
                        className="border bg-inherit w-full outline-none pl-2 border-b-[#97848c]"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="contact">Contact</label>
                    <br />
                    <input
                        type="text"
                        id="contact"
                        placeholder="Write your name here"
                        className="border bg-inherit w-full outline-none pl-2 border-b-[#97848c]"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <br />
                    <input
                        type="text"
                        id="location"
                        placeholder="Write your name here"
                        className="border bg-inherit outline-none border-b-[#97848c] pl-2 w-full"
                        value={location}
                        onChange={(e) => setloacation(e.target.value)}
                    />
                </div>
                <div className="w-30% text-right p-3 pr-0">
                    <button
                        type="submit"
                        className="border border-[#97848c] px-5 py-2 "
                    >
                        Add Contact
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;