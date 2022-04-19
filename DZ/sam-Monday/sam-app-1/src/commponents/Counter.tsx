import Style from "./Style.module.css";

type CounterPropsType = {
    dateCounter: number
    active: { inc: boolean, reset: boolean }
    maxCounter: number
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={Style.counter}>
            <div className={props.dateCounter === props.maxCounter ? Style.counterMax : ''}>{props.dateCounter}</div>
        </div>
    )
}