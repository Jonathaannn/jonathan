import Container from "../Layouts/Container";
import TextContent from "../Layouts/TextContent";

function Home() {
  const text = {
    title: "Qem sou?",
    subTitle: "Breve resumo de quem é Jonathan",
    paragraph1: `Olá, meu nome é Jonathan César e atualmente estou cursando Análise e Desenvolvimento de Sistemas no Instituto Federal da Paraíba (IFPB) no campus de Cajazeiras. Desde a infância, sempre fui fascinado por tecnologia e pelo espaço, embora meu encanto pelo cosmos fosse ainda maior. Comecei a valorizar mais a tecnologia no final do ensino fundamental, especialmente na área de hardware, pois sempre acompanhava os lançamentos de celulares de diversas marcas.`,
    paragraph2: `Ao concluir o ensino fundamental, chegou o momento de escolher uma escola para o ensino médio, o que se tornou um desafio, pois não fui aceito no curso de Eletromecânica do IFPB. Sem muitas esperanças, estava prestes a me matricular em uma escola comum para o ensino médio básico. Contudo, surgiu uma oportunidade quando meus amigos mencionaram que iriam tentar ingressar na ECIT Professora Nicéia Claudino Pinheiro, a escola estava oferecendo o curso técnico de Informática.`,
    paragraph3: `Decidi seguir esse caminho e, ao final do 9º ano do ensino fundamental, a notícia sobre a lista de aprovados na ECIT foi divulgada. Com alguma apreensão, eu e alguns amigos nos reunimos na casa de um deles para conferir os resultados. Enquanto percorria a lista no PDF, já havíamos encontrado os nomes dos meus dois amigos na primeira página, mas o meu ainda não estava lá. Comecei a me conformar com a ideia de fazer o ensino médio em uma escola mais simples, quando, para minha surpresa, meu amigo gritou: "Aqui teu nome, Jonathan!". Foi um momento bastante algre e de alívio. Nós três comemoramos e nos abraçamos, marcando o início de um sonho.`,
    paragraph4: `Agora eu me encontrava imerso em uma escola enorme, muito parecida coms instituições de ensino retratadas nos filmes americanos. A dinâmica de troca de salas, o conceito de escola integral, a atmosfera envolvente e até mesmo o intervalo do almoço remetiam diretamente aos filmes adolescentes dos anos 2000. Era uma experiência maravilhosa.`,
    paragraph5: `Foi nesse cenário que tive meu primeiro contato significativo com o universo da programação. Inicialmente, imaginei que o curso se dedicaria predominantemente à  conceitos e prática com parte física (Hardware), mas me enganei completamnete. Logo no início do primeiro ano, deparei-me com a disciplina mais conhecida no mundo da programação: "Lógica de Programação". Apesar de não ter despertado grande interesse inicialmente, mas foi em outra disciplina que encontrei minha verdadeira paixão: "Desenvolvimento Web", focada em HTML e CSS. Este foi meu primeiro contato com Front-End, e foi amor à primeira vista. A partir desse momento, mergulhei cada vez mais fundo nessa área fascinante.`,
    paragraph6: `Após três anos repletos de desafios e aprendizado, concluí o ensino médio e conquistei meu lugar na instituição que inicialmente não havia conseguido ingressar, o IFPB. Olhando para trás, agradeço por não ter entrado lá no ensino médio, pois teria seguido um curso que não me encantaria tanto e que não despertaria meu amor pela tecnologia. Ao longo do curso de Análise e Desenvolvimento de Sistemas, ampliei meus horizontes e aprofundei meus conhecimentos nos diversos caminhos que a tecnologia oferece. Revisitando conteúdos do ensino médio, como "Algoritmos e Lógica da Programação", "Banco de Dados" e "Programação Orientada a Objetos".`,
    paragraph7: `Agora, na reta final do meu curso, carrego um conjunto de conhecimentos e uma imensa vontade de continuar estudando e aprendendo mais sobre esse mundo em constante expansão e inovação. Este breve resumo é uma pequena narrativa de quem sou e de como me vi imerso nesse fascinante universo da tecnologia.`,
  };

  return (
    <Container customClass="column">
      <span>
      <TextContent
        title={text.title}
        subTitle={text.subTitle}
        paragraph={text.paragraph1}
        secundParagraph={text.paragraph2}
      />
      <TextContent
      subTitle="Inicío de um sonho"
        paragraph={text.paragraph3}
        secundParagraph={text.paragraph4}
      />
      <TextContent
      subTitle="Descobrindo uma nova paixão"
        paragraph={text.paragraph5}
        secundParagraph={text.paragraph6}
      />
      <TextContent paragraph={text.paragraph7} />
      </span>
    </Container>
  );
}

export default Home;
