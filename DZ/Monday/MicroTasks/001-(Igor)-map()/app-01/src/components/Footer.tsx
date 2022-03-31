import React from "react";

type FooterPropsType = {
    contentFooter : string
}

export const Footer = (props: FooterPropsType) => {
    return (
        <>
            <div>{props.contentFooter}</div>
        </>
    )
}