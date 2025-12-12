import "./index.scss";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
// import CardAtleta from "../../../Components/CardAtleta";

function LandingPageDivulgação() {
  return (
    <main className="landingPageDivulgacao">
        <Header />
        <section className="numeros">
            <div className="titulo">
                <h1>Nossos Números</h1>
            </div>

            <div className="informacoes">

            <div>
                <h2>500+</h2>
                <p>Atletas Cadastrados</p>
            </div>
            <div>
                <h2>10</h2>
                <p>Premiações</p>
            </div>
            <div>
                <h2>100+</h2>
                <p>Treinos por Ano</p>
            </div>
            <div>
                <h2>2+</h2>
                <p>Anos de Projeto</p>
            </div>
          </div>
        </section>
        <Footer />
    </main>
  );
}



export default LandingPageDivulgação;