import "/components/Main.css";
import Card from './Card';

function Main() {


    const nftList = [
        {
        image:"https://media3.giphy.com/avatars/doodlesbyburnttoast/dMqxHmPPA8fd.gif",
        firstName:"Vomito",
        lastName:"DOODLES"
    },
     {
        image:"https://media.tenor.com/cUzMbdPym1YAAAAd/doodle-doodles.gif",
        firstName:"Hangry",
        lastName:"DOODLES"
    },
    {
        image:"https://i.giphy.com/jQb5vQCpxZk6WgrB3z.webp",
        firstName:"Beat",
        lastName:"DOODLES"
    },
   {
        image:"https://openseauserdata.com/files/1de504ef743bdd851b637488b24dba25.gif",
        firstName:"Super",
        lastName:"DOODLES"
    },
        ];

    return (
        <div className="main-container">
            <Card
                image={nftList[0].image}
                firstName={nftList[0].firstName}
                lastName={nftList[0].lastName}
            />
            <Card
                image={nftList[1].image}
                firstName={nftList[1].firstName}
                lastName={nftList[1].lastName}
            />
            <Card
            image={nftList[2].image}
            firstName={nftList[2].firstName}
            lastName={nftList[2].lastName}
             />
            <Card
                image={nftList[3].image}
                firstName={nftList[3].firstName}
                lastName={nftList[3].lastName}
            />
        </div>

    )


}


export default Main;