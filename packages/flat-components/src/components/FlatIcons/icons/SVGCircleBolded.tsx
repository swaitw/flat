import "../style.less";
import React from "react";
import { FlatIconProps } from "../types";

export const SVGCircleBolded: React.FC<FlatIconProps> = ({
    active,
    className = "",
    ...restProps
}) => {
    return (
        <svg
            className={`${className} flat-icon ${active ? "is-active" : ""}`}
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            {...restProps}
        >
            <rect
                className="flat-icon-stroke-color"
                height="16"
                rx="8"
                stroke="#5D6066"
                strokeLinejoin="round"
                strokeWidth="1.75"
                width="16"
                x="4"
                y="4"
            ></rect>
        </svg>
    );
};

export default SVGCircleBolded;
