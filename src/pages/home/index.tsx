
import { Link } from "react-router-dom";
import Counter from "../../components/counter/counter";
import logo from '../../logo.svg';

const Home = (): JSX.Element => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
        </div>
    )
}

export default Home