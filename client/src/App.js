import React, { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                const result = await fetch(`${process.env.REACT_APP_API_URL}/messages`);
                if (!result.ok) {
                    throw new Error('Flagrant API Error');
                }
                const messages = await result.json();
                setMessages(messages)

            } catch (error) {
                setError(true);

            } finally {
                setLoading(false);
            }
        }
        fetchData();

    }, [])
    return (
        <Fragment>
            {loading && <div>Accesing Database via Hypertext Transfer Protocol...</div>}
            {error && <div>Brutal Error</div>}
            {messages.map(message => (<div>message: {message.message}</div>))}
        </Fragment>
    );
}

export default App;
