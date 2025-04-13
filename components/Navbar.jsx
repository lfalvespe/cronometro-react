import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar d-flex justify-content-between">
           
            <a
                className="text-decoration-none text-capitalize rounded"
                href="https://consultaporcep.vercel.app/"
                target='_blank'
            > <span className="link-icon">📬 </span>Busca Cep
            </a>
            <a
                className="text-decoration-none text-capitalize rounded"
                href="https://climagora.vercel.app/"
                target="_blank"
            > <span className="link-icon">⛅ </span>Clima Agora
            </a>
            <a
                className="text-decoration-none text-capitalize rounded"
                href="https://contador-reactjs.vercel.app/"
                target="_blank"
            > <span className="link-icon">🎰 </span>Contador Numérico
            </a>
            <a
                className="text-decoration-none text-capitalize rounded"
                href="https://numerosaleatorios-react.vercel.app/"
                target="_blank"
            > <span className="link-icon">🎲 </span>Números aleatórios
            </a>
            
        </nav>
    )
}

export default Navbar