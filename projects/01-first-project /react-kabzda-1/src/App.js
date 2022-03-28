import './App.css';

const App = () => {

    return (
        <div>
            <Header/>
            <Tehnologies />
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News Feed</a>
            <a href="#">Messages</a>
        </div>
    );
}

const Tehnologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}

export default App;

