import React from 'react';
import { useParams } from 'react-router-dom';
import artigos from '../../data/artigos';
import { useState } from 'react';
import { useEffect } from 'react';
import ultimoPostImg from '../../images/ultimos-posts.png';
import CardPublicidadeBox from '../../components/CardPublicidadeBox/CardPublicidadeBox';
import UltimosPosts from '../../components/UltimosPosts/UltimosPosts';
import publicidade from '../../images/card-publicidade-germinne.png';
import PlantaPrincipal from '../../images/PlantaPrincipal.jpg';
import artigoVantagensHorta from '../../images/artigoVantagensHorta.jpg';
import artigoUtilidadesHortela from '../../images/artigoUtilidadesHortela.jpg';
import artigoUtilidadesGerminneBox from '../../images/artigoUtilidadesGerminneBox.jpg';
import artigoUtilidadesMaoSalada from '../../images/artigoUtilidadesMaoSalada.jpg';
import artigoBeneficiosHorta from '../../images/artigoBeneficiosHorta.jpg';
import artigoTelhadoVerde from '../../images/artigoTelhadoVerde.jpg';
import artigoTelhadoVerde2 from '../../images/artigoTelhadoVerde2.jpg';
import Cidade from '../../images/Cidade.svg';
import Casal from '../../images/CasalCuidandoPlanta.svg';
import Plantando from '../../images/Plantando.jpg';
import PlantaFlorescendo from '../../images/PlantaFlorescendo.jpg';
import Crianca from '../../images/CriancaRegando.png';
import Cultivando from '../../images/cultivandoplantaBlog.jpg';
import Dicas from '../../images/dicaBrota.jpg';
import Terra from '../../images/TerranaGarrafa.jpg';
import Salada from '../../images/salada.jpg';
import Pote from '../../images/Pote-Salada.jpg';
import PlantarCoentro from '../../images/plantarCoentro.jpg';
import Residencia from '../../images/Residencia.jpg';
import PlantasnaMesa from '../../images/plantasnamesa.jpg';
import './artigo.css';

