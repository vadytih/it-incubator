import React from "react";

type BodyPropsType ={
    contentBody: string
}

export const Body = (props: BodyPropsType) => {
    return (
        <>
            <div>{props.contentBody}</div>
        </>
    )
}