import React, {useState, useEffect} from 'react';

//IMPORTANDO COMPONENTES
import Header from '../component/Header';
import Search from '../component/Search.jsx';
import Categories from '../component/Categories';
import Carousel from '../component/Carousel';
import CarouselItem from '../component/CarouselItem';
import Footer from '../component/Footer';
//IMPORTANDO ESTILOS
import '../assets/styles/App.scss';



const App = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/initalState')
        .then(response => response.json())
        .then(data => setVideos(data));
      },[]
    );

     console.log(videos);


    return (
        <div className="App">
            <Header />
            < Search />

            <Categories title="Mi lista">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel> 
            </Categories>




            <Categories title="Tendencia">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel> 
            </Categories>



            <Categories title="Originales">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel> 
            </Categories>


            <Footer />
        </div>
    );
}


export default App; 
