import React from "react";

import Alabama1 from '../../public/images/alabama1.webp'
import Alabama3 from '../../public/images/alabama3.png'
import Alaska1 from '../../public/images/alaska1.png'

import Card from "../Card";

export default () => {

    return (
        <main>
            <div className="state">
                <div className="content">
                    <h1>Alabama</h1>
                    <p>Localizado no coração do sul dos Estados Unidos, o Alabama é um estado rico em história, cultura e belezas naturais. Conhecido por sua participação no movimento pelos direitos civis e por suas paisagens deslumbrantes, oferece uma variedade de atrações para todos os gostos.</p>
                </div>

                <div className="cards">
                    <Card image={Alabama1} title={"USS Alabama Battleship"} description={"Um navio de guerra histórico localizado no Memorial Park em Mobile, com exposições sobre a Segunda Guerra Mundial."} />
                    <Card image={Alabama3} title={"Gulf Shores Beach"} description={"Praias paradisíacas com areia branca e águas cristalinas, perfeitas para relaxar e curtir a natureza."} />
                    <Card image={Alabama1} title={"Little River Canyon"} description={"Uma impressionante reserva natural com cachoeiras e trilhas, ideal para quem ama aventura."} />
                    <Card image={Alabama1} title={"Huntsville Space Center"} description={"Centro de ciência espacial que abriga o famoso foguete Saturn V, ícone da exploração espacial americana."} />
                </div>
            </div>

            <div className="state">
                <div className="content">
                    <h1>Alaska</h1>
                    <p>O Alasca, o maior estado dos Estados Unidos em área, é conhecido por suas paisagens intocadas, vida selvagem abundante e fenômenos naturais únicos, como a aurora boreal. Uma terra de aventuras e beleza extrema, atrai visitantes de todo o mundo para explorar suas geleiras, montanhas e parques nacionais.</p>
                </div>

                <div className="cards">
                    <Card image={Alaska1} title={"Denali National Park"} description={"Lar do Monte Denali, o pico mais alto da América do Norte, oferece vistas espetaculares e vida selvagem diversificada."} />
                    <Card image={Alabama3} title={"Aurora Boreal"} description={"Fenômeno natural fascinante que ilumina os céus do Alasca com cores vibrantes, especialmente visível no inverno."} />
                    <Card image={Alabama3} title={"Glacier Bay National Park"} description={"Parque repleto de geleiras imponentes, fiordes e oportunidades para observação de baleias."} />
                    <Card image={Alabama3} title={"Inside Passage"} description={"Uma rota costeira famosa por suas ilhas, águas calmas e vistas incríveis, ideal para cruzeiros e aventuras marítimas."} />
                    <Card image={Alabama3} title={"Kenai Fjords National Park"} description={"Uma maravilha natural com geleiras deslumbrantes e uma rica biodiversidade marinha, incluindo focas e aves."} />
                </div>
            </div>
        </main>
    )
}