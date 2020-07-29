import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          'De 2016 pra cá, o consumo de trap no Spotify cresceu em média 61% ao ano. Nesse último ano, só os plays da Recayd Mob subiram quase 1000%. Todo mês, mais de 1 milhão de fãs ouve o som de artistas como Matuê, Raffa Moreira, Ebony, FBC e Sidoka. E por aí vai. Tem dúvida se o trap está bombando?'
        }
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer />
    </div>
  );
}

export default Home;
