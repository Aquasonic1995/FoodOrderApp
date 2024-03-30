import s from "./Button.module.scss";
import {ButtonProps} from "./Button.props.ts";
import cn from "clsx";
import {FC} from "react";
const Button:FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button className={cn(s['button'], s['accent'])} onClick={onClick}>{children}</button>
    );
};

export default Button;