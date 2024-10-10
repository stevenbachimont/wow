import "/components/Main.css";
import Card from './Card';

function Main() {
    const sectionList = [
        {
            image: "https://api.stevenbachimont.com/img/wow/portfolio1.png",
            titre: "Portfolio1",
            description: "React.JS et CSS classique",
            link: "https://portfolio.stevenbachimont.com/"
        },
        {
            image: "https://api.stevenbachimont.com/img/wow/portfolio2.png",
            titre: "Portfolio2",
            description: "React.JS et TailwindCSS",
            link: "https://portfolio2.stevenbachimont.com/"
        },
        {
            image: "https://api.stevenbachimont.com/img/wow/portfolio3.png",
            titre: "Portfolio3",
            description: "React.JS et Bootstrap",
            link: "https://portfolio3.stevenbachimont.com/"
        },
        {
            image: "https://www.yves.brette.biz/public/autres_arts/construction_chantier_bouygues.gif",
            titre: "Pourquoi pas un 4ème portfolio ?",
            description: "explications sur la construction de ces portfolios",
            link: "/page3"
        },
    ];

    return (
        <>
        <div className="title-container">
            <h2>3 portfolios, une seule base de donnée et son server Express.JS</h2>
            <h3>Patientez encore quelques semaines, tout est un peu en chantier mais c'est ouvert au public</h3>
        </div>
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
        </>
    );
}

export default Main;
