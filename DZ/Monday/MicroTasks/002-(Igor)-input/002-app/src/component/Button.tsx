type ButtonPropsButton = {
    name: string
    pushMessage: (s: string) => void
    setInputValue: (s: string)=> void
}

export const Button = (props: ButtonPropsButton) => {

    const onClickButtonHandler = () => {
        props.pushMessage(document.querySelectorAll('input')[1].value)
        props.setInputValue("")
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}