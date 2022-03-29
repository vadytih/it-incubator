import React from "react";

export const Header = () => {
    console.log("Header - компанент отрисован")
    return (
        <div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">News Feed</a>
                </li>
                <li>
                    <a href="#">Messages</a>
                </li>
            </ul>
        </div>
    )
}
