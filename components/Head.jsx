import { Link } from 'react-router-dom';
import "/components/Head.css";

function Head() {
    return (
        <nav>
            <Link to="/" className="headTitle">Steven BACHIMONT</Link>
            <ul className="headList">
                <Link to="/page1" className="headLien">Bonjour</Link>
                <li className="headLien">Salut</li>
                <li className="headLien">Merci</li>
            </ul>
        </nav>
    );
}

export default Head;
