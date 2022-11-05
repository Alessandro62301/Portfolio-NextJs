import CardBig from "../micro/CardBig";
import CardSmall from "../micro/CardSmall";
import TitleSection from "../micro/TitleSection";
import IconReact from '/public/img/react.svg';

const p1 = 'Construo sites responsivos que são rápidos, fáceis de usar e construídos com as melhores práticas.A principal área de minha experiência é o desenvolvimento Front - end, HTML, CSS, JS, construção de aplicativos web de pequeno e médio porte.';
const p2 = 'Também tenho experiência como desenvolvedor Full - Stack utilizando Wordpress + PHP para criação de blogs e sites com conteúdo customizável e NodeJs para criação de Api(Application Programming Interface).';
const p3 = 'Tenho conhecimento dos conceitos de engenharia de software, desde o levantamento de requisitos ao projeto final, passando por todo o desenvolvimento da ideia em cada nível de diagramação, trazendo uma visão clara sobre o projeto a ser desenvolvido, evitando problemas inesperados como falta de escopo e mal planejamento.';



export default function Skills() {



    return (
        <div className="flex justify-center w-full min-h-screen bg-center bg-no-repeat bg-dark bg-skills">
            <div className="px-8 max-w-screen-xl sm:px-0">

                <TitleSection>Skills</TitleSection>

                <div className="flex flex-col justify-around w-full lg:flex-row">
                    <div className="lg:mr-8 max-w-[624px]">
                        <CardBig p1={p1} p2={p2} p3={p3} />
                    </div>
                    <div className="flex flex-wrap items-center justify-around max-w-[624px] lg:justify-center lg:gap-4">
                        <CardSmall IconSvg={IconReact} />
                        <CardSmall IconSvg={IconReact} />
                        <CardSmall IconSvg={IconReact} />
                        <CardSmall IconSvg={IconReact} />
                        <CardSmall IconSvg={IconReact} />
                        <CardSmall IconSvg={IconReact} />
                        <CardSmall IconSvg={IconReact} />
                        <CardSmall IconSvg={IconReact} />
                        <CardSmall IconSvg={IconReact} />
                    </div>
                </div>

            </div>
        </div>
    )
}