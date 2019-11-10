import React from 'react';

//IMPORTANDO COMPONENTES
import Header from '../component/Header';
import Search from '../component/Search.jsx';
import Categories from '../component/Categories';
import Carousel from '../component/Carousel';
import CarouselItem from '../component/CarouselItem';

//IMPORTANDO ESTILOS
import '../assets/styles/App.scss';



const App = () => (
    <div className="App">
        <Header />
        < Search />

        <Categories>
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />

            </Carousel>
        </Categories>

    </div>
);



export default App; 
