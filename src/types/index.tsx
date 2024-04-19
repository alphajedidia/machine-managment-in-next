import { MouseEventHandler } from "react";

export type CustomButtonProps = {
    title?: string;
    iconBefore? : React.ReactNode|string;
    iconAfter ?: React.ReactNode|string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}