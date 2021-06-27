import BigH1 from './components/BigH1';
import CourseSection from './components/CourseSection';
import Header from './components/Header';
import NavBar from './components/NavBar';

import PrinterImage from './assets/3dPrint.jpg';
import portfolioWebImage from './assets/portfolioWeb.jpg';
import robotsImage from './assets/robots.jpg';
import armRoboticImage from './assets/armRobotic.jpg';
import pianoRobotImage from './assets/pianoRobot.jpg';
import youtuberImage from './assets/youtuber.jpg';
import agrotechImage from './assets/agrotech.jpg';
import virtualRealityImage from './assets/virtualReality.jpg';
import computerVisionImage from './assets/computerVision.jpg';

import './styles/global.css';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <BigH1 />
      <div className="my-5 pt-5">
        <h1 id="courses" className="my-5 text-center fs-1" style={{ color: "#ee0979" }}>ATIVIDADES</h1>
        <CourseSection
          firstInOrderLayoutClass={'order-lg-2'}
          secondInOrderLayoutClass={'order-lg-1'}
          title={"Impressão 3D"}
          description={"Saiba como funciona uma impressora 3D do tipo FDM e qual a importância da tecnologia de impressão 3D para o futuro."}
          projectImage={PrinterImage}
          courseLink={"#!"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-1'}
          secondInOrderLayoutClass={'order-lg-2'}
          title={"Robô de controle remoto utilizando Arduino"}
          description={"Aprenda robótica e desenvolva pequenos projetos para seu dia ­a­ dia utilizando Arduino e sensores."}
          projectImage={robotsImage}
          courseLink={"#!"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-2'}
          secondInOrderLayoutClass={'order-lg-1'}
          title={"Próteses e braços robóticos"}
          description={"Com impressoras 3D e uma eletrônica de baixo custo criaremos protótipos de próteses para pessoas. Assista a aula e saiba como!"}
          projectImage={armRoboticImage}
          courseLink={"!#"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-1'}
          secondInOrderLayoutClass={'order-lg-2'}
          title={"Visão Geral de IA e suas diversas aplicações no nosso cotidiano"}
          description={"A Inteligência Artificial já é parte do nosso dia a dia e nem percebemos. Será que você está usando algum tipo de inteligência artificial?"}
          projectImage={pianoRobotImage}
          courseLink={"!#"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-2'}
          secondInOrderLayoutClass={'order-lg-1'}
          title={"Como filmar/editar/postar seu primeiro vídeo no Youtube (a custo zero!)"}
          description={"Aprenda como como filmar, editar e postar o vídeo final no Youtube. Utilizaremos softwares gratuitos e multiplatarforma!"}
          projectImage={youtuberImage}
          courseLink={"!#"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-1'}
          secondInOrderLayoutClass={'order-lg-2'}
          title={"Oficina de Visão Computacional"}
          description={"Técnicas convolucionais! Saiba como essas técnicas ajudam robôs a reconhecerem objetos em imagens fotográficas digitais."}
          projectImage={computerVisionImage}
          courseLink={"!#"}
          hasLink={false}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-2'}
          secondInOrderLayoutClass={'order-lg-1'}
          title={"Minha primeira página web"}
          author={"Leandro Cruvinel Lemes"}
          description={"Conheça ferramentas, linguagens e conceitos de programação web na prática criando seu primeiro site."}
          projectImage={portfolioWebImage}
          courseLink={"https://youtu.be/4rcuAZQzjzM"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-1'}
          secondInOrderLayoutClass={'order-lg-2'}
          title={"Agricultura 4.0"}
          description={"Equipamentos elétricos e eletrônicos já trazem benefícios para a Agricultura 4.0 utilizando drones, Vant e GPS. Clique no link para saber mais!"}
          projectImage={agrotechImage}
          courseLink={"#!"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-2'}
          secondInOrderLayoutClass={'order-lg-1'}
          title={'Caixa de Areia em Realidade Aumentada ­ "Caixa Topográfica Interativa"'}
          description={"Modelos topográficos em superfícies e em tempo real.  Mapas de cores em elevação com linhas de contorno topográficas e água simulada. Só clicar no link abaixo!"}
          projectImage={virtualRealityImage}
          courseLink={"https://www.youtube.com/watch?v=pf-TVjGNlfE"}
        />
      </div>
    </>
  );
}

export default App;
