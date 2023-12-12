import React from 'react';
import { useParams } from 'react-router-dom';
import artigos from '../../data/artigos';
import { useState } from 'react';
import { useEffect } from 'react';
import ultimoPostImg from '../../images/ultimos-posts.png';
import CardPublicidadeBox from '../../components/CardPublicidadeBox/CardPublicidadeBox';
import UltimosPosts from '../../components/UltimosPosts/UltimosPosts';
import publicidade from '../../images/card-publicidade-germinne.png';
import Cidade from '../../images/Cidade.svg'
import Casal from '../../images/CasalCuidandoPlanta.svg'
import Plantando from '../../images/Plantando.jpg'
import PlantaFlorescendo from '../../images/PlantaFlorescendo.jpg'
import Crianca from '../../images/CriancaRegando.png'
import Cultivando from '../../images/cultivandoplantaBlog.jpg'
import Dicas from '../../images/dicaBrota.jpg'
import Terra from '../../images/TerranaGarrafa.jpg'
import Salada from '../../images/salada.jpg'
import Pote from '../../images/Pote-Salada.jpg'
import PlantarCoentro from '../../images/plantarCoentro.jpg'
import Residencia from '../../images/Residencia.jpg'
import PlantasnaMesa from '../../images/plantasnamesa.jpg'
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


          {/* artigo-telhado-verde */}

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

          {/* artigo-telhado-verde */}



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
