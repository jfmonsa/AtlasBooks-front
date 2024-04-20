import styles from './inputText.module.css'

export function InputText({type,typecss, value, id, onChange, text}){
    
    return(
        <div>
            <label htmlFor={id} className={styles.input__label}>{text}</label>
            <input 
                id = {id}
                // className={`text-area ${typecss}`}
                className={styles.input}
                type={type} 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}