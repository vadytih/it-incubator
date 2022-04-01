import React, {useState} from 'react';
import './App.css';

type MoneyType = {
    banknots: string;
    value: number;
    number: string;
}

const App = () => {
    const [money, setMoney] = useState<MoneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let carentMoney = money;

    let [filterTypes, setFilter] = useState("All")


    if (filterTypes === "All") {
        carentMoney = money
    }
    if (filterTypes === "Dollars") {
        carentMoney = money.filter(obj => obj.banknots === "Dollars")
    }
    if (filterTypes === "RUBLS") {
        carentMoney = money.filter(obj => obj.banknots === "RUBLS")
    }

    const onClickHendler = (nameButton: string) => {
        setFilter(nameButton)
    }

    let total = 0;
    for (let i = 0; i < carentMoney.length; i++) {
        total += carentMoney[i].value;
    }


    return (
        <div className={"App"}>
            <h1>Банкомат</h1>
            {
                carentMoney.map((obj, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                <span>{obj.banknots} </span>
                                <span>{obj.value} </span>
                                <span>{obj.number}</span>
                            </li>
                        </ul>
                    )
                })
            }
            <h3>{total}</h3>
            <div>
                <button onClick={() => onClickHendler("All")}> All</button>
                <button onClick={() => onClickHendler("Dollars")}>Dollars</button>
                <button onClick={() => onClickHendler("RUBLS")}>RUBLS</button>
            </div>
        </div>
    )
}

export default App;
