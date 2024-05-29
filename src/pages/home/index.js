import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';
import GalleryCards from '../../components/gallery-cards';
import imgBanner from '../../assets/home-banner.png'

const titleBanner ="Chez vous, partout et ailleurs"


function Home() {
  return (
    <div className="App">
      
      <Header />
      <div className='main-container'>
        <Banner  img={imgBanner} title={titleBanner}  />
        <GalleryCards />
      </div>
      <Footer />

  
    </div>
  );
}

export default Home;
