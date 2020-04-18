import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hello, my name is Akash. I'm a software engineer with experience in
          Java, Python, C#, Node JS, PostgreSQL, MongoDB, and React.
        </p>

        <p>
          I'm constantly learning new things. currently those things include
          gaining more experience with MongoDB, React, TensorFlow, and Keras
        </p>

        <p>
          My latest project, DoodleMath, is a graphical mathematics tutor. You
          can check it out{' '}
          <a
            href='https://github.com/SER515ASUTEAM16/doodlemath'
            target='_blank'
            rel='noopener noreferrer'
          >
            here
          </a>
          , or on the homepage. It is built with React JS, Java Spring Boot, and
          MySQL.
        </p>

        <p>
          When I'm not learning something new chances are I'm creating some
          YouTube videos. You can find those{' '}
          <a
            href='http://www.youtube.com/c/akashdeodhar'
            target='_blank'
            rel='noopener noreferrer'
          >
            here
          </a>
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
