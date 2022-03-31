import Contact from "./component/Contact";
import ContactForm from "./component/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase/firebase";
function App() {
    const details = useSelector((state) => state);
    console.log(details);
    let dispatch = useDispatch();
    useEffect(() => {
        const q = query(collection(db, "contact"), orderBy("created", "desc"));
        onSnapshot(q, (snap) => {
            let data = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch({
                type: "fetch",
                payload: [...data],
            });
        });
    }, []);

    return (
        <div className=" p-5 h-full flex items-start">
            <ContactForm />
            <Contact details={details} />
        </div>
    );
}

export default App;
