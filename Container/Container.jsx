import './Container.css'
import Input from '../Input/Input'
import About from '../About/About'



const Container = ()=>{
    return(
    <>
        <About titulo={'Learn to code by watching others'} descricao={'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.'}/>

        

        <section className='Container'>
            <form action="">
            <Input texto={'Fist Name'} tipo={'text'}/>
            <Input texto={'Last Name'} tipo={'text'}/>
            <Input texto={'Email Address'} tipo={'email'}/>
            <Input texto={'Fist Name'} tipo={'password'}/>
            </form>
            
        </section>
        
        </>
        
    )
}

export default Container