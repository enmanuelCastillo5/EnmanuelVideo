import React, {useEffect, useState} from 'react';
// 
//IMPORTANDO COMPONENTES
import Header from '../component/Header.jsx';
import Search from '../component/Search.jsx';
import Categories from '../component/Categories.jsx';
import Carousel from '../component/Carousel.jsx';
import CarouselItem from '../component/CarouselItem.jsx';
import Footer from '../component/Footer.jsx';
//IMPORTANDO ESTILOS
import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState.js';
const API = 'http://localhost:3000/initalState';

const Home = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? <h1>Loading...</h1> : (
        
        <div className="App">
            <Header />
            < Search />
            {initialState.mylist.length > 0 &&
            <Categories title="Mi lista">
                <Carousel>
                {initialState.mylist.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
                </Carousel> 
            </Categories>    
            }

            <Categories title="Tendencia">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item}/>
                    )}
                </Carousel> 
            </Categories>


            <Categories title="Originales">
                <Carousel>
                {initialState.originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
                </Carousel> 
            </Categories>

            <Footer />
        </div>
    );
}


export default Home; 
