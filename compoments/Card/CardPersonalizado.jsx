/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import { usePalette } from 'react-palette'
import styled from 'styled-components';

import { Card } from "primereact/card";
import { Button } from 'primereact/button';


export function CardPersonalizado({ nomePokemon,
    poder, imagem, URLIMG, abreModal,
    id, values, forca, peso, altura, experience }) {

    // LIB PARA PEGAR A IMAGEM E COLOCAR A COR PREDOMINANTE
    const { data, loading, error } = usePalette(URLIMG)

    // STYLED COMPONENTS PARA COLOCAR A COR DA IMAGEM USADA ACIMA
    const StyleCard = styled.div`
        #card:hover{
        transform: scale(1.03);
        transition: 0.3s;
        -webkit-box-shadow: 1px 1px 28px 1px ${data.vibrant}; 
        box-shadow: 1px 1px 28px 1px ${data.vibrant};
        }
        .habilitadas{
            margin-top: 0.5rem;
        }
        .habilitadas span{
            border-radius: 100rem;
            display: table;
            color: #fff;
            background-color: ${data.muted};
            padding: 0.3rem 0.7rem;
            text-align: center;
            margin-bottom: 0.5rem;
            text-transform: capitalize;
        }
        .p-card-title{
            font-size: xx-large;
            text-transform: capitalize;
        }
    `
    const DadosPokemParaModal = () => {
        abreModal()
        values({ nomePokemon, poder, URLIMG, forca, peso, altura, experience, Cor: data.lightMuted, id })
    }

    return (
        <>
            <div style={{ marginTop: '50px', marginLeft: '4rem' }} >
                <a onClick={() => DadosPokemParaModal()} >
                    {/* <a onClick={() => console.log(nomePokemon)}> */}
                    <StyleCard>
                        <Card className='col-12 md:col-6 lg:col-3' id="card"
                            title={`${nomePokemon}`}
                            // subTitle={`${poder}`.replace(/\,/g, "\r\n")}
                            style={{ backgroundColor: `${data.lightMuted}`, margin: '5px' }}
                        >
                            {/* <p>{`${poder[0]}`.replace(/\,/g, '\n\r<br/>')}</p>
                <p>{`${poder[1]}`.replace(/\,/g, '\n\r<br/>')}</p> */}
                            <div className='habilitadas'><span>{poder[0]}</span></div>
                            <div className='habilitadas'><span>{poder[1]}</span></div>


                            <div className='img-Pokemon'>
                                <img alt="Card"
                                    src={`${imagem}`}
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className='pokeBall'>
                                <img id="imagemPokeball" alt="foto-Pokemon" src="/assests/pokeboll.png"
                                    width={220} />
                            </div>
                        </Card>
                    </StyleCard>
                </a>
            </div>


        </>
    )
}