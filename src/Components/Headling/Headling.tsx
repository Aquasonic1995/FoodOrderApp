import {FC} from "react";
import {HeadlingProps} from "./Headling.props.ts";

const Headling:FC<HeadlingProps> = ({ children}) => {
    return (
     <h1>{children}</h1>
    );
};

export default Headling;