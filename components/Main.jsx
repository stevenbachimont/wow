import "/components/Main.css";
import Card from './Card';

function Main() {
    const nftList = [
        {
            image: "https://media3.giphy.com/avatars/doodlesbyburnttoast/dMqxHmPPA8fd.gif",
            titre: "portfolio",
            description: "développeur web fullstack JS",
            link: "https://portfolio.stevenbachimont.com/"
        },
        {
            image: "https://media.tenor.com/cUzMbdPym1YAAAAd/doodle-doodles.gif",
            titre: "Hangry",
            description: "DOODLES",
            link: "/hangry"
        },
        {
            image: "https://i.giphy.com/jQb5vQCpxZk6WgrB3z.webp",
            titre: "Beat",
            description: "DOODLES",
            link: "/beat"
        },
        {
            image: "https://openseauserdata.com/files/1de504ef743bdd851b637488b24dba25.gif",
            titre: "Super",
            description: "DOODLES",
            link: "/super"
        },
    ];

    return (
        <div className="main-container">
            {nftList.map((nft, index) => (
                <a key={index} href={nft.link} target="blank"  className="card-link">
                    <Card
                        image={nft.image}
                        titre={nft.titre}
                        description={nft.description}
                     />
                </a>
            ))}
        </div>
    );
}

export default Main;
