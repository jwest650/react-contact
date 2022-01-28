import React from "react";

const Contact = ({ contacts }) => {
    return (
        <div className="space-y-4 bg-white p-5 w-[20%] max-h-[67%] rounded-lg overflow-auto top-6 absolute ">
            <h2 className="text-lg"> Contacts</h2>
            {contacts.map((a) => (
                <div key={a.name} className="flex items-center space-x-4 ">
                    <div className="text-center h-[50px] w-[50px] p-2 border rounded-full">
                        <h1 className="capitalize text-red-500">
                            {a.name.slice(0, 1)}
                        </h1>
                    </div>
                    <div>
                        <h1 className="capitalize">{a.name}</h1>
                        <h1>{a.contact}</h1>
                        <h1>{a.location}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contact;
