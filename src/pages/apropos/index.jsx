import Header from '../../components/header';
import Footer from '../../components/footer';
import Banner from '../../components/banner';

import Collapse from '../../components/collapse';

import aproposList from '../../datas/aproposList.json';
import imgBanner from '../../assets/apropos-banner.png'
const titleBanner =""

function Apropos() {

    return (
        <div>
            <Header />

            <main className='main-container'>
                <Banner  img={imgBanner} title={titleBanner}  />
            
                <div className="apropos-collapses">
                    {aproposList.map(item => (
                    <Collapse key={item.id} title={item.title} content={item.content} />
                    ))}
                </div>
            </main>

            <Footer />

        </div>
    )
}

export default Apropos