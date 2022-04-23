import Style from "./Style.module.css"


type UniversalButtonPropsType = {
    nameButton: 'inc' | 'reset'
    setDateCounter: (n: number) => void
    dateCounter: number
    active: { inc: boolean, reset: boolean }
    setActive: (newObj: any) => void
    maxCounter: number
}

export const UniversalButton = (props: UniversalButtonPropsType) => {
    let activeX: boolean = props.nameButton === 'inc' ? props.active.inc : props.active.reset

    const onClickHandler = (btnName: string) => {
        if (btnName === 'inc') {
            if (props.dateCounter <= props.maxCounter) {
                props.setDateCounter(props.dateCounter + 1)
                props.setActive({...props.active, reset: false})
            }
        }

        if (props.dateCounter === props.maxCounter - 1) {
            props.setActive({...props.active, inc: true})
        }

        if (btnName === 'reset') {
            props.setDateCounter(0)
            props.setActive({...props.active, reset: true, inc: false})
        }
    }

    return (
        <button
            className={Style.btn}
            disabled={activeX}
            onClick={(event) => onClickHandler(props.nameButton)}>{props.nameButton}</button>
    )
}