import React from 'react';

import Card from '../components/Card';

import doodlemath from '../assets/images/doodlemath.png';
import me from '../assets/images/me.png';
import jarvis from '../assets/images/jarvis.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Doodle Math',
          subTitle: 'A visual way to learn maths',
          imgSrc: doodlemath,
          link: 'https://github.com/SER515ASUTEAM16/doodlemath',
          selected: false
        },
        {
          id: 1,
          title: 'Akash Devdhar',
          subTitle: 'GitHub',
          imgSrc: me,
          link: 'https://github.com/neospeed83',
          selected: false
        },
        {
          id: 2,
          title: 'Jarvis',
          subTitle: 'A smart speech assistant',
          imgSrc: jarvis,
          link: 'https://github.com/neospeed83/Jarvis-Speech-Assistant',
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
