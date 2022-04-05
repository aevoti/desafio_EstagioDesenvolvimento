/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";

export const CardVencedor = ({ NomePokemon, imgPokemon,
    poder, forca, peso, altura, experience, Cor, id
}) => {

    let soma = forca?.reduce((total, valor) => total + valor.valor, 0);
    // let soma = 0

    return (
        <div className="App">
            <AnimatedCard
                config={{
                    rotation: 15, // this value for the divide (window.innerWidth / 2 - e.pageX) / rotation && (window.innerWidth / 2 - e.pageY) / rotation
                    transition: {
                        duration: 0.5,
                        timingMode: "ease"
                    },
                    transform: {
                        figureIcon: {
                            rotation: 20,
                            translateZ: 160
                        },
                        titleTranslateZ: 140,
                        bodyTextTranslateZ: 100,
                        buttonTranslateZ: 80
                    }
                }}
                style={{
                    width: 'calc(100vh - 100px)' //container style (you can use className as well)
                }}
            >

                <div className="card">
                    <div className="figure">
                        <div className="figure_bg" />
                        <img src={`${imgPokemon}`}
                            alt={`${NomePokemon}`}
                            width={100} height={100}
                        />
                    </div>
                    <div className="content">
                        <h2 className="title">{NomePokemon?.toUpperCase()}</h2>
                        <p className='HabilidadesPokemon' >
                            Peso: {peso}kg -
                            Altura: {altura}cm -
                            Habilidades: {poder[0]}, {poder[1]} -
                            Experience: {experience}
                        </p>
                        <div >
                            {
                                forca.map(e => (
                                    <>
                                        <p className={"body"} key={id}>
                                            {e?.name.toUpperCase()}:{e?.valor}<ProgressBar value={e?.valor} color={`${Cor}`} />
                                        </p>
                                    </>
                                ))
                            }
                            <p>TOTAL: {soma}.</p>
                        </div>
                    </div>
                </div>

            </AnimatedCard>

        </div>
    );
}