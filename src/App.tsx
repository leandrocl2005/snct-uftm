import BigH1 from './components/BigH1';
import CourseSection from './components/CourseSection';
import Header from './components/Header';
import NavBar from './components/NavBar';

import PrinterImage from './assets/3dPrint.jpg';
import portfolioWebImage from './assets/portfolioWeb.jpg';
import robotsImage from './assets/robots.jpg';
import armRoboticImage from './assets/armRobotic.jpg';
import pianoRobotImage from './assets/pianoRobot.jpg';
import youtuberImage from './assets/movieAction.jpg';
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
          author={"Prof. Dr. Marcos Massao Shimano"}
          authorLink={"http://lattes.cnpq.br/4009855095568169"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-1'}
          secondInOrderLayoutClass={'order-lg-2'}
          title={"Robô de controle remoto utilizando Arduino"}
          description={"Aprenda robótica e desenvolva pequenos projetos para seu dia ­a­ dia utilizando Arduino e sensores."}
          projectImage={robotsImage}
          author={"Me. Willian Baunier de Melo"}
          authorLink={"http://lattes.cnpq.br/0991470314090937"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-2'}
          secondInOrderLayoutClass={'order-lg-1'}
          title={"Inteligência Artificial aplicada à robótica"}
          description={"Como simular e projetar robôs com Inteligência artificial. Criaremos desde braços robóticos até robôs autônomos guiados por IA. Assista a aula e saiba como!"}
          projectImage={armRoboticImage}
          courseLink={"https://youtu.be/CAtVJJ8XG6M"}
          author={"Prof. Dr. Vinicius Abrão da Silva Marques"}
          authorLink={'http://lattes.cnpq.br/7677311541726478'}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-1'}
          secondInOrderLayoutClass={'order-lg-2'}
          title={"Visão Geral de IA e suas diversas aplicações no nosso cotidiano"}
          description={"A Inteligência Artificial já é parte do nosso dia a dia e nem percebemos. Será que você está usando algum tipo de inteligência artificial?"}
          projectImage={pianoRobotImage}
          author={"Profa. Dr. Júlia Bertelli Duarte"}
          authorLink={"http://lattes.cnpq.br/4241344268170383"}
          courseLink={"https://youtu.be/qu1h8fvHJS8"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-2'}
          secondInOrderLayoutClass={'order-lg-1'}
          title={"Como filmar, editar e postar seu primeiro vídeo no Youtube (a custo zero!)"}
          description={"Aprenda como como filmar, editar e postar o vídeo final no Youtube. Utilizaremos softwares gratuitos e multiplatarforma!"}
          projectImage={youtuberImage}
          author={"Prof. Dr. Heron Martins Felix"}
          authorLink={"http://lattes.cnpq.br/0146795903898489"}
          courseLink={"https://youtu.be/55l3n2POaI0"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-1'}
          secondInOrderLayoutClass={'order-lg-2'}
          title={"Oficina de Visão Computacional"}
          description={"Técnicas convolucionais! Saiba como essas técnicas ajudam robôs a reconhecerem objetos em imagens fotográficas digitais."}
          projectImage={computerVisionImage}
          hasLink={false}
          author={"Prof. Dr. Paulo Balduino Flabes Neto"}
          authorLink={"http://lattes.cnpq.br/6496119903436467"}
        />
        <CourseSection
          firstInOrderLayoutClass={'order-lg-2'}
          secondInOrderLayoutClass={'order-lg-1'}
          title={"Minha primeira página web"}
          author={"Prof. Dr. Leandro Cruvinel Lemes"}
          authorLink={"https://www.linkedin.com/in/leandrolemes/"}
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
        >
          <p>
            <a
              href="http://lattes.cnpq.br/4031929880343831"
              style={{ color: '#6c757d', paddingBottom: '2rem' }}
              target="_blank"
              rel="noreferrer"
            ><span>Prof. Esp. Gill Mayeron Duarte</span></a>,
            <a
              href="http://lattes.cnpq.br/2743455979085824"
              style={{ color: '#6c757d', paddingBottom: '2rem' }}
              target="_blank"
              rel="noreferrer"

            ><span style={{ marginLeft: '4px' }}>Prof. Msc. Matheus Oliveira Alves</span></a>
          </p>
        </CourseSection>
        <CourseSection
          firstInOrderLayoutClass={'order-lg-2'}
          secondInOrderLayoutClass={'order-lg-1'}
          title={'Caixa de Areia em Realidade Aumentada ­ "Caixa Topográfica Interativa"'}
          description={"Modelos topográficos em superfícies e em tempo real.  Mapas de cores em elevação com linhas de contorno topográficas e água simulada. Só clicar no link abaixo!"}
          projectImage={virtualRealityImage}
          author={"Profa. Dra. Paula Aguiar Silva"}
          authorLink={"http://lattes.cnpq.br/7032218407447122"}
        />
      </div>
    </>
  );
}

export default App;
