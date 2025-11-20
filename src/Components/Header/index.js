import './index.scss';

function Header() {
    return (
        <header className="header">
            <div className='logo'>
                <h1>Logo</h1>
                <h1>Gerenciamento</h1>
            </div>

            <div className='nav'>
                <nav>Sobre nós</nav>
                <nav>Contato</nav>
            </div>
        </header>
    );
}

export default Header;