import Projects from "../../Data/Projects";
import Container from "../Layouts/Container";
import TextContent from "../Layouts/TextContent";
import Card from "../UI/Card";
import Cards from "../UI/Cards";
import LinkAccess from "../UI/LinkAccess";

function Portfolio() {
  return (
    <Container customClass={"column"}>
      <TextContent
        title="Meu portifólio"
        paragraph="Aqui estão alguns projetos desenvolvidos por mim"
      />
      <LinkAccess
        name="Visitar repositório do github"
        link="https://github.com/Jonathaannn"
        customClass="textLink"
      />
      <Cards>
        {Projects.map((element, index) => (
          <Card
            image={element.image}
            title={element.title}
            description={element.description}
            technologies={element.technologies}
            link={element.link}
            key={index}
          />
        ))}
      </Cards>
    </Container>
  );
}

export default Portfolio;
