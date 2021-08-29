import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          P Siva krishna Reddy
        </SectionTitle>
        <SectionText>
          I can build highly interactive web Applications using Js Frameworks with good coding standards.
        </SectionText>
        <Button onClick={() => window.location = "https://google.com"}>Email Me <AiOutlineArrowRight style={{ marginLeft: "10px" }} /></Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;