import React, {useState} from "react";

const starStyle = {
    cursor: 'pointer',
    marginLeft: '5px',
}

export const Rating2 = () => {
    console.log("Rating - компанент отрисован")

    let [selected, setSelected] = useState(0)
    let i = 0

    console.log('количество звезд: ' + selected)

    const star = () => {
        return selected >= ++i ? <b>star</b> : "star"
    }

    return (
        <div>
            <button onClick={() => setSelected(0)}>Очистить</button>
            <span style={starStyle} onClick={()=>setSelected(1)}>{star()}</span>
            <span style={starStyle} onClick={()=>setSelected(2)}>{star()}</span>
            <span style={starStyle} onClick={()=>setSelected(3)}>{star()}</span>
            <span style={starStyle} onClick={()=>setSelected(4)}>{star()}</span>
            <span style={starStyle} onClick={()=>setSelected(5)}>{star()}</span>
        </div>
    )
}
