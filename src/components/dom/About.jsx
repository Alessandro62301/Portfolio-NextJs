import CardBig from "../micro/CardBig";
import CardMedium from "../micro/CardMedium";
import TitleSection from "../micro/TitleSection";


const p1 = 'Olá ✌️, eu sou Júnior, um desenvolvedor Front-end e freelancer mas horas vagas, tenho 20 anos e estou me graduando em sistemas de informações.Eu sou totalmente obcecado por tecnologia e jogos.';
const p2 = 'Trabalho de forma organizada seguindo as boas praticas das metodologias ágeis e sempre buscando programar de forma limpa, seguindo as boas práticas para garantir um código limpo e obter maior manutenibilidadee que seja de fácil entendimento para outros desenvolvedores.';
const p3 = 'Interessado em todo o espectro de Front-end, trabalhando em projetos ambiciosos com pessoas positivas e me arriscando no backend em projetos menores.';


export default function About() {



    return (
        <div className="flex justify-center w-full min-h-screen bg-center bg-no-repeat bg-dark bg-about">
            <div className="px-8 max-w-screen-xl sm:px-0">

                <TitleSection>About us</TitleSection>

                <div className="flex flex-col justify-around w-full lg:flex-row">
                    <div className="lg:mr-8 max-w-[624px]">
                        <CardBig p1={p1} p2={p2} p3={p3} />
                    </div>
                    <div>
                        <div className="mt-8 lg:mt-0">
                            <CardMedium />
                        </div>
                        <div className="mt-8">
                            <CardMedium />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}