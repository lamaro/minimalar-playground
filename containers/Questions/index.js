import React, { useState, useEffect } from "react";
import { firebase } from 'lib';
import { Question, QuestionForm } from 'components'
const firebaseDB = firebase.database();


export default function Questions({ user }) {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        firebaseDB.ref('questions').on('value', (snapshot) => {
            const questionsArr = [];
            snapshot.forEach((childSnapshot) => {
                questionsArr.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            questionsArr.reverse()
            setQuestions(questionsArr)
        })
        return () => {
            firebaseDB.ref('questions').off('value')
        }
    }, []);

    return (
        <>
            <div>{`user dashboard: ${user.name}`}</div>
            <div><QuestionForm /></div>
            { questions.map(question => <Question data={question} />)}
        </>
    );
}
