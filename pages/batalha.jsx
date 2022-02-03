/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';

import MyHead from '../compoments/MyHead/MyHead';
import ConexaoApi from '../Services/api';
import { CardPersonalizado } from '../compoments/Card/CardPersonalizado';
import Loading, { LoadingPersonalizado } from '../compoments/Loading/Loading';
import { CardInformacao } from './../compoments/CardPokemon/CadInformacao';
import { ModalPersonalizado } from './../compoments/ModalPersonalizado/ModalPersonalizado';

import confetti from '../public/assests/confetti.json'
import fighting from '../public/assests/fighting.json'
import { CardVencedor } from './../compoments/CardPokemon/CardVencedor';


export default function Batalha({ API, jSONPersonalizado }) {

    const [isPriemiro, setIsPrimeiro] = useState(false)
    const [isSegundo, setIsSegundo] = useState(false)

    const [IsLoadingPersonalizado, setIsLoadingPersonalizado] = useState(false)
    const [IsBatalharButon, setIsBatalharButon] = useState(true)
    
    const [DadosParaOPrimeiroSelect, setDadosParaOPrimeiroSelect] = useState(null);
    const [ArrayDeOptionsPrimeiro, setArrayDeOptionsPrimeiro] = useState(null)

    const [DadosParaOSegundoSelect, setDadosParaOSegundoSelect] = useState(null);
    const [ArrayDeOptionsSegundo, setArrayDeOptionsSegundo] = useState(null)

    useEffect(async () => {
        const data = await jSONPersonalizado;
        setArrayDeOptionsPrimeiro(data)
        setArrayDeOptionsSegundo(data)
    }, [])

    const DadosParaOPrimeiroSelectTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src={`${option.imgSVG}`}
                        onError={(e) => e.target.src = ''}
                        className={`flag flag-${option.name.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return (
            <span>
                {setIsBatalharButon(true)}
                {props.placeholder}
            </span>
        );
    }

    const PrimeiroOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src={`${option.imgSVG}`}
                    onError={(e) => e.target.src = ''}
                    className={`flag flag-${option.name.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const OnChangePrimeiro = (e) => { 
        setDadosParaOPrimeiroSelect(e.value);
        if (DadosParaOSegundoSelect != null) {
            setIsBatalharButon(false)
            setIsPrimeiro(false)
            setIsSegundo(false)
            setIsLoadingPersonalizado(false)
        };
    }

    const OnChangeSegundo = (e) => {
        setDadosParaOSegundoSelect(e.value);
        if (DadosParaOPrimeiroSelect != null) {
            setIsBatalharButon(false);
            setIsPrimeiro(false)
            setIsSegundo(false)
            setIsLoadingPersonalizado(false)
        }
    }

    const DadosParaOSegundoSelectTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src={`${option.imgSVG}`}
                        onError={(e) => e.target.src = ''}
                        className={`flag flag-${option.name.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return (           
            <span>
                {setIsBatalharButon(true)}
                {props.placeholder}
            </span>
        );
    }

    const SegundoOptionTemplate = (option) => {
        return (
            <div className="country-item">
                <img alt={option.name} src={`${option.imgSVG}`}
                    onError={(e) => e.target.src = ''}
                    className={`flag flag-${option.name.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    // FUNÇÃO QUE REALIZA A SOMA DE TODAS AS HABILIDADES E MONSTRA A COM MAIOR VALOR
    // CLARO AQUI DA PRA OTIMIZAR E MUITO MAIS FOI APENAS PARA APLICAÇÃO RAPIDA E LOGICA EXTREMA SIMPLES    
    function RealizaBatalha() {
        const pegaValorHabilidadePrimeiro = [DadosParaOPrimeiroSelect].map(ev => ev)
        const primeiro = pegaValorHabilidadePrimeiro[0].forca.reduce((total, valor) => total + valor.valor, 0);
        
        const pegaValorHabilidadeSegundo = [DadosParaOSegundoSelect].map(ev => ev)
        const segundo = pegaValorHabilidadeSegundo[0].forca.reduce((total, valor) => total + valor.valor, 0);

        if (primeiro > segundo) {
            setIsPrimeiro(true)
        } else {
            setIsSegundo(true)
        }

        setIsLoadingPersonalizado(true)
    }

    return (
        <div style={{ display: 'grid', placeItems: 'center' }}>
            <MyHead title={"Batalha"} />

            <Menubar
                end={
                <img alt='Nome'
                    src={'https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-2.png'}
                        width={100}
                    />}
                start={<Link href={'/'} prefetch><Button label="Tela Principal" icon="pi pi-chevron-left" /></Link>}
            />

            <Button className="p-button-lg"
                label="Batalhar" icon="pi pi-check"
                onClick={() => RealizaBatalha()}
                disabled={IsBatalharButon} />

            {IsLoadingPersonalizado ?
                <div style={{position:'absolute'}}>
                    <LoadingPersonalizado
                        caminho={confetti} altura={600} largura={900}
                    />
                </div> : null}

            <div className="grid" style={{ marginTop:'20px'}} >

                <di className="col"  >
                    <p style={{ color: '#fff' }}>Escolha o Primeiro Pokémon</p>
                    <Dropdown value={DadosParaOPrimeiroSelect} options={ArrayDeOptionsPrimeiro} onChange={OnChangePrimeiro}
                        filter showClear filterBy="name" filterPlaceholder='Busca Por Nome'
                        placeholder="Selecione o Pokemon"
                        optionLabel="name"
                        valueTemplate={DadosParaOPrimeiroSelectTemplate} itemTemplate={PrimeiroOptionTemplate}
                        style={{ width: "20rem" }}
                    />
                </di>

                <div className="col" style={{ marginTop: '30px' }}>
                    <div ><LoadingPersonalizado caminho={fighting} altura={50} /></div>
                </div>

                <div className="col col" >
                    <p style={{ color: '#fff' }}>Escolha o Segundo Pokémon</p>
                    <Dropdown value={DadosParaOSegundoSelect} options={ArrayDeOptionsSegundo} onChange={OnChangeSegundo}
                        filter showClear filterBy="name" filterPlaceholder='Busca Por Nome'
                        placeholder="Selecione o Pokemon"
                        optionLabel="name"
                        valueTemplate={DadosParaOSegundoSelectTemplate} itemTemplate={SegundoOptionTemplate}
                        style={{ width: "20rem" }}
                    />
                </div>
            </div>
            
            <div>

                {
                    isPriemiro ? <CardVencedor
                        NomePokemon={DadosParaOPrimeiroSelect?.name}
                        imgPokemon={DadosParaOPrimeiroSelect?.imgSVG}
                        poder={DadosParaOPrimeiroSelect?.habilidades}
                        forca={DadosParaOPrimeiroSelect?.forca}
                        peso={DadosParaOPrimeiroSelect?.peso}
                        altura={DadosParaOPrimeiroSelect?.altura}
                        experience={DadosParaOPrimeiroSelect?.experience}
                        Cor={DadosParaOPrimeiroSelect?.Cor}
                        id={DadosParaOPrimeiroSelect?.id}
                    /> : null
                }
                <div >
                    {
                        isSegundo ? <CardVencedor
                            NomePokemon={DadosParaOSegundoSelect?.name}
                            imgPokemon={DadosParaOSegundoSelect?.imgSVG}
                            poder={DadosParaOSegundoSelect?.habilidades}
                            forca={DadosParaOSegundoSelect?.forca}
                            peso={DadosParaOSegundoSelect?.peso}
                            altura={DadosParaOSegundoSelect?.altura}
                            experience={DadosParaOSegundoSelect?.experience}
                            Cor={DadosParaOSegundoSelect?.Cor}
                            id={DadosParaOSegundoSelect?.id}
                        /> : null
                    }
                </div>
            </div>

        </div>
    );
}


export async function getStaticProps() {
  // A BUSCA DE DADOS E O TRATAMENTO DE DADOS E FEITO E FICA EM CACHE APOS FAZER O BIULD DA PAGINA
  // ESSA FORMA DE MONTAR UM NOVO JSON NÃO E PERFORMATICA POREM ACREDITO QUE CUMPRA O OBJETIVO DA TASK
  // DESSA FORMA IMPLEMENTAR A BATALHA FICA BEM SIMPLES POIS TENHO O CONTROLE DA FORMA QUE O JSON E MONTADO
  
  const ServiceApi = new ConexaoApi(process.env.BASE_URL_ENV_DEV);
  const Dados = [];

  //BUSCA OS DADOS DO PRIMEIRO JSON PARA BUSCA OS DADOS DE CADA POKEMON E MONTAR UM NOVO JSON
  const BuscaDados = async () => {
      try {
          const { results } = await ServiceApi.BuscaDados(`/?limit=10060`);

        for (let index = 0; index < results.length; index++) {
          const element = results[index];
          const uri = await BuscaDadosPorPokemon(element?.url)
          Dados.push({
            id: uuidv4(),
            name: uri.name,
            imgSVG: uri?.sprites?.other?.dream_world?.front_default,
            habilidades: uri.abilities.map((e) => e.ability.name),
            Specie: uri.types.map(e => e.type.name),
            forca: uri.stats.map(e => { return { name: e.stat.name, valor:e.base_stat}}),
            peso: (uri.weight / 10), //convertendo valores
            altura: (uri.height * 10), //convertendo valores
            experience: uri.base_experience
          })
        }
        
    } catch (error) {
      console.log("ERRO AO BUSCARDADOS", error.message)
    }
  }

  console.log("==================== getStaticProps foi iniciado /Batalha ======================");

  //RECEBE A URL DE CADA POKEMON E RETORNA O JSON DE CADA UM
  //SEI QUE COM ISSO E FEITO MUITAS MUITAS REQUISIÇOES MAIS POR ISSO COLOQUEI NO GETSTATIC
  //TODAS ESSAS REQUISIÇOES E FEITA DO LADO DO SERVIDOR E NÃO DO CLIENTE
  const BuscaDadosPorPokemon = async (URL) => {
    try {
      const data = await ServiceApi.BuscaImg(URL)
      return data
    } catch (error) {
      console.log("HOUVE ALGUM ERRO AO BUSCAR IMAGEM: ", error.message);
    }
  }

  await BuscaDados();

  return {
    props: {
      Data: process.env.BASE_URL_ENV_DEV,
      jSONPersonalizado: Dados
    }
  }

}