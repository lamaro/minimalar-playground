import { useState } from 'react'
import { Container as QuestionContainer } from './styles'
import axios from 'axios';

const Question = ({ data }) => {
    const [toDelete, setToDelete] = useState(null)
    const { id, question, company, name, highlight } = data

    const handleDelete = async id => {
        try {
            setToDelete(id)
            const res = await axios.post('/api/questions/delete', { data: { id } })
        } catch (error) {
            console.log('error axios', error)
        }
    }
    const handleHighlight = async (id, highlight) => {
        try {
            const res = await axios.post('/api/highlight', { id, highlight })
        } catch (error) {
            console.log('error axios', error)
        }
    }

    return (
        <QuestionContainer
            toDelete={toDelete === id ? true : false}
            highlight={highlight}
        >
            <div className="question_content">
                <h2>{question}</h2>
                <p>{name} - <span>{company}</span></p>
            </div>
            <div className="actions_content">
                <button
                    onClick={() => handleHighlight(id, highlight)}
                >Highlight</button>
                <button
                    className="red"
                    onClick={() => handleDelete(id)}
                >Delete</button>
            </div>
        </QuestionContainer>
    )
}

export default Question;