import { MouseEventHandler } from "react";

export type CustomButtonProps = {
    title?: string | number;
    iconBefore? : React.ReactNode|string;
    iconAfter ?: React.ReactNode|string;
    containerStyles?: string;
    handleClick?: ()=> void;
}