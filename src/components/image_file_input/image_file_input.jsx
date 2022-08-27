import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
    const inputRef = React.useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const onChange = async (event) => {
        const uploader = await imageUploader.upload(event.target.files[0]);
        console.log(uploader);
        onFileChange({
            name: uploader.original_filename,
            url: uploader.url,
        })
    }

    return (
        <div className={styles.container}>
            <input
                ref={inputRef}
                className={styles.input}
                type="file"
                accept='image/*'
                name='file'
                onChange={onChange}
            />
            <button className={styles.button} onClick={onButtonClick}>
                {name || 'No file'}
            </button>
        </div>
    );
};

export default ImageFileInput;
