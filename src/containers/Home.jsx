import React from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header';
import Carousel from '../component/Carousel';
import CarouselItem from '../component/CarouselItem';
import Categories from '../component/Categories';
import Search from '../component/Search';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => (
  <>
    <Header />
    <Search isHome />
    {myList.length > 0 && (
      <Categories title="Mi lista">
        <Carousel>
          {myList.map(item => (
            <CarouselItem
              key={item.id}
              {...item}
              isList
            />
          ))}
        </Carousel>
      </Categories>
    )}
    <Categories title="Tendencias">
      <Carousel>
        {trends.map(item => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Categories>
    <Categories title="Originales de Platfix">
      <Carousel>
        {originals.map(item =>
          <CarouselItem key={item.id} {...item} />
        )}
      </Carousel>
    </Categories>
  </>
);
const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};
export default connect(mapStateToProps, null)(Home);