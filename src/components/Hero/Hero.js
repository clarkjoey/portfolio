import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  // Welcome title and paragraph
  // TO DO: change the button link
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hello! My name is Joseph Clark. I am a twenty-three year old Masters student at the Massachusetts Institute of Technology, studying full stack development. In my free time I enjoy drawing and making music, which I think explains why I love when I get opportunities to show that same creativity in my code. I would love to find a career in coding that allows me the same free expression I get with making art. Check out some of my school portfolio projects on the “Projects” page!
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;