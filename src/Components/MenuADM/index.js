import "./index.scss";

function MenuADM() {
    return (
        <main className="menuADM">
            <div className="logoMenuADM">
                <h1>LOGO</h1>
                <p>Admin Mode</p>
            </div>

            <section className="opcoesMenuADM">
                <div className="opcao">
                    <p>Dashboard</p>
                </div>
                <div className="opcao">
                    <p>Atletas</p>
                </div>
                <div className="opcao">
                    <p>Eventos</p>
                </div>
                <div className="opcao">
                    <p>Informações</p>
                </div>
            </section>

            <div className="sair">
                <p>Sair</p>
            </div>
        </main>
    );
}

export default MenuADM;