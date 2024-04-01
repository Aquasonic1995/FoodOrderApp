import s from './Menu.module.scss';
import Search from "../../Components/Search/Search.tsx";
import Headling from "../../Components/Headling/Headling.tsx";
import Card from "../../Components/Card/Card.tsx";
import {BASE_URL, CDN_BUCKET} from "../../helpers/API.ts";
import {useEffect, useState} from "react";
import {Product} from "../../Components/interfaces/product.interface.ts";
import Button from "../../Components/Button/Button.tsx";
import axios from "axios";

const Menu = () => {
    const [products, setProducts] = useState<Product[]>();
    const fetchMenu = async () => {
        try {
            const {data} = await axios.get<Product[]>(`${BASE_URL}/products`);
            setProducts(data.map((item, index)=>({...item, image:`${CDN_BUCKET}food${index + 1}.png`})));
        } catch (e) {
            console.error(e);
            return;
        }

    };
    useEffect(() => {
        fetchMenu();
    }, []);

    return (<>
            <div className={s.head}>
                <Headling>Меню</Headling>
                <Button onClick={()=>{fetchMenu();}}>Fetch</Button>
                <Search placeholder='Поиск по меню...'/>
            </div>
            {products?.map(card => (
                <Card id={card.id} key={card.id} name={card.name} description={card.ingredients.join(', ')} image={card.image}
                      price={card.price} rating={card.rating} />
            ))}

        </>
    );
};

export default Menu;