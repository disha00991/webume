import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main fullPage={true}>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Projects</h2>
          <p>A selection of projects that I think are worth your time</p>
        </div>
      </header>
      {/* <Carousel slide={false}>
        {data.map((project) => (
          <Carousel.Item>
            <Cell data={project} key={project.title} />
          </Carousel.Item>
        ))}
      </Carousel> */}
      <div className="post-card">
        {data.map((project) => (
          <Card style={{ width: '23rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL+project.image} />
            <Card.Body>
              <Card.Title>{project.title}<br/><small>{project.date}</small> <br/> <small>{project.subtitle}</small>
              </Card.Title>              
              <Card.Text>
                {project.desc}
              </Card.Text>
              {project.link && <><span><i className="fa fa-laptop"></i><a href={project.link}> Check it out!</a></span></>}<br/>
              {project.github && <><span><i className="fa fa-github"></i><a href={project.github}> Github repo</a></span></>}
            </Card.Body>
          </Card>))}
      </div>
    </article>
  </Main>
);

export default Projects;
