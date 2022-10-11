import React from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = React.memo(({ imageUploader, name, onFileChange }) => {
    const [loading, setLoading] = React.useState(false);

    const inputRef = React.useRef();
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const onChange = async (event) => {
        setLoading(true);
        const uploader = await imageUploader.upload(event.target.files[0]);
        setLoading(false);
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
            { !loading && (
                <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
                    {name || 'No file'}
                </button>
            )}
            { loading && (
                <div className={styles.loading}></div>
            )}
        </div>
    );
});

export default ImageFileInput;
