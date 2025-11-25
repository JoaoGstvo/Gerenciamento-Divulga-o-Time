import './index.scss';

function Header() {
    return (
        <header className="header">
            <div className='logo'>
                <h1>Gerenciamento</h1>
            </div>

            <div className='nav'>
                <nav>Sobre nós</nav>
                <nav>Contato</nav>
                <nav>Login</nav>
                {/* <nav>Administrador</nav> */}
            </div>

            
        </header>
    );
}

export default Header;