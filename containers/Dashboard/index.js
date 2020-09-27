import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Dashboard({ user }) {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    "/api/questions"
                );
                setQuestions(data);
            } catch (error) {
                console.error("este es mi error", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>{`user dashboard: ${user.name}`}</div>
            { questions.map(question => <h3>{question.name}</h3>)}
        </>
    );
}
