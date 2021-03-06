import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { Container } from './styles'

const QuestionForm = ({ editForm = false, editFormData = {}, handleEditEnd }) => {
    const [message, setMessage] = useState('');
    return (
        <Container>
            <Formik
                initialValues={
                    {
                        name: editForm ? editFormData.name : '',
                        company: editForm ? editFormData.company : '',
                        question: editForm ? editFormData.question : ''
                    }
                }
                enableReinitialize={true}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.company) {
                        errors.company = 'Required';
                    }
                    if (!values.question) {
                        errors.question = 'Required';
                    }
                    return errors;
                }}
                onSubmit={
                    async (values, { setSubmitting }) => {
                        try {
                            //Chequeo si la accion del form es para editar o crear
                            const formAction = editForm ? 'edit' : 'add'
                            const formValues = !editForm ? values : {'id':editFormData.id, ...values}

                            const res = await axios.post(`/api/questions/${formAction}`, formValues)
                            const data = await res.data
                            setSubmitting(false);
                            setMessage(`Question sent, thanks ${data.name} (${res.status})`)

                            //Le aviso al componente padre que terminó de editar. (mejorar)
                            handleEditEnd(true)
                        } catch (error) {
                            if (error.response) {
                                /*
                                 * The request was made and the server responded with a
                                 * status code that falls out of the range of 2xx
                                 */
                                console.log(error.response.data);
                                console.log(error.response.status);
                                console.log(error.response.headers);
                            } else if (error.request) {
                                /*
                                 * The request was made but no response was received, `error.request`
                                 * is an instance of XMLHttpRequest in the browser and an instance
                                 * of http.ClientRequest in Node.js
                                 */
                                console.log(error.request);
                            } else {
                                // Something happened in setting up the request and triggered an Error
                                console.log('Error', error.message);
                            }
                            console.log(error);
                        }
                    }
                }
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="input_row">
                            <Field type="name" name="name" placeholder="Name" />
                            <ErrorMessage name="name" component="div" />
                        </div>
                        <div className="input_row">
                            <Field type="company" name="company" placeholder="Company" />
                            <ErrorMessage name="company" component="div" />
                        </div>
                        <div className="input_row">
                            <Field as="textarea" type="question" name="question" placeholder="Your Question" />
                            <ErrorMessage name="question" component="div" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            <p>{message}</p>
        </Container>
    )
}

export default QuestionForm;