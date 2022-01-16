import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ExternalLinks } from './HeroStyles';

const Hero = () => (
  // Welcome title and paragraph
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hello, my name is Joseph Clark. I started my career in the medical field and while working as a research assistant at a hospital, I saw the need for a large amount of raw data to to be analyzed. I taught myself how to code in R Studio and as a result was able to present significant coorelational data to the study team. ( You can read the published study findings <ExternalLinks href={'https://link.springer.com/article/10.1007/s11606-021-07252-z'}>here</ExternalLinks> ) I realized that I had a passion and knack for coding and I wanted to pursue this as a career. I set a goal for myself to go back to school and learn how to code. Now, I am freshly graduated from my Full Stack Development Masters program at MIT and ready to join a workplace that I can grow with and learn from.
      </SectionText>
      
      <Button onClick={() => window.location = "#about"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;