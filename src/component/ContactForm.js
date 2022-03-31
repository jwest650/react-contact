import React, { useEffect, useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
const ContactForm = () => {
    const [name, setname] = useState("");
    const [contact, setcontact] = useState("");
    const [location, setlocation] = useState("");

    async function newDetail(e) {
        e.preventDefault();
        const newUser = {
            name,
            contact,
            location,
            created: Timestamp.now(),
        };
        let refs = collection(db, "contact");
        await addDoc(refs, {
            ...newUser,
        });
        setcontact("");
        setname("");
        setlocation("");
    }

    return (
        <div className="w-[30%] bg-[#e6e6e6]  p-10 shadow-lg shadow-[#141414]  rounded-lg  capitalize  space-y-5 mr-8">
            <header className="w-fit uppercase text-lg text-[#97848c]">
                <h1>Contacts</h1>
                <hr className="border border-[#97848c]" />
            </header>
            <form action="" onSubmit={newDetail} className="space-y-7">
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
                        placeholder="Write your Contact here"
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
                        placeholder="Write Location here"
                        className="border bg-inherit outline-none border-b-[#97848c] pl-2 w-full"
                        value={location}
                        onChange={(e) => setlocation(e.target.value)}
                    />
                </div>
                <div className="w-30% text-right p-3 pr-0">
                    <button
                        type="submit"
                        className="border border-[#97848c] px-5 py-2 "
                        onClick={newDetail}
                    >
                        Add Contact
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
