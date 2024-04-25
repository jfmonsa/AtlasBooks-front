import './Card.css'
export function Card ({children}) {
    return(
        <section className='card'>
            {children}
        </section>
    )
}