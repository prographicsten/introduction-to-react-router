
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    let location = useLocation();
    console.log(location);

    return (
        <div className="text-center mt-5">
            <Header></Header>
            {
                navigation.state === "loading" ? <p>Loding...</p> :
                <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>
    );
};

export default Home;