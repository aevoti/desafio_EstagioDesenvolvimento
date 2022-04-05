/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import Loading from '../../public/loading/loading.json'


export default function () {
    return (
        <>
            <Lottie
                options={{ animationData: Loading }}
                height={700}
                width={700}
                loop={true}
            />
        </>
    )
}

export function LoadingPersonalizado ({caminho ,altura,largura}) {
    return (
        <div>
            <Lottie
                options={{ animationData: caminho }}
                height={altura}
                width={largura}
                loop={true}
            />
        </div>
    )
}