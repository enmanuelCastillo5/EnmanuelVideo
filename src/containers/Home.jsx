import React, {useEffect, useState} from 'react';
// 
import { connect } from 'react-redux';
//IMPORTANDO COMPONENTES
import Search from '../component/Search.jsx';
import Categories from '../component/Categories.jsx';
import Carousel from '../component/Carousel.jsx';
import CarouselItem from '../component/CarouselItem.jsx';

//IMPORTANDO ESTILOS
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
    return (
        
        <React.Fragment>
            < Search />
            {myList.length > 0 &&
            <Categories title="Mi lista">
                <Carousel>
                {myList.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
                </Carousel> 
            </Categories>    
            }

            <Categories title="Tendencia">
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel> 
            </Categories>


            <Categories title="Originales">
                <Carousel>
                {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
                </Carousel> 
            </Categories>
         </React.Fragment>
    );
}

 const mapStateToProps = state => {
        return {
            myList: state.myList,
            trends: state.trends,
            originals: state.originals,
        };
    };
export default connect(mapStateToProps, null)(Home);