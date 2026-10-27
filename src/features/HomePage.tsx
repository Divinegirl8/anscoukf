import About from "../components/About";
import Approach from "../components/Approach";
import Business from "../components/Business";
import HeroPage from "../components/HeroPage";
import Products from "../components/Products";

const Homepage:React.FC = () => (
    <>
        <HeroPage />
        <About/>
        <Business/>
        <Products/>
        <Approach/>



    </>
)

export default Homepage;