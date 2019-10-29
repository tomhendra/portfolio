import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Graphic from '../components/Graphic';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';

import { buttons, sizes } from '../assets/styles/constants';

const { BRAVO, DELTA, GOLF, HOTEL } = sizes;
const { PRIMARY, SECONDARY } = buttons;

const IndexPage = () => (
  <Layout>
    <SEO title="Web Developer" />
    <Container center>
      <Graphic>Hola.</Graphic>
      <Grid>
        <Item gridStart={1} gridEnd={9}>
          <Heading as="h1" size={HOTEL}>
            I am Tom.
          </Heading>
          <Heading sub as="h2" size={DELTA} noMargin>
            I’m a web developer from the UK living in Spain. I am passionate
            about coding, design & food!
          </Heading>
        </Item>
        <Item gridStart={1} gridEnd={6} spacingTop={GOLF}>
          <ButtonGroup>
            <Button
              externalLink="/projects"
              buttonStyle={SECONDARY}
              buttonSize={BRAVO}
            >
              Projects
            </Button>
            <Button
              internalLink="/contact"
              buttonStyle={PRIMARY}
              buttonSize={BRAVO}
            >
              Contact
            </Button>
          </ButtonGroup>
        </Item>
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;
