import s from './Button.module.scss';
import {ButtonProps} from "./Button.props.ts";
import cn from "clsx";
import {FC} from "react";

const Button: FC<ButtonProps> = ({
                                     onClick,
                                     children,
                                     appearance = 'small',
                                     className,
                                     ...props
                                 }) => {
    return (
        <button onClick={onClick} className={cn(s['button'], s['accent'], className, {
            [s['small']]: appearance === 'small',
            [s['big']]: appearance === 'big'
        })} {...props}>{children}</button>
    );
};

export default Button;