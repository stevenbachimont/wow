import "/components/Main.css";
import Card from './Card';

function Main() {
    const sectionList = [
        {
            image: "https://raw.githubusercontent.com/cirla/vim-giphy/master/demo.gif",
            titre: "Portfolio1",
            description: "React.JS et CSS classique",
            link: "https://portfolio.stevenbachimont.com/"
        },
        {
            image: "https://raw.githubusercontent.com/cirla/vim-giphy/master/demo.gif",
            titre: "Portfolio2",
            description: "React.JS et TailwindCSS",
            link: "https://portfolio2.stevenbachimont.com/"
        },
        {
            image: "https://raw.githubusercontent.com/cirla/vim-giphy/master/demo.gif",
            titre: "Portfolio3",
            description: "React.JS et Bootstrap",
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
            <h2>4 portfolios, une seule base de donnée et son server Express.JS/Nest.JS</h2>
            <h3>Patientez encore quelques semaines, tout est un peu en chantier mais c'est ouvert au public</h3>
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
