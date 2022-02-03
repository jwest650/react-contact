import React, { useState } from "react";
import User from "./User";

const Contact = ({ details, Delete, edits }) => {
    return (
        <div className="w-full flex flex-wrap">
            {details.map((a, index) => {
                return (
                    <User user={a} key={index} Delete={Delete} edits={edits} />
                );
            })}
        </div>
    );
};

export default Contact;
