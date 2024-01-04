import { FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";

import Container from "../Layouts/Container";
import TextContent from "../Layouts/TextContent";
import Box from "../Layouts/Box";
import SocialMedia from "../UI/SocialMedia";
import Forms from "../Form";

function Contect() {
  return (
    <Container customClass="column">
      <TextContent
        title="Como entrar em contato"
        paragraph="Caso queira conhecer meus projetos melhor, mande um email ou visite alguma das minhas redes sociais :)"
      />
      <Box customClass="responsive">
        <SocialMedia
          name="jonatha.237"
          link="https://instagram.com/jonatha.237?igshid=NzZlODBkYWE4Ng=="
          Icon={FaInstagram}
        />
        <SocialMedia
          name="Jonathan César"
          link="https://www.linkedin.com/in/jonathan-c%C3%A9sar-5640a7234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          Icon={FaLinkedin}
        />
        <SocialMedia name="Jonataannn" link="https://github.com/Jonathaannn?tab=repositories" Icon={FaGithub} />
      </Box>
      <Forms />
    </Container>
  );
}

export default Contect;
