import Header from '../../components/header';
import Footer from '../../components/footer';
import AproposBanner from '../../components/apropos-banner';
import  './apropos.scss'
import AppCollapse from '../../components/collapse';

function Apropos() {

    return (
        <div>
            <Header />
            <AproposBanner />

            <AppCollapse />
            <Footer />

        </div>
    )
}

export default Apropos