import { ICard } from "../interface/ICard"

export const Card = ({id}: ICard) => {
    return (
        <div>
            <h1>Card {id}</h1>
            <p>Paragrafo</p>
            <p>Detalhe</p>
        </div>
    )
}