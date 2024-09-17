import "/components/Main.css";
import Card from './Card';

function Main() {
    const sectionList = [
        {
            image: "https://raw.githubusercontent.com/cirla/vim-giphy/master/demo.gif",
            titre: "Portfolio",
            description: "Développeur web fullstack JS",
            link: "https://portfolio.stevenbachimont.com/"
        },
        {
            image: "https://media.tenor.com/cLie0_-bDYUAAAAM/shovel-kid.gif",
            titre: "En chantier",
            description: "patientez",
            link: "/hangry"
        },
        {
            image: "https://www.yves.brette.biz/public/autres_arts/construction_chantier_bouygues.gif",
            titre: "En construction",
            description: "patientez",
            link: "/beat"
        },
        {
            image: "https://media.tenor.com/447Zd_RUDnwAAAAM/mud-drink.gif",
            titre: "En attente",
            description: "patientez",
            link: "/super"
        },
    ];

    return (
        <div className="main-container">
            {sectionList.map((section, index) => (
                <a key={index} href={section.link} target="blank"  className="card-link">
                    <Card
                        image={section.image}
                        titre={section.titre}
                        description={section.description}
                     />
                </a>
            ))}
        </div>
    );
}

export default Main;
