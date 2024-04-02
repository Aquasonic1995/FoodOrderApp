import {forwardRef} from "react";
import {InputProps} from "./Input.props.ts";
import s from './Input.module.scss';
import cn from "clsx";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ isValid = true, className, ...props }, ref) {
        return (
            <input ref={ref} className={cn(s['input'], className, {
                [s['invalid']]: isValid
            })} {...props} />
        );
    });

export default Input;