import s from './Product.module.scss';
import {useLoaderData, } from "react-router-dom";
import {ProductProps} from "../interfaces/product.interface.ts";
const Product = () => {

   const data = useLoaderData() as ProductProps;
    return (
        <div className={s.active}> Product {data.name}  </div>
    );
};

export default Product;