import "./index.scss";

function MenuAtleta() {
    return (
        <main className="menuAtleta">
            <div className="logoMenu">
                <h1>LOGO</h1>
                <p>Admin Mode</p>
            </div>

            <section className="opcoesMenu">
                <div className="opcao">
                    <p>Perfil</p>
                </div>
                <div className="opcao">
                    <p>Eventos Pricipais</p>
                </div>
                <div className="opcao">
                    <p>Calendário</p>
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

export default MenuAtleta;