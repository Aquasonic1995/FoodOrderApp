import s from './Product.module.scss';
import {useParams} from "react-router-dom";
const Product = () => {
   const {id} = useParams();
    return (
        <div className={s.active}> Product {id} </div>
    );
};

export default Product;