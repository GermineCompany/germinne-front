import React from 'react';
import { useParams } from 'react-router-dom';
import artigos from '../../data/artigos';
import { useState } from 'react';
import { useEffect } from 'react';
import ultimoPostImg from '../../images/ultimos-posts.png';
import CardPublicidadeBox from '../../components/CardPublicidadeBox/CardPublicidadeBox';
import UltimosPosts from '../../components/UltimosPosts/UltimosPosts';
import publicidade from '../../images/card-publicidade-germinne.png';
import PlantaPrincipal from '../../images/PlantaPrincipal.jpg'
import artigoVantagensHorta from '../../images/artigoVantagensHorta.jpg'
import artigoUtilidadesHortela from '../../images/artigoUtilidadesHortela.jpg'
import artigoUtilidadesGerminneBox from '../../images/artigoUtilidadesGerminneBox.jpg'
import artigoUtilidadesMaoSalada from '../../images/artigoUtilidadesMaoSalada.jpg'
import artigoBeneficiosHorta from '../../images/artigoBeneficiosHorta.jpg'
import artigoTelhadoVerde from '../../images/artigoTelhadoVerde.jpg'
import artigoTelhadoVerde2 from '../../images/artigoTelhadoVerde2.jpg'
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
