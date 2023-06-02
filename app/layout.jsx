import Nav from "@components/Nav/Nav";
import '../styles/globals.css';
import IntroCard from "@components/IntroCard";
import Filler from "@components/Filler";
import FillerTwo from "@components/FillerTwo";
import Carousel from "@components/CradCarousel/Carousel";
import Info from "@components/Info";
import SelfImprove from "@components/SelfImprove/SelfImprove";
import Share from "@components/Share/Share";
import Privacy from "@components/Privacy";
import Work from "@components/Work";
import Vacancies from "@components/Vacancies/Vacancies";
import Footer from "@components/Footer";

export const metadata = {
    title: "Ahead App",
    description: "Master your life by mastering your emotions."
}


const RootLayout = () => {
    return (
        <html lang="en">
            <body>

                <div className="main">
                    <div className="gradient"></div>
                </div>

                <main className="app">
                    <Nav />
                    <IntroCard />
                    <Filler />
                    <Carousel />
                    <Info />
                    <SelfImprove />
                    <FillerTwo />
                    <Share />
                    <Privacy />
                    <Work />
                    <Vacancies />
                    <Footer />
                </main>

            </body>
        </html>
    )
}

export default RootLayout