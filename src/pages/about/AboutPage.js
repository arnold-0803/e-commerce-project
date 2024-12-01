import { useContext } from "react";
import Navbar from "../../components/Navbar";
import image from "../../images/pix/mercedes-amg-gt-4-door-coupe-6942533.jpg";
import { ShopContext } from "../../context/ShoppingContext";
import { AboutData, AboutPartnersData} from "../../data/AboutData";
import AboutCard from "./AboutCard";
import "./AboutPageStyles.css";
import AchievementElementor from "../../components/AchievementElementor";
import HeroBanner from "../../components/HeroBanner";
import PartnersSlideScreen from "../../components/PartnersSlideScreen";

const AboutUs = () => {

  const {getTotalQuantity} = useContext(ShopContext);
  const totalQuantity = getTotalQuantity();

  const aboutData = [
    {
      id: 1,
      heading: "About",
      subHeading: "Auto Carz Corp",
      additionalHeading: "Read More About Us",
      image: image,
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor quos eum deleniti accusantium odio corporis, temporibus vitae repellendus doloremque sint commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia veniam dolor saepe? Nesciunt ipsam error, quidem enim explicabo suscipit sit vitae voluptas itaque tenetur, totam excepturi officiis? Molestiae, doloremque."
    }
  ];

  return (
    <div className="about-page">
      <Navbar cartCount={totalQuantity}/>
      <HeroBanner
        data={aboutData}
        customClass="about-banner"
      />
      <div className="about-wrapper">
        <h1>Know About Us</h1>
        <div className="about-content">
          {AboutData.map(item => (
            <AboutCard data={item} key={item.id}/>
          ))}
        </div>
      </div>
      <AchievementElementor/>

      <PartnersSlideScreen 
        custom
        data={AboutPartnersData}
      />
    </div>
  );
}

export default AboutUs;