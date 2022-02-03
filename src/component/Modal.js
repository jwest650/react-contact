import React, { useState } from "react";

const Modal = ({ user, edits, setshow }) => {
    const [name, setname] = useState(user.name);
    const [contact, setcontact] = useState(user.contact);
    const [location, setlocation] = useState(user.location);
    const edited = {
        name,
        location,
        contact,
        id: user.id,
    };

    function newEdits() {
        edits(edited.id, edited);
        setshow(false);
    }

    return (
        <>
            <div className="absolute w-[35%] left-0 right-0 m-auto  top-[20%] bg-white p-8 rounded-md z-50">
                <div>
                    <input
                        type="text"
                        className="border m-2 rounded-sm p-2"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="border m-2 rounded-sm p-2"
                        value={contact}
                        onChange={(e) => setcontact(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="border m-2 rounded-sm p-2"
                        value={location}
                        onChange={(e) => setlocation(e.target.value)}
                    />
                </div>
                <div className="text-right mt-4">
                    <button
                        className="p-2 px-5 mr-4 rounded-md text-red-500
                       "
                        onClick={() => setshow(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="p-2 px-5  rounded-md bg-green-500  uppercase text-white
"
                        onClick={newEdits}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default Modal;
