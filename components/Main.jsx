import "/components/Main.css";
import Card from './Card';

function Main() {
    const sectionList = [
        {
            image: "https://raw.githubusercontent.com/cirla/vim-giphy/master/demo.gif",
            titre: "Portfolio1",
            description: "Style classique",
            link: "https://portfolio.stevenbachimont.com/"
        },
        {
            image: "https://raw.githubusercontent.com/cirla/vim-giphy/master/demo.gif",
            titre: "Portfolio2",
            description: "style start up",
            link: "https://portfolio2.stevenbachimont.com/"
        },
        {
            image: "https://raw.githubusercontent.com/cirla/vim-giphy/master/demo.gif",
            titre: "Portfolio3",
            description: "style marketplace",
            link: "https://portfolio3.stevenbachimont.com/"
        },
        {
            image: "https://www.yves.brette.biz/public/autres_arts/construction_chantier_bouygues.gif",
            titre: "En attente",
            description: "patientez",
            link: "/page3"
        },
    ];

    return (
        <div className="main-container">
            {sectionList.map((section, index) => (
                <a key={index} href={section.link} target="_blank" rel="noopener noreferrer" className="card-link">
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
