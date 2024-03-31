import {SearchProps} from "./Search.props.ts";
import {FC, forwardRef} from "react";
import cn from "clsx";
import s from './Search.module.scss';

const Search:FC<SearchProps> = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
    return (
        <div className={s['input-wrapper']}>
            <input ref={ref} className={cn(s['input'], className, {
                [s['invalid']]: isValid
            })} {...props} />
            <img className={s['icon']} src='/search-icon.svg' alt='Иконка лупы' />
        </div>
    );
});

export default Search;