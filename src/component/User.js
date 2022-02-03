import React, { useState } from "react";
import Modal from "./Modal";

const User = ({ user, Delete, edits }) => {
    const [show, setshow] = useState(false);
    function edit() {
        setshow(true);
    }

    return (
        <>
            <div className="w-[20%]  ">
                <div className="bg-white  rounded-[5px] m-2 p-2 capitalize shadow-lg shadow-indigo-300 transition ease-in-out delay-150   hover:scale-110   duration-300">
                    <div className="space-y-2 text-green-500">
                        <h1>
                            <span className="font-bold">Name:</span> {user.name}
                        </h1>
                        <h1>
                            {" "}
                            <span className="font-bold">Contacts:</span>{" "}
                            {user.contact}
                        </h1>
                        <h1>
                            {" "}
                            <span className="font-bold">Location:</span>{" "}
                            {user.location}
                        </h1>
                    </div>
                    <div className="my-2">
                        <button className="text-blue-600 mr-2" onClick={edit}>
                            Edit
                        </button>{" "}
                        <button
                            className="text-red-600"
                            onClick={() => Delete(user.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            {show && <Modal user={user} edits={edits} setshow={setshow} />}
        </>
    );
};

export default User;
