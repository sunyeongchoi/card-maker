import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css'

const CardAddForm = ({ onSubmit }) => {
    const formRef = React.useRef();
    const nameRef = React.useRef();
    const companyRef = React.useRef();
    const themeRef = React.useRef();
    const titleRef = React.useRef();
    const emailRef = React.useRef();
    const messageRef = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now(), // uuid
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: '',
            fileURL: '',
        };
        onSubmit(card);
        formRef.current.reset();
    };
    return (
        <from ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder='Name' />
            <input ref={companyRef} className={styles.input} type="text" name="company" placeholder='Company' />
            <select ref={themeRef} className={styles.select} name="theme" placeholder='Theme'>
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name="title" placeholder='Title' />
            <input ref={emailRef} className={styles.input} type="text" name="email" placeholder='Email' />
            <textarea ref={messageRef} className={styles.textarea} name="message" placeholder='Message' />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Add" onClick={handleSubmit} />
        </from>
    )
};


export default CardAddForm;