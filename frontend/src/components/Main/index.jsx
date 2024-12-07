import React, { useState, useEffect, useRef } from "react";

import AOS from "aos"
import 'aos/dist/aos.css';

import states from "./statesData";
import Card from "../Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default ({ setCurrentState }) => {
    const [visibleStates, setVisibleStates] = useState(5); // Exibe 5 estados inicialmente
    const refs = useRef([]);

    const observer = useRef(null);

    useEffect(() => {
        // Configurar o IntersectionObserver fora do useEffect
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const visibleState = entry.target.getAttribute("data-state");
                        setCurrentState(visibleState);
                    }
                });
            },
            { threshold: 0.5 }
        );

        return () => {
            // Limpeza do observer
            if (observer.current) {
                refs.current.forEach((ref) => {
                    if (ref) observer.current.unobserve(ref);
                });
            }
        };
    }, []);

    useEffect(() => {
        // Sempre que a lista de estados visíveis mudar, adicionamos a observação.
        refs.current.forEach((ref) => {
            if (ref) observer.current.observe(ref);
        });
    }, [visibleStates]);

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const loadMoreStates = () => {
        setVisibleStates((prevVisibleStates) => prevVisibleStates + 5); // Carrega 5 estados adicionais
    };

    return (
        <main>
            {states.slice(0, visibleStates).map((state, index) => (
                <div
                    key={state.name}
                    className="state"
                    ref={(el) => (refs.current[index] = el)}
                    data-state={state.name}
                    data-aos="fade-up"
                >
                    <div className="content">
                        <h1>{state.name}</h1>
                        <p>{state.description}</p>
                    </div>
                    <div className="cards">
                        {state.cards.map((card, idx) => (
                            <Card
                                key={idx}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </div>
                </div>
            ))}
            {visibleStates < states.length && (
                <button onClick={loadMoreStates} className="load-more">
                    
                    <FontAwesomeIcon icon={faArrowDown} />
                </button>
            )}
        </main>
    );
};