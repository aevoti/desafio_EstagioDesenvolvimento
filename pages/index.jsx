/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator'; 

import MyHead from '../compoments/MyHead/MyHead';
import ConexaoApi from '../Services/api';
import { CardPersonalizado } from '../compoments/Card/CardPersonalizado';
import Loading from '../compoments/Loading/Loading';
import { CardInformacao } from './../compoments/CardPokemon/CadInformacao';
import { ModalPersonalizado } from './../compoments/ModalPersonalizado/ModalPersonalizado';



export default function Home({ API, jSONPersonalizado }) {
  // ESTADO PARA COLCOAR CADA OBJ DE CADA CARD COM OS DADOS DE CADA POKEMON POR CARD
  const [ValuesParaModal, setValuesParaModal] = useState(null)
  // TRATA OS LOADING 
  const [Carregando, setCarregando] = useState(true)
  // ESTADO PARA REALIZAR A BUSCAR
  const [InputNomePokemon, setInputNomePokemon] = useState('')
  // ARRAY PARA REENDERIZAR CADA CARD 
  const [DadosPokemon, setDadosPokemon] = useState([]);

  //  TRATA A PAGINAÇÃO
  const [ItensPorPagina, setItensPorPagina] = useState(10);
  const [PaginaAtual, setPaginaAtual] = useState(0);

  const [IsModal, setIsModal] = useState(false);

  const PorPagina = 10;
  const PaginaVisivel = PaginaAtual * ItensPorPagina;
  const ItensAtuais = DadosPokemon.slice(PaginaVisivel, PaginaVisivel + ItensPorPagina)
  //  TRATA A PAGINAÇÃO

  const onPageChange = async (e) => {
    setPaginaAtual(e.page);
    // setItensPorPagina(e.first);
  }

  // COLOCA OS VALORES RETORNADOS DA API EM UM ESTADO PARA COLOCAR POR TODA A PAGINA NO MOMENTO QUE A PAGINA E MONTADA
  useEffect(async () => {
    const data = await jSONPersonalizado;
    setDadosPokemon(data)
    setCarregando(false)
  }, [])

  // REALIZA O FILTRO
  useEffect(async () => {
    const valorDoInput = InputNomePokemon.toLowerCase()
    const data = await jSONPersonalizado;

    if (valorDoInput === '') {
      setDadosPokemon(data)
      return
    }
    setDadosPokemon(data.filter(ev => ev.name.toLowerCase().includes(valorDoInput)))
  }, [InputNomePokemon])

  const abreModal = () => {
    setIsModal(true)
  }

  const fechaModal = () => {
    setIsModal(false)
  }
 
  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <MyHead title={"Pokemon"} />

      <Menubar
        end={<InputText value={InputNomePokemon} onChange={(e) => setInputNomePokemon(e.target.value)} placeholder="Busca Pokemon" type="text" />}
        start={<Link href={'/batalha'} prefetch ><Button className="p-button-danger" label="Batalha Pokemon" icon="pi pi-th-large" /></Link>}
      />

      <Paginator first={PaginaAtual}
        rows={ItensPorPagina} //Exibixão de quantas páginas
        totalRecords={DadosPokemon.length}
        onPageChange={onPageChange}
        style={{marginTop:'50px'}}
      />
      
      
      <div className='grid'>
        {Carregando ? <Loading /> : (
          ItensAtuais.map((e) => (
            <CardPersonalizado
              key={e?.id}
              nomePokemon={e?.name}
              poder={e?.habilidades}
              imagem={e?.imgSVG}
              URLIMG={e?.imgSVG}
              abreModal={abreModal}
              altura={e?.altura}
              experience={e?.experience}
              forca={e?.forca}
              id={e?.id}
              peso={e?.peso}
              values={e => setValuesParaModal(e)}
            />
          ))
        )}
      </div>


      <ModalPersonalizado
        abreModal={IsModal}
        fechaModal={fechaModal}
        buttonModal={() => setIsModal(false)}
        itens={<CardInformacao
          NomePokemon={ValuesParaModal?.nomePokemon}
          imgPokemon={ValuesParaModal?.URLIMG}
          poder={ValuesParaModal?.poder}
          forca={ValuesParaModal?.forca}
          peso={ValuesParaModal?.peso}
          altura={ValuesParaModal?.altura}
          experience={ValuesParaModal?.experience}
          Cor={ValuesParaModal?.Cor}
          id={ValuesParaModal?.id}
        />}
      >    
      </ModalPersonalizado>
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

  console.log("==================== getStaticProps foi iniciado ======================");

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