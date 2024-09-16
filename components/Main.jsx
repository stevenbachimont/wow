import "/components/Main.css";
import Card from './Card';

function Main() {
    const nftList = [
        {
            image: "https://media3.giphy.com/avatars/doodlesbyburnttoast/dMqxHmPPA8fd.gif",
            titre: "portfolio",
            description: "blablabla",
            link: "https://portfolio.stevenbachimont.com/"
        },
        {
            image: "https://media.tenor.com/cUzMbdPym1YAAAAd/doodle-doodles.gif",
            firstName: "Hangry",
            lastName: "DOODLES",
            link: "/hangry"
        },
        {
            image: "https://i.giphy.com/jQb5vQCpxZk6WgrB3z.webp",
            firstName: "Beat",
            lastName: "DOODLES",
            link: "/beat"
        },
        {
            image: "https://openseauserdata.com/files/1de504ef743bdd851b637488b24dba25.gif",
            firstName: "Super",
            lastName: "DOODLES",
            link: "/super"
        },
    ];

    return (
        <div className="main-container">
            {nftList.map((nft, index) => (
                <a key={index} href={nft.link} target="blank"  className="card-link">
                    <Card
                        image={nft.image}
                        firstName={nft.titre}
                        lastName={nft.description}
                    />
                </a>
            ))}
        </div>
    );
}

export default Main;
