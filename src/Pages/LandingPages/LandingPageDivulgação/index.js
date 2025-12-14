import "./index.scss";

import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

function LandingPageDivulgacao() {
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

            <section className="sobreNos">
                <div className="titulo">
                    <h1>Sobre o Projeto</h1>
                </div>

                <div className="informacoes">
                    <div className="info">
                        <div className="img"></div>
                        <h3>Nosso Time</h3>
                        <p>
                            Somos mais do que um grupo de atletas: somos uma equipe unida pelo
                            respeito, disciplina e vontade de vencer.
                        </p>
                    </div>

                    <div className="info">
                        <div className="img"></div>
                        <h3>Treinos e Eventos</h3>
                        <p>
                            Somos mais do que um grupo de atletas: somos uma equipe unida pelo
                            respeito, disciplina e vontade de vencer.
                        </p>
                    </div>

                    <div className="info">
                        <div className="img"></div>
                        <h3>Objetivo</h3>
                        <p>
                            Somos mais do que um grupo de atletas: somos uma equipe unida pelo
                            respeito, disciplina e vontade de vencer.
                        </p>
                    </div>
                </div>
            </section>


            <section className="nossaHistoria">
                <div className="informacoes">
                    <div className="titulo">
                        <h1>Nossa História</h1>
                    </div>
                    <div className="texto">
                        <p>
                            Fundado em 2019, o Projeto Handebol nasceu do sonho de unir atletas
                            apaixonados pelo esporte e criar um ambiente de crescimento,
                            competição e camaradagem.
                        </p>

                        <p>
                            Ao longo dos anos, conquistamos diversos títulos regionais e
                            formamos atletas que hoje competem em níveis estaduais e nacionais.
                            Nosso compromisso vai além das quadras.
                        </p>

                        <p>
                            Com treinos regulares e acompanhamento contínuo, seguimos formando
                            novos talentos a cada temporada.
                        </p>
                    </div>
                </div>
                <div className="imagem">

                </div>
            </section>

            <section className="nossosValores">
                <div className="titulo">
                    <h1>Nossos Valores</h1>
                </div>

                <div className="informacoes">
                    <div className="info">
                        <div className="img"></div>
                        <h3>Excelência</h3>
                        <p>Buscamos sempre o melhor desempenho em treinos e competições.</p>
                    </div>

                    <div className="info">
                        <div className="img"></div>
                        <h3>Paixão</h3>
                        <p>Amor pelo esporte que nos une e motiva diariamente.</p>
                    </div>

                    <div className="info">
                        <div className="img"></div>
                        <h3>Disciplina</h3>
                        <p>Compromisso com treinos e dedicação constante.</p>
                    </div>

                    <div className="info">
                        <div className="img"></div>
                        <h3>União</h3>
                        <p>Força do coletivo acima de qualquer individualidade.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default LandingPageDivulgacao;
