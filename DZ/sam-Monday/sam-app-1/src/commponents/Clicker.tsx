import {Counter} from "./Counter";
import {UniversalButton} from "./UniversalButton";
import {useState} from "react";
import Style from "./Style.module.css"

type ClickerPropsType = {
    maxCounter: number
}
export const Clicker = (props: ClickerPropsType) => {
    let [dateCounter, setDateCounter] = useState(0)
    // убрать в компанент к кнопкам
    let [active, setActive] = useState({
        inc: false,
        reset: true
    })

    return (
        <>
            <h2>Max counter: {props.maxCounter}</h2>
            <div className={Style.wrapper}>
                <Counter
                    maxCounter={props.maxCounter}
                    dateCounter={dateCounter}/>

                <div className={Style.btnWrapper}>
                    <UniversalButton
                        nameButton={'inc'}
                        maxCounter={props.maxCounter}
                        setDateCounter={setDateCounter}
                        dateCounter={dateCounter}
                        active={active}
                        setActive={setActive}/>

                    <UniversalButton
                        nameButton={'reset'}
                        maxCounter={props.maxCounter}
                        setDateCounter={setDateCounter}
                        dateCounter={dateCounter}
                        active={active}
                        setActive={setActive}/>
                </div>
            </div>
        </>
    )
}