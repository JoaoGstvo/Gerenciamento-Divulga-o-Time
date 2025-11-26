import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
        <section>
        <h1>Área Restrita</h1>
        <p id="subtitulo">Acesso ao sistema de gerenciamento</p>
        <div>
            <a href="/" className="adm">Login Administrador</a>
            <a href="/">Login Atleta</a>
        </div>

        <p id="subtexto">Projeto gerenciamento de time</p>

        <div id="creditos">
            <p id="p-creditos">Desenvolvido por @chatGPT @Deepseek</p>
        </div>
        </section>
    </footer>
  );
}

export default Footer;