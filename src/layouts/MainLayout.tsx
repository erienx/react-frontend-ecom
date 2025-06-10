import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import ScrollToTop from "../components/ScrollToTop.tsx";

const MainLayout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                    <ScrollToTop/>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
