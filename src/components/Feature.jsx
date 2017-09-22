import React, { Component } from 'react';
import item1 from '../img/section-2-image01.png';
import item2 from '../img/section-2-image02.png';
import item3 from '../img/section-2-image03.png';

const Item = ({ title, desc, img }) => {
  return (
    <li className="item">
      <img className="item__img" src={img} alt="" />
      <h3 className="item__title">{title}</h3>
      <p className="item__desc">{desc}</p>
    </li>
  );
};

class Feature extends Component {
  state = {
    data: [
      {
        img: item1,
        title: 'Excepteur sint occaecat',
        desc:
          'laboris nisi ut aliquip ex ea commodo consequat. irure dolor in reprehenderit in voluptate dolore eu fugiat nulla pariatur.'
      },
      {
        img: item2,
        title: 'Nemo enim ipsam',
        desc:
          'qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
      },
      {
        img: item3,
        title: 'Quis autem vel eum',
        desc:
          'magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
      }
    ]
  };
  render() {
    return (
      <section className="features container">
        <div className="features__headline">
          <h1 className="headline">Cupidatat Non Proident Sunt</h1>
        </div>

        <ul className="features__item grid">
          {this.state.data.map(data => {
            return (
              <Item
                key={data.title}
                img={data.img}
                title={data.title}
                desc={data.desc}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Feature;
