type NewComponentsType = {
    arr: Array<AutoTypeObj>
}

type AutoTypeObj = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentsType) => {

    return (
        <table>
            {
                props.arr.map((obj, index) => {
                    return (
                        <tr>
                            <td key={index}>{index + 1}</td>
                            <td key={index}>{obj.manufacturer}</td>
                            <td key={index}>{obj.model}</td>
                        </tr>
                    )
                })}
        </table>
    )
}