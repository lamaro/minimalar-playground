import { useState } from 'react'
import { Container as QuestionContainer } from './styles'
import axios from 'axios';
import Link from 'next/link'    

const Question = ({ data, enableEdit, handleEdit }) => {
    const [toDelete, setToDelete] = useState(null)
    const { id, username, question, company, name, highlight } = data

    const handleDelete = async id => {
        try {
            setToDelete(id)
            const res = await axios.post('/api/questions/delete', { data: { id } })
        } catch (error) {
            console.log('error axios', error)
        }
    }
    
    //nota: La función HandleEdit se subió al container Padre para poder usar el unico form.

    return (
        <QuestionContainer
            toDelete={toDelete === id ? true : false}
            highlight={highlight}
        >
            <div className="question_content">
                <Link href={`/questions/${id}`}>
                    <a><h2>{question}</h2></a>
                </Link>
                <p>{name} - <span>{company}</span> - {username}</p>
            </div>
            { enableEdit &&
                <div className="actions_content">
                    <button
                        onClick={() => handleEdit(data)}
                    >Edit</button>
                    <button
                        className="red"
                        onClick={() => handleDelete(id)}
                    >Delete</button>
                </div>
            }
        </QuestionContainer>
    )
}

export default Question;