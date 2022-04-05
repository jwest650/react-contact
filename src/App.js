import Contact from "./component/Contact";
import ContactForm from "./component/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Protectedroute from "./component/Protectedroute";
import Dashboard from "./component/Dashboard";
import Authenticate from "./component/authenticate";
function App() {
    const details = useSelector((state) => state.user);
    console.log(details);
    let dispatch = useDispatch();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: "login", payload: user });
            } else {
                console.log("user signed outs");
            }
        });
    }, []);
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
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Protectedroute>
                                <Dashboard />
                                <div className=" p-5 h-full flex items-start">
                                    <ContactForm />
                                    <Contact details={details} />
                                </div>
                            </Protectedroute>
                        }
                    />
                    <Route path="/login" element={<Authenticate />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
