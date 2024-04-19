import './Input.css'

const Input = ({texto, tipo})=>{
    return(
        
            <input type={tipo} placeholder={texto} />
    )
}

export default Input