import s from './Menu.module.scss';
import Search from "../../Components/Search/Search.tsx";
import Headling from "../../Components/Headling/Headling.tsx";
import {BASE_URL, CDN_BUCKET} from "../../helpers/API.ts";
import {useEffect, useState} from "react";
import {ProductProps} from "../../Components/interfaces/product.interface.ts";
import axios, {AxiosError} from "axios";
import CardsList from "../../Components/CardsList/CardsList.tsx";

const Menu = () => {
    const [products, setProducts] = useState<ProductProps[] | undefined>(undefined);
    const [error, setError] = useState<string | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchMenu = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.get<ProductProps[]>(`${BASE_URL}/products`);
            setProducts(data.map((item, index) => ({...item, image: `${CDN_BUCKET}food${index + 1}.png`})));
            setIsLoading(false);
        } catch (e) {
            if (e instanceof AxiosError) {
                setError(e.message);
            }
            setIsLoading(false);
            return;
        }

    };
    useEffect(() => {
        fetchMenu();
    }, []);

    return (<>
            <div className={s.head}>
                <Headling>Меню</Headling>
                <Search placeholder='Поиск по меню...'/>
            </div>
            {error && <>{error}</>}
            {!isLoading && <CardsList products={products}/>}
            {isLoading && "Подождите немного..."}
        </>
    );
};

export default Menu;