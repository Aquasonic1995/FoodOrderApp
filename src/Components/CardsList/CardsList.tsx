import Card from "../Card/Card.tsx";
import {CardsListProps} from "./CardsList.props.ts";

const CardsList = ({products}:CardsListProps) => {
    return ( products?.map(card => (
            <Card id={card.id} key={card.id} name={card.name}
                  description={card.ingredients.join(', ')}
                  image={card.image}
                  price={card.price} rating={card.rating}/>
        ))
    );
};

export default CardsList;