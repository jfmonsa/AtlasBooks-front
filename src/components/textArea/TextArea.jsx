import './TextArea.css'

export function TxtArea({type,typecss, value, id, onChange, text}){
    
    return(
        <div>
            <h2 style={{
                fontSize: 20,
                textAlign: "left",
                fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
            }}>
              {text}  
            </h2>
            <input 
                id = {id}
                className={`text-area ${typecss}`}
                type={type} 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}