function Artigo() {
  const [artigo, setArtigo] = useState([]);
  const { id } = useParams();

  const getArtigo = () => {
    const artigoFiltered = artigos.filter(({ artigoId }) => artigoId == id);

    console.log(artigoFiltered);
    console.log(artigoFiltered[0].paragrafos.length);

    !artigo.length && setArtigo(artigoFiltered);
  };

  useEffect(() => {
    getArtigo();
  }, []);

  return (
    <div className="main-container-limitador">
      <section className="pagina-artigo">
        <div>
          <span className="categoria-artigo">Agricultura Urbana</span>
          <h2>{artigo.length && artigo[0].titulo}</h2>

          <div className="artigo-creditos">
            <p>11 de setembro de 2023</p>
            <p>Fonte: artigo retirado da BeGreen</p>
          </div>
        </div>

        <div className="box-artigo-aside">


          {/* artigo-vantagens-agricultura-urbana */}

          {/*           

          <article className="artigo-blog">
            <figure>
              <img
                src={artigo.length && artigo[0].imagens[0]}
                alt="Imagem de um saco de terra junto com uma pá"
              />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <p>{artigo.length && artigo[0].paragrafos[0]}</p>

            <p>{artigo.length && artigo[0].paragrafos[1]}</p>

            <p>{artigo.length && artigo[0].paragrafos[2]}</p>

            <p>{artigo.length && artigo[0].paragrafos[3]}</p>

            <figure>
              <img
                src={artigo.length && artigo[0].imagens[1]}
                alt="Imagem de duas mãos plantando uma arvore"
              />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <p>{artigo.length && artigo[0].paragrafos[4]}</p>

            <p>{artigo.length && artigo[0].paragrafos[5]}</p>
          </article> */}


          {/* artigo-hortelã */}
          
          {/* <article className="artigo-blog">
          <figure>
              <img
                src={PlantaPrincipal} alt="Imagem de duas mãos plantando uma arvore"
              />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <div>
              <p>Agricultura e urbana, duas palavras que poderiam não fazer sentido em uma mesma frase. Mas hoje descrevem um movimento cada vez mais comum. Afinal, o que é agricultura urbana?</p>

              <p>Não é novidade para ninguém que, com o desenvolvimento industrial principalmente, houve um movimento em massa das pessoas de áreas rurais para urbanas, promovendo o surgimento das grandes cidades.</p>

              <p>Com isso, surge o desafio de alimentar toda essa população concentrada em pontos muito específicos. E é aí que surgem diversas iniciativas voltadas a isso, como por exemplo a agricultura urbana.</p>
            </div>

            <div>
              <p><h3>Agricultura urbana: o que é e quais as vantagens</h3></p>

              <p>Podemos pensar que o que realmente diferencia uma agricultura urbana daquela realizada em campos, à céu aberto, é o local onde ela é praticada. Ou seja, se é feita em uma grande cidade é urbana, se é feita no campo, é rural.</p>

              <p>Mas não é só isso! O principal diferenciador entre essas duas modalidades são as interações que a agricultura urbana tem com o ecossistema de uma cidade. Ou seja, a agricultura urbana gera produtos voltados para a cidade.</p>

              <p>Ou melhor, para aquela parte, para aquele bairro ou vizinhança. Estes alimentos são geralmente destinados ao consumo próprio ou à venda em mercados locais da cidade.</p>

              <p>Claro que afirmar que se trata da produção de alimentos dentro de um perímetro urbano (dentro das cidades) ou periurbano (ao redor de cidades), está correto. Mas vale entender que existem inúmeros fatores atrelados: diversidade do cultivo, métodos utilizados, sustentabilidade e políticas relacionadas.</p>

              <p>Se quiser se aprofundar mais, da uma olhada nesse artigo da Embrapa.</p>
            </div>

            <div>
              <p><h3>A história da gricultura urbana</h3></p>

              <p>Desde que existem civilizações no mundo, podemos entender que de certa forma existia essa prática. Porém, foi a partir da década de 1970 que ela foi ganhando relevância no mundo.</p>

              <p>A agricultura urbana vai se moldando de acordo com as mudanças das cidades ao longo do tempo. Ainda mais porque as cidades possuem grandes fluxos de pessoas, dinheiro, mercadoria e informações.</p>

              <p>A FAO (Organização das Nações Unidas para a Agricultura e Alimentação) estima que 800 milhões de pessoas, no mundo, estão envolvidas na agricultura urbana. Movimento que só tende a se expandir, pelo constante crescimento populacional e econômico dos centros urbanos.</p>

              <p>A agricultura nas cidades, muitas das vezes, surge de movimentos sociais. E ocorrem, tendo ou não apoio governamental.</p>

              <p>Essa prática se dá muito baseada nos conhecimentos que os próprios cidadãos possuem, construindo ali, em conjunto, novos aprendizados compartilhados.</p>
            </div>

            <div>
            <p><h3>3 razões para apoiar a agricultura urbana</h3></p>
            </div>

            <figure>
              <img 
                src={artigoVantagensHorta} alt="Imagem de uma horta dentro de uma caixa"
              />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <div>
              <p>É comum pensarmos que para começar a plantar em uma cidade precisamos de um grande espaço e de um grupo gigante, mas não é bem por aí.</p>

              <p>Quando pensamos na produção de alimentos dentro da própria cidade, o que mais a caracteriza é a proximidade entre produção e distribuição/consumo. Muito diferentemente da agricultura rural, sendo que esta possui diversas desvantagens. Vamos ver algumas:</p>
            </div>

            <div>
              <p><h3>1. Custo</h3></p>

              <p>Quando temos que transportar os alimentos do campo até as cidades, onde estão os grandes centros de consumo, temos muito mais custos envolvidos. Como principais, temos o combustível usado no transporte, mão-de-obra e espaço para armazenamento.</p>

              <p>E além de tudo isso, temos a questão do desperdício. Quanto mais manipulação sofrem os alimentos, maior o risco deles estragarem ou se perderem no meio do caminho. E tudo isso é embutido no preço, de certa forma.</p>

              <p>Possuindo uma produção de alimentos dentro da cidade, toda essa logística é mais facilitada e, por causa disso, mais barata.</p>
            </div>

            <div>
              <p><h3>2. Poluição</h3></p>

              <p>Como falamos, com a agricultura rural, há a necessidade de um maior transporte. E já nesse ponto, temos um maior uso de combustíveis e, consequente, poluição do ambiente.</p>

              <p>Além disso, pelo maior desperdício, temos a necessidade de produzir mais, e dessa forma há um uso mais intensivo do solo. Havendo, também, um maior uso de máquinas, que, igualmente, contribuem para a poluição do meio-ambiente.</p>

              <p>Com o intuito de se conservar melhor e por mais tempo os alimentos, a agricultura rural acaba usando agrotóxicos e fertilizantes. Que, por sua vez, podem proporcionar a poluição do solo e da água utilizada.</p>

              <p>Olha só o que diz essa matéria do EcoDebate.</p>
            </div>

            <div>
              <p><h3>3. Processamento</h3></p>

              <p>A partir do momento que precisamos garantir que os alimentos durem por mais tempo, devido a distância entre produção e consumo, entra a necessidade da conservação.</p>

              <p>E, muitas das vezes, essa conservação é feita com o uso de ingredientes e aditivos pela indústria. O que afasta a ideia de consumir um produto fresco e natural.</p>

              <p>Exemplos são: sal, açúcar, gordura, conservantes. Além de um maior custo e geração de resíduos com embalagens desses produtos.</p>
            </div>
            
            <div>
              <p><h3>Agricultura urbana e o verde nas cidades</h3></p>

              <p>Constantemente, as cidades são tidas como lugares excessivamente cinzas, pesados, sendo associadas a concreto e pedras, né? Pois bem, porque não contribuir para mudar isso inserindo plantas na cidade?</p>

              <p>Essa é uma das propostas da agricultura urbana: contribuir para a paisagem das cidades, trazendo o tão saudoso verde. Além disso, essa prática ajuda a regular o clima daquela região onde está inserida, devido à presença de plantas, que deixam o clima mais ameno.</p>

              <p>E, ainda, contribuem para uma maior biodiversidade, tanto em relação aos animais, que são atraídos, e também pelas plantas ali cultivadas.</p>
            </div>

            <div>
              <p><h3>Cidadania e comunidade</h3></p>

              <p>Com a prática da agricultura nas cidades, conseguimos reunir um grupo de pessoas para se dedicar a ela, como vizinhos. Grupo esse, que se não fosse a agricultura urbana, não se relacionaria, muito provavelmente.</p>

              <p>Dessa forma, estamos contribuindo para a melhoria das relações entre as pessoas tão atarefadas das grandes cidades! Criando relações em meio a um mundo que parece ser tão digital e pouco presencial.</p>
            </div>

            <div>
              <p><h3>Como começar?</h3></p>

              <p>Tudo que começa, começa pequeno. Por que não começar cultivando alguns poucos alimentos dentro de casa, ou de um apartamento, na varanda? Dessa forma, você vai pegando gosto e convencendo outras pessoas a te ajudar nessa empreitada.</p>

              <p>E nisso podemos te ajudar, a Brota é uma horta inteligente que te ajuda a produzir seus próprios alimentos dentro de casa. Contando com um solo com a quantidade certa de nutrientes e sistema autoirrigável.</p>
            </div>
          </article> */}


          {/* artigo-beneficios-secretos */}

          {/* <article className="artigo-blog">
            <figure>
                <img
                  src={artigoUtilidadesHortela} alt="Imagem de uma planta de hortelã"
                />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>
            
            <div>
              <p>Vivemos em um mundo que cada vez mais busca uma reconexão com a natureza. E nesse contexto, as hortas despontam como algo comum, nos bairros e nas casas. Mas afinal, para que servem as hortas?</p>

              <p>São diversas as razões pelas quais alguém, uma família, uma vizinhança ou um grupo decidem ter uma horta. Sendo que as funções que a horta exerce podem ir muito além da produção de alimentos, por si só. Veja abaixo:</p>
            </div>

            <div>
              <p><h3>1. Alimentos frescos e práticos</h3></p>

              <p>Umas das mais básicas funções de uma horta é proporcionar alimentos frescos. Ou seja, que foram recém colhidos e em instantes já estão na mesa.</p>

              <p>O que pode ser relacionado com aspectos de maior preservação de sabor ou textura. Já que as características naturais do legume, erva ou vegetal, pouco vão se alterar se você puder colhê-los momentos antes de os consumir!</p>

              <p>Já imaginou poder contar com todos os nutrientes naturais de um vegetal ou de um tempero? Sem que eles se percam devido ao tempo ou a processos empregados? Pois bem! Com uma horta você consegue ter isso!</p>

              <p>Basta colher o seu manjericão minutos antes de colocá-lo na sua macarronada, ou seu hortelã fresquinho para aquele bom drink!</p>

              <p>E além de tudo isso, ter uma horta que te proporcione todo esse frescor, evita idas e vindas constantes de supermercados ou feiras. Assim, ofertando, ao proprietário da horta, praticidade!</p>
            </div>
            
            <figure>
                <img
                  src={artigoUtilidadesGerminneBox} alt="Imagem de uma GerminneBox ao lado de uma bebida"
                />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <div>
              <p><h3>2. Para que servem as hortas? Renda!</h3></p>

              <p>A partir do momento que a horta é dedicada à produção de alimentos, envolvendo uma maior área de plantio, por exemplo, entra o fator renda. Com certeza, a horta pode se tornar uma fonte de renda para uma família ou para um grupo de pessoas.</p>

              <p>Atrelando-se a aspectos positivos da horta, como alimentos recém-colhidos, ou até pela venda de produtos orgânicos, o produtor consegue destaque no mercado, garantindo seu lucro.</p>

              <p>Veja só esse exemplo: “Família cultiva alimentos em horta comunitária para garantir renda mensal”.</p>

              <p>Além de que, cultivando uma horta dentro de casa, você consegue economizar dinheiro, acumulando renda também. Imagina poder contar com uma oferta de alimentos e temperos frescos e orgânicos em casa, sem precisar pensar em ir atrás e comprar esses produtos!</p>

              <p>Parece bom demais, né?</p>
            </div>

            <div>
              <p><h3>3. Saúde e estilo de vida</h3></p>

              <p>Muito se fala atualmente das vantagens de se consumir alimentos naturais e não industrializados. E, com certeza, as hortas são grandes aliadas nessa tendência!</p>

              <p>Além de proporcionar alimentos mais frescos, com suas características naturais preservadas, as hortas, muitas vezes, são orgânicas. Ou seja, não se utilizam de fertilizantes e agrotóxicos industrializados.</p>

              <p>Dessa forma, contribuem imensamente para a saúde dos produtores e, também dos consumidores dos alimentos ali produzidos.</p>
            </div>

            <figure>
                <img
                  src={artigoUtilidadesMaoSalada} alt="Imagem de duas mãos segurando uma salada"
                />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <div>
              <p><h3>4. Contribuição das hortas para a biodiversidade</h3></p>

              <p>Ao ter contato com o plantio de alimentos, ainda mais em uma escala baixa ou média, se entende melhor a sazonalidade destes. Ou seja, que abobrinha, mamão e tomate não dão na mesma época do ano.</p>

              <p>E ainda mais, pode ser que cenoura seja facilmente cultivada em São Paulo e não na Bahia, e, dessa forma, as hortas têm um grande papel de não só entender, mas também respeitar, a biodiversidade de um local.</p>

              <p>Comprando todos os vegetais e temperos no supermercado, temos a falsa impressão de que temos tudo à disposição o ano inteiro e em qualquer lugar, mas, como podemos ver melhor nesse artigo, não é bem assim.</p>

              <p>Promovendo o cultivo das hortas respeitando a sazonalidade e a biodiversidade, conseguimos fazer com que a flora e a fauna, pela interação das plantas com animais, se desenvolva ainda mais!</p>
            </div>

            <div>
              <p><h3>5. Contato com a natureza através das hortas</h3></p>

              <p>Por fim, mas também muito importante, as hortas têm um papel fundamental na reaproximação entre nós, seres humanos, com a natureza.</p>

              <p>Imersos em arranha-céus das grandes cidades, muitas vezes, é difícil ver uma área verde no meio do concreto. Com uma horta, além de possibilitar um melhor visual, conseguimos ter contato, tocar na terra, sujar as mãos, proporcionando realmente uma sensação de conexão!</p>

              <p>Dessa forma, as hortas muitas das vezes se tornam válvulas de escape, um hobby no meio de rotinas tão corridas. As hortas podem se tornar uma verdadeira terapia!</p>

              <p>E um jeito ótimo de começar a ter esse maior contato com a natureza, além de poder contar com temperinhos sempre frescos, é através da Brota, nossa horta inteligente e autônoma.</p>
            </div>
          </article> */}


          {/* artigo-telhado-verde */}

          {/* <article className="artigo-blog">
            <figure>
                <img
                  src={artigoBeneficiosHorta} alt="Imagem de uma horta dentro de casa"
                />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <div>
              <p>Ter sua própria horta pode render para você diversas plantas lindas que irão deixar o ambiente com sua cara ou colheitas deliciosas que vão direto pra sua mesa do jantar.</p>

              <p>Mas você sabia que cuidar de uma horta também pode fazer maravilhas pelo seu bem-estar? Confira com a gente 5 benefícios secretos que uma horta em casa pode trazer.</p>
            </div>

            <div>
              <p><h3>1. Ajuda a economizar</h3></p>

              <p>Manter a sua própria horta é uma prática que ajuda você a gastar menos dinheiro em compras no supermercado, além de ter sempre alimentos fresquinhos no seu dia a dia.</p>

              <p>Olhando para os alimentos orgânicos, produzidos com práticas que respeitam o meio ambiente e livres de agrotóxicos, vemos uma grande variabilidade dos preços em algumas regiões, um estudo feito em Belo Horizonte, por exemplo, mostrou uma diferença de 168% entre os preços dos alimentos orgânicos e comuns.</p>

              <p>Assim, ter uma hortinha em casa faz você manter sua vida mais saudável, sem perder dinheiro.</p>
            </div>

            <div>
              <p><h3>2. Proporciona uma alimentação mais saudável</h3></p>

              <p>Segundo uma divulgação do Programa de Análise de Resíduos de Agrotóxicos de Alimentos, da ANVISA, cerca de um terço dos vegetais mais consumidos no país apresentaram um nível de agrotóxico acima do aceitável.</p>

              <p>Foram levados em conta dois critérios principais: a presença de agrotóxicos acima do nível permitido e a presença de agrotóxicos não autorizados para o tipo de alimento.</p>

              <p>Dentro dos que mais se destacaram negativamente, estão o pimentão, morango, pepino e alface. Com essas informações fica evidente que o cultivo desses alimentos em casa aumenta os níveis de segurança para os produtos que consumimos.</p>

              <p>Além disso, as hortas em casa proporcionam praticidade, entre uma rotina intensa, para uma alimentação melhor. As verduras estarão ainda mais acessíveis para você, já que é só colher o que produziu e cozinhar na mesma hora, temos uma alimentação muito mais saudável e repleta de bons nutrientes e sabor.</p>
            </div>

            <div>
              <p><h3>3. Funciona como terapia para a mente</h3></p>

              <p>Segundo um estudo publicado no Journal of Physiological Anthropology, o cuidado com as plantas, independentemente do tipo ou espécie, pode ajudar a manter uma boa saúde mental.</p>

              <p>O contato com a terra, o carinho e o cuidado que a suas plantas exigem fazem com que os níveis de cortisol, responsável pela sensação de estresse, diminua. Colocando esses pontos na rotina, o estresse e a ansiedade voam para bem longe.</p>
            </div>

            <div>
              <p><h3>4. Reduzem embalagens</h3></p>

              <p>Atualmente, são produzidas 400 milhões de toneladas por ano de plástico no mundo, sendo que 40% é direcionado para o uso em embalagens e que a maioria serão descartadas logo em seu primeiro uso.</p>

              <p>Assim, realizar ações para diminuição delas é uma ótima alternativa de trazer um dia a dia mais sustentável, já que você mesmo colhe suas próprias verduras, frutas e temperos no momento que você vai consumir.</p>
            </div>

            <div>
              <p><h3>5. Trazem frescor ao meio ambiente</h3></p>

              <p>Você sabia que ter uma horta em casa também alivia a temperatura do seu ambiente e traz maior sensação de frescor?</p>

              <p>A água e a terra de cultivo presente nas plantas possuem uma alta capacidade de preservar sua temperatura durante o dia e a noite, fazendo com que o ambiente fique aconchegante independentemente se você mora numa casa de quintal grande ou em um apartamento.</p>

              <p>Além disso, as plantas produzem oxigênio durante sua fotossíntese, deixando o ar do ambiente mais leve, legal né?</p>
            </div>
          </article> */}
=======


          {/* ARTIGO ILHAS TERMICAS  */}

          {/*  
          
          <article className="artigo-blog">
              
              <figure>


                <img src={Cidade} alt="Cidade Quentex "/>

                <figcaption>Fonte: Nome do Autor</figcaption>

              </figure>


              <p>As ilhas de calor urbanas são um fenômeno climático que ocorre nas cidades, onde as temperaturas são mais altas do que nas áreas rurais circundantes. Esse fenômeno é causado por uma série de fatores, incluindo a densidade populacional, a presença de asfalto e concreto, e a falta de vegetação.
  As hortas urbanas são uma forma de reduzir as ilhas térmicas nas cidades. Elas contribuem para a redução das temperaturas urbanas de várias maneiras:</p>
              <p>
                <ul>
                  <li>Redução da absorção de calor: As plantas absorvem o calor da luz solar. Isso ajuda a reduzir a quantidade de calor que é absorvida pelo asfalto e concreto, que são materiais que aquecem rapidamente e liberam o calor lentamente.</li> <br/>
                  <li>Aumentando a evaporação: As plantas transpiram, liberando água para a atmosfera. A evaporação da água ajuda a resfriar o ar.</li><br/>
                  <li>Melhorando a circulação do ar: As plantas ajudam a criar sombra e reduzir a turbulência do ar. Isso ajuda a melhorar a circulação do ar, o que também ajuda a resfriar o ar.</li>
                </ul>
              </p>
              

              <figure>

                <img src={Casal} alt="" />
                <figcaption>Fonte: Nome do Autor</figcaption>

              </figure>

                <p>As hortas urbanas são uma solução sustentável para reduzir as ilhas térmicas nas cidades. Elas são uma forma de melhorar a qualidade de vida nas cidades e criar um ambiente mais saudável para todos.</p>
                <p>
  Existem muitas maneiras de ajudar a promover hortas urbanas. Você pode:</p>
  <p>
                <ul>
                  <li>Participar de uma horta urbana: Existem hortas urbanas em todo o mundo. Você pode encontrar uma horta urbana perto de você pesquisando online ou perguntando a seus amigos ou vizinhos.</li><br/>
                  <li>Apoiar uma horta urbana: Existem muitas organizações que apoiam hortas urbanas. Você pode doar dinheiro ou tempo para ajudar essas organizações.</li> <br/>
                  <li>Comece sua própria horta urbana: Se você tem um espaço, você pode começar sua própria horta urbana. Existem muitos recursos disponíveis para ajudá-lo a começar.</li> 
                </ul>
              </p>

              <p>Ao ajudar a promover hortas urbanas, você pode ajudar a criar cidades mais sustentáveis e saudáveis.</p>



            </article>
  */}
          {/* ARTIGO ILHAS TERMICAS  */}




          {/* ABAIXO, ARTIGO COMO FAZER UMA HORTA PASSO A PASSO */}

          {/* <article className="artigo-blog">

            <figure>


              <img src={Plantando} alt="Pessoa plantando " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>


            <p>Realmente ter uma horta em casa é um privilégio para poucos? A resposta é: não, e chegou a hora de aprender a como fazer uma horta caseira mesmo com pouco espaço em casa!</p>
            <p>Esse post é voltado especialmente para você que deseja cultivar hortas em pequenos espaços de seus apartamentos e casas.</p>

            <h3>Como ter a sua horta em casa</h3> <br />

            <p>Considerando-se o aumento do interesse na alimentação baseada em alimentos frescos e sem química, o cultivo de hortas dentro de casa torna-se uma opção viável para quem tem qualquer espaço vazio e iluminado.</p>
            <p>Quero dizer que você não precisa de um canteiro extenso, um quintal ou uma varanda, apenas vontade de começar a produzir seus alimentos livres de agrotóxicos para se alimentar melhor.</p>
            <p>Além disso, o crescimento e o desenvolvimento das plantas está relacionado, principalmente, aos fatores ambientais como: luz, temperatura, umidade, composição do solo, irrigação, entre outros.</p>
            <p>Vamos ver cada um desses pontos para que no final você tenha tudo o que precisa para a sua hortinha dar certo!</p>
            <p>Confira o passo a passo para você fazer a sua!</p>

            <h3>O substrato ideal para suas plantinhas</h3>


            <figure>


              <img src={PlantaFlorescendo} alt=" Planta Florescendo " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>


            <p>Antes de tudo, o substrato, também conhecido como terra preta ou condicionador de solo, é uma mistura rica em matéria orgânica, mais leve e aerado do que a terra comum. Por isso é tão indicado para o cultivo de hortas.</p>
            <p>Um solo fértil deve conter uma quantidade suficiente de matéria orgânica, deve reter água e ser permeável, e ainda apresentar os minerais essenciais para o cultivo.</p>
            <p>Existem adubos orgânicos ou químicos. Vamos sempre priorizar os orgânicos por aqui.</p>
            <p>Os adubos orgânicos são provenientes de fezes de animais, como o esterco de frango, restos de cascas de frutas e legumes, húmus de minhoca, farinha de ossos, cama de frango (todo o composto que se forma no chão do galinheiro, contendo fezes, comida e outros rejeitos).</p>
            <p>É importante avisar que esses adubos verdes precisam passar por um processo de curtimento ou compostagem. É um processo mais demorado, mas pode ser feito na sua casa.</p>
            <p>Outra solução mais prática e rápida é comprar o esterco já curtido em lojas especializadas ou grandes lojas de material de construção. Ou conhecer as b.Boxes, hortas inteligentes da Brota que já vem com tudo que você precisa para plantar.</p>
            <p>Um dos mitos sobre o plantio é a necessidade de muita terra para plantar suas mudinhas, quando na verdade o mais importante é a quantidade de nutrientes presentes no solo, porque é de lá que é retirada as substâncias que as plantas precisam.</p>
            <p>A falta ou insuficiência deles é um dos fatores responsáveis pelo atraso no desenvolvimento das plantas e pelo seu ciclo de vida incompleto.</p>
            <p>Exemplos de nutrientes necessários: nitrogênio, fósforo, potássio, cálcio, magnésio, enxofre, boro, cobre e zinco.</p>
            <p>O substrato que vamos ensinar mais a frente é composto por: terra, adubo orgânico e areia lavada</p>


            <h3>Qual a importância da água?</h3>

            <figure>


              <img src={Crianca} alt="Criança Regando " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <p>Todos os seres vivos necessitam de água para a sua sobrevivência, desenvolvimento e reprodução, e com as plantas não seria diferente.</p>
            <p>A água está diretamente ligada à estrutura, ao transporte de nutrientes e ao crescimento delas.</p>
            <p>Na estrutura, é responsável pela rigidez das raízes, caules, folhas e frutos.</p>
            <p>O ciclo dos nutrientes é feito a partir da dissolução na água para serem transportados e absorvidos; daí ficam disponíveis para agir no metabolismo e atuar no processo de crescimento das plantas.</p>
            <p>Um cuidado importante é não deixar encharcar o solo, uma vez que solos encharcados:</p>


            <p>
              <ul>
                <li>dificultam a absorção dos nutrientes, fato que prejudica a respiração das plantas e a produção de energia para seu desenvolvimento.</li> <br />
                <li>pode acabar “lavando” o solo, levando junto os nutrientes embora.</li><br />
              </ul>
            </p>

            <h3>O que fazer para não afogar suas plantinhas?</h3> <br />

            <p>Para solucionar esse problema, os compartimentos devem ter furos na base para favorecer o escoamento da água e evitar o apodrecimento das raízes</p>
            <p>Também é importante ter uma camada de drenagem no fundo dos vasos. Pedra de cascalho, argila expandida, pedaços de telhas são muito usados em hortas. Isso ajuda no controle da irrigação.</p>
            <p>Uma camada no fundo do vaso do material escolhido é coberta por um tecido de algodão. Em cima dessa camada, colocamos a terra.</p>

            <h3>Como saber se estou irrigando muito ou pouco?</h3> <br />

            <p>
              <ul>
                <li>observe o aspecto da planta e os possíveis sinais de falta de água: folhas bem amareladas, secas ou caídas.</li> <br />
                <li>espete o solo com um palito e verifique: ele estiver molhado ou com terra grudada, o solo não precisa de uma nova irrigação; caso contrário, é hora de regar novamente.</li><br />
                <li>não molhe a terra quente! Busque regar ao anoitecer ou logo cedo, os melhores horários para a rega não conferem o sol a pino.</li>
              </ul>
            </p>

            <h3>Luz</h3> <br />

            <figure>


              <img src={Cultivando} alt=" Cultivando uma planta " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <h3>Para que serve?</h3>

            <p>A luminosidade, juntamente com a temperatura que vamos falar a pouco, são os fatores que mais controlam a adaptação das espécies de plantas, sendo a luz o fator mais importante no crescimento e floração das plantas.</p>
            <p>A luz é diretamente responsável pelo processo de fotossíntese essencial para o crescimento e desenvolvimento das plantas.</p>
            <p>Através da fotossíntese ocorre a obtenção de glicose, fonte de energia para as plantas crescerem.</p>
            <p>Neste processo, a planta absorve água, minerais e o gás carbônico do ar, convertendo-os em glicose e liberando o oxigênio na atmosfera.</p>
            <p>Além disso, a luz controla a vida da planta: a variação da quantidade de luz diz a hora que a planta precisa florir, frutificar ou crescer. Enfim, ela é importante para outros processos secundários.</p>

            <h3>Quanto tempo na luz do Sol minhas plantinhas devem ficar?</h3> <br />

            <p>Temos as plantas divididas em: plantas de dias curtos, neutras e de dias longos.</p>
            <p>As plantas de dias longos precisam de um maior tempo de exposição direta ao sol pleno para se desenvolver</p>
            <p>Ao contrário, as plantas de dias curtos precisam de menos tempo, enquanto que as neutras necessitam apenas de sol indireto.</p>
            <p>Se liga na tabela com algumas espécies de plantas mais usadas em hortas indoor no próximo tópico!</p>

            <h3>Atmosfera/Temperatura</h3> <br />

            <p>Vamos ver como a temperatura/atmosfera afeta na frequência de irrigação.</p>
            <p>Quando o clima está mais ameno (temperaturas mais baixas), a quantidade de água absorvida pelas plantas é menor, deste modo a frequência de irrigação deve reduzir.</p>
            <p>Quando as temperaturas estão mais elevadas, a absorção de água é maior, devendo-se irrigar as plantas com mais frequência para suprir a necessidade.</p>

            <h3>Quais plantas escolher dependendo do clima da sua região?</h3>

            <figure>


              <img src={Dicas} alt="Dicas Brota " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <h3>Hora da Mão na Massa (Passo a Passo)</h3> <br />
            <h3>1º passo – Decidindo onde plantar e o que plantar</h3>  <br />

            <p>É importante ser um local que você passe todos os dias, para que consiga sempre ver a horta.</p>
            <p>Em qualquer situação, é importante que o local escolhido receba luz do sol em pelo menos um período do dia</p>
            <p>Para quem mora em apartamento, existem várias espécies que podem ser plantadas em objetos que tiver em casa, como copos, garrafas pet, canos de PVC, latas, canteiro de madeira suspenso, jardineira de alvenaria. São saídas rápidas, baratas e sustentáveis. As b.Boxes, hortas inteligentes da Brota, também são ótimas opções!</p>
            <p>As garrafas pet devem ser cortadas em uma altura de 20 cm, a partir da sua tampa.</p>
            <p>É necessário que se façam furos em cada uma das partes de apoio, que será o meio de drenagem do excesso da água de irrigação.</p>
            <p>No geral, seja qual for o recipiente, é importante atentar para a profundidade do mesmo; o ideal é que tenha aproximadamente 20 cm.</p>

            <figure>


              <img src={Terra} alt=" Terra  " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <p>Opções boas para vasos pequenos: rúcula, manjericão, tomate cereja, alecrim, hortelã, morango, cebolinha, pimentão, salsa, coentro e alface.</p>

            <h3>2º passo – A terra precisa de preparo</h3>

            <p>Uma boa receita para a preparação de uma terra nutritiva dentro de casa: misture partes iguais de terra vegetal, adubo orgânico e adubo químico, nosso caso, vamos utilizar húmus de minhoca.</p>
            <p>É o suficiente para evitar o aparecimento de fungos no composto.</p>
            <p>O substrato que vamos ensinar hoje é composto por: terra, adubo orgânico e areia lavada.</p>
            <p>A terra tem que ser peneirada para separar as partículas mais finas dos torrões, que podem prejudicar o plantio e o desenvolvimento das plantas.</p>
            <p>O adubo orgânico que vamos usar é o húmus de minhoca.</p>
            <p>De posse dos materiais, inicia-se o preparo do solo, nas seguintes proporções:</p>
            <p>⅓ de terra</p>
            <p>⅓ de húmus de minhoca</p>
            <p>⅓ de areia lavada</p>
            <p>Para fazer a areia lavada em casa é necessário colocar a areia comprada (que possui sais presentes) em uma bacia, completar de água e escorrer o líquido com 3 vezes para eliminar os sais contidos na areia.</p>
            <p>Vale lembrar que é possível encontrar para comprar a terra já adubada.</p>
            <p>A cada 20-30 dias, a terra precisa ser revestida com adubo orgânico. E a cada colheita, o solo deve ser adubado antes de receber o plantio de um novo vegetal.</p>
            <p>Se você não quer se preocupar com isso, as b.Boxes hortas inteligentes da Brota já vem com o solo preparado pronto para plantio.</p>

            <h3>3º passo – Cuide bem da sua horta</h3> <br />

            <p>Depois que o substrato ficou pronto é hora de colocar no vaso escolhido junto com as sementes selections.</p>
            <p>Lembre-se de cobri-las com uns 2 cm de substrato para garantir que o vento não vai atrasar o seu plantio.</p>
            <p>Durante a fase de produção de mudas, a irrigação deve ser realizada diariamente, utilizando pouca água e uma frequência maior, três vezes por dia.</p>
            <p>À medida que as plantinhas vão crescendo, pode-se diminuir a frequência e aumentar o volume de água, podendo irrigar as plantas jovens apenas 1x ao dia, e plantas adultas 4x por semana.</p>
            <p>Cabe apontar que as condições de clima da região e espécie cultivada devem ser levadas em consideração</p>
            <p>Assim como as pessoas, cada planta tem mais ou menos necessidade de sol e água.</p>
            <p>O manjericão, por exemplo, precisa de muito sol. Já o alface precisa de menos exposição solar. Pesquise sobre a preferência da espécie que escolheu.</p>
            <p>E fique de olho na sua plantinha: se ela estiver murchando, pode ser sinal de pouca água. Se estiver apodrecendo, pode ser excesso de água ou pouco sol.</p>

            <h3>4º passo – Prevenindo pragas</h3> <br />
            <h3>Armadilha para insetos</h3> 
            <h3>Você vai precisar de:</h3>

            <p>– Vinagre (ou cerveja) atrai e mata a mosca adulta.</p>
            <p>– Algumas gotas de detergente</p>
            <p>– Um pote com uma tampa que você possa furar.</p>
            <p>Coloque vinagre comum (ou cerveja) em frascos com tampa. Adicione algumas gotas de detergente de louça ao líquido. Tampe e faça vários furos na tampa.</p>
            <p>Deixe os frascos espalhados na área infestada. Os adultos voarão para dentro dos frascos e morrerão.</p>
            <p>Fungos e bactérias: <br /> Chá com camomila, cavalinha e canela em pó. Fazer um chá forte e diluir 1 parte para 10 de água. Borrifar duas vezes por semana enquanto durarem os sintomas (de manhã ou à noite).</p>
            <p>Se a infestação tiver muito grande, aumentar a concentração;</p>
            <p>Mosquitinhos <br /> Alguns cravos espalhados pela horta ajudam a afastá-los.Caso isso não funcione, outra opção é um chá de arruda. 10g de Arruda para 100ml de água; Picar as folhas, colocar na água e deixar descansar por 24h.</p>
            <p>Depois coar e misturar em 2 litros de água. Pulverizar nas plantas e no local no fim do dia até eles irem embora.</p>
            <p>Para evitar que sua horta seja atacada por grilos, pulgões, cochonilhas e larvas, você pode usar preparados como extrato de nim.</p>
            <p>Não utilize venenos industrializados, agrotóxicos ou produtos inseticidas industriais do tipo spray sobre as plantas, pois pode resultar em intoxicação.</p>

            <h3>5º passo – Colha e aproveite</h3> <br />

            <p>A hora certa de colher também é uma dúvida comum aos jardineiros de primeira viagem. Uma dica é: ao comprar as sementes vem uma previsão para o tempo médio de colheita. Vale se guiar por ali, mas sabendo que tudo pode variar de ambiente, irrigação e outros cuidados tratados acima.</p>
            <p>Agora, para aproveitar todo o trabalho que você teve ao fazer sua própria horta, sempre procure novas receitas para testar seus novos temperos frescos colhidos em casa. Depois comenta aqui se o sabor realmente não fica mais gostoso!</p>
            <p>E lógico, não esqueça de postar fotos nas redes sociais para deixar aquele seu amigo(a) com inveja e louco para ser convidado para um jantar.</p>


          </article>

 */}

          {/* ACIMA , ARTIGO COMO FAZER UMA HORTA PASSO A PASSO */}












          {/* ABAIXO, ARTIGO DE COMO FAZER SALADA RUSSA  */}



          {/* <article className="artigo-blog">

            <figure>


              <img src={Salada} alt="Prato de salada " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <h3>Tempoda receita: 30min</h3> <br /> <br />

            <h3>Ingredientes - 8 Porções</h3> <br />

            <p>
              <ul>

                <li>1 abacaxi picado em cubos e escorrido</li> <br />
                <li>300 g de peito de peru defumado picado em tirinhas</li> <br />
                <li>1 vidro de palmito picado em rodelas</li> <br />
                <li>1 vidro pequeno de azeitonas verdes picadas</li> <br />
                <li>100 g de uva passa sem caroço</li> <br />
                <li>1 lata de milho verde em conserva escorrida</li> <br />
                <li>1 dente de alho amassado</li> <br />
                <li>1 vidro pequeno de maionese (200 g)</li> <br />
                <li>1 caixa de creme de leite (200 g)</li> <br />
                <li>Folhas de alface para decorar</li>

              </ul>
            </p>



            <figure>


              <img src={Pote} alt="Prato de salada " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <h3>Modo de preparo</h3> <br />

            <p>1 - Misture o creme de leite, a maionese e o dente de alho amassado e reserve.</p>
            <p>2 - Misture todos os demais ingredientes e acrescente à mistura de creme de leite e maionese, misturando bem.</p>
            <p>3 - Em uma saladeira monte as folhas de alface, coloque a salada e leve à geladeira por 20 minutos.</p>
            <p>4 - Ideal para acompanhar lombo de porco ou aves assadas.</p>
          <p>5 - Especial para natal.</p> 
          
          </article>
          
          */}

          {/* ACIMA, BLOG  DE COMO FAZER SALADA RUSSA  */}






          {/* ABAIXO, BLOG DE PASSO A PASSO */}

          {/*  <article className="artigo-blog">


            <figure>


              <img src={PlantarCoentro} alt="Prato de salada " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <p>Por conta do espaço limitado, pessoas que moram em apartamentos têm ressalvas quanto a ter uma horta em casa. É por isso que, muitas vezes, abrem mão de ter coentro fresquinho à sua disposição. Entretanto, não seria ótimo poder se abastecer de tempero a qualquer hora? Afinal, como plantar coentro em apartamento?</p>


            <figure>


              <img src={Residencia} alt="Prato de salada " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <p>Ter uma plantação de coentro dentro de casa pode trazer muitas vantagens para você. Essa planta pode ser utilizada para compor os mais diversos tipos de receitas, como guacamole, chutney e muitos outros pratos. Caracterizado pelo seu sabor forte, o coentro é muito presente na culinária latina e asiática.</p>
            <p>Por isso, saber como plantar coentro em apartamento pode ser muito útil para você, que ama preparar refeições com esse verdinho. Pensando nisso, fizemos este guia para te ajudar a cuidar dessa hortaliça, para que, assim, você sempre possa desfrutar de um delicioso tempero.</p>

            <h3>Preparando o vaso</h3> <br />

            <p>Para você, que está se perguntando “como plantar coentro em apartamento”, saiba que existem várias maneiras práticas e criativas de cultivar a plantinha. Garrafas pet, canos de PVC e até mesmo canteiros são opções viáveis para o plantio desse tempero.</p>
            <p>Entretanto, hoje vamos nos atentar à plantação de coentro em vaso. Afinal de contas, esse é o método mais prático e seguro para o desenvolvimento das plantinhas. Basta escolher um recipiente adequado (no mínimo 15 cm de diâmetro e 20 cm de profundidade) e que tenha furos no fundo para drenagem.</p>
            <p>Feito isso, chegou a hora de preparar a terra. Como cultivar coentro em vaso envolve um bom sistema de drenagem. O ideal é que a última camada seja formada por argila. Assim, você garante o escoamento do excesso de água (que deverá ser expelida pelos furos do vaso).</p>

            <figure>


              <img src={PlantasnaMesa} alt="Prato de salada " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <p>Por cima da camada de drenagem, coloque terra misturada com substrato. Depois, é só colocar as sementes em buraquinhos de 1,5 cm de profundidade e cobri-las com uma fina camada de terra. Lembre-se: para o plantio de coentro no vaso, prefira utilizar sementes. As mudas dessa planta não se dão bem com o transporte.</p>

            <h3>Cuidados diários</h3> <br />

            <p>Como plantar coentro em apartamento não é só preparar o vaso e esperar que as plantas cresçam sozinhas, é importante estar atento para alguns cuidados. Afinal de contas, as verdinhas também precisam de muito amor e carinho para crescerem fortes e saudáveis</p>
            <p>Você sempre deverá checar o solo antes de regar o coentro. O ideal é que a terra nunca fique úmida ou encharcada demais. Ofereça água sempre que perceber a terra seca. Quando as plantas estiverem bem desenvolvidas, diminua a frequência de rega.</p>
            <p>Mas, afinal de contas, coentro gosta de sol ou sombra? Os verdinhos gostam bastante de calor. Por isso, o ideal é que o vaso fique em um local bem iluminado do seu apartamento, de preferência na janela ou na sacada. Certifique-se de que as plantas receberão luz solar por, no mínimo, quatro horas diárias.</p>
            <p>Além disso, é importante que o coentro esteja em ambientes com temperaturas superiores a 20ºC para germinar. Por isso, opte pelo plantio em épocas mais quentes. Vale dizer que essa não é uma planta que necessita de adubação constante. Assim, ofereça um pouco de matéria orgânica a cada dois ou três meses.</p>

            <h3>Quando vou poder colher o coentro?</h3> <br />

            <p>Agora que aprendeu como cuidar de coentro, chegou a hora de saber quando, finalmente, o tempero poderá ser colhido e utilizado. Depois de plantadas e muito bem-cuidadas, as folhas de coentro poderão ser colhidas após, mais ou menos, 60 dias do plantio.</p>
            <p>Entretanto, é sempre importante colher as folhas mais altas da planta para que as que estão embaixo possam se desenvolver melhor. Outra dica é retirar somente o necessário para preparar a refeição que você deseja. Afinal, depois que é retirado do pé, o coentro perde a sua essência com facilidade.</p>

            
            <figure>


              <img src={PlantarCoentro} alt="Prato de salada " />

              <figcaption>Fonte: Nome do Autor</figcaption>

            </figure>

            <p>Plantar coentro é muito mais fácil do que você achava, não é verdade? Temos certeza de que você se beneficiará bastante ao plantar esse verdinho em casa. Afinal de contas, nada melhor do que ter temperos fresquinhos à disposição.</p> 
          </article>
          */}
        
          {/* ACIMA SEGUE  */}



          {/* <article className="artigo-blog">
            <figure>
                <img
                  src={artigoTelhadoVerde} alt="Imagem do Telhado Verde do Shopping Eldorado"
                />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <div>
              <p>O conceito de "telhado verde" ganhou destaque nas últimas décadas como uma solução inteligente para tornar ambientes urbanos mais sustentáveis ​​e amigáveis ​​ao meio ambiente. O Shopping Eldorado, localizado em São Paulo, é um excelente exemplo de como a integração de espaços verdes em áreas urbanas pode ser bem sucedida.</p> 

              <p>Neste artigo, exploraremos o maravilhoso telhado verde do Shopping Eldorado, um verdadeiro oásis urbano para os amantes da natureza.</p>

              <p>Contato com a Natureza: O espaço verde no telhado do Shopping Eldorado oferece uma oportunidade rara para que os habitantes da cidade de São Paulo se conectem com a natureza. Os jardins exuberantes, as plantas, as árvores e as flores proporcionam um ambiente natural que permite aos visitantes relaxar e se reconectar com o mundo natural.</p>

              <p>Espaços de Lazer: Além das áreas verdes, o telhado do Shopping Eldorado também possui espaços de lazer, como bancos e áreas para sentar. Isso permite que os visitantes descansem, leiam um livro, façam um almoço ou simplesmente relaxem enquanto apreciam a beleza do local.</p> 

              <p>E como combo também tem vistas espetaculares da cidade. Os visitantes contemplam a paisagem urbana de São Paulo, incluindo prédios icônicos e horizontes fascinantes, criando uma experiência única de contemplação.</p>
            </div>

            <figure>
                <img
                  src={artigoTelhadoVerde2} alt="Imagem do Telhado Verde do Shopping Eldorado"
                />
              <figcaption>Fonte: Nome do Autor</figcaption>
            </figure>

            <div>
              <p>Atividades Relaxantes: O Shopping Eldorado muitas vezes organiza eventos e atividades no telhado verde, como ioga ao ar livre, sessões de meditação e aulas de jardinagem. Essas atividades proporcionaram uma experiência relaxante e enriquecedora para os visitantes.</p>

              <p>Em resumo, o telhado verde do Shopping Eldorado é um oásis de tranquilidade e relaxamento no coração da cidade. </p>

              <p>É um lugar onde os visitantes podem escapar do estresse da vida urbana, respirar puro e desfrutar da beleza da natureza, tornando-o um destino imperdível para todos que buscam um refúgio verde e relaxante em São Paulo.</p>
            </div>
          </article> */}

          <aside>
            <CardPublicidadeBox srcImg={publicidade} />

            <div className="box-ultimos-posts">
              <h4>Últimos posts</h4>

              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
              <UltimosPosts
                srcImg={ultimoPostImg}
                altImg="Imagem de três vasos"
                title="Confira como cultivar de maneira efetiva:"
                category="Cultivo"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Artigo;
