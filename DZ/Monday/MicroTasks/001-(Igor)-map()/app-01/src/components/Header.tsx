import React from "react";

type HeaderPropstype = {
    contentHeader: string
}

export const Header = (props: HeaderPropstype) => {
    return (
        <>
            <div>{props.contentHeader}</div>
        </>
    )
}