import React, { Component } from "react";
import aboutImg from "../../assets/images/about-image.png";
import blogImg1 from "../../assets/images/blogs/blog-image1.png";
import blogImg2 from "../../assets/images/blogs/blog-image2.png";
import blogImg3 from "../../assets/images/blogs/blog-image3.png";
import instegram from "../../assets/images/contacts/instegram.png";
import location from "../../assets/images/contacts/location.png";
import message from "../../assets/images/contacts/message.png";
import phone from "../../assets/images/contacts/phone.png";
import twitter from "../../assets/images/contacts/twitter.png";
import youtube from "../../assets/images/contacts/youtube.png";
import person from "../../assets/images/cooking-image.png";
import person2 from "../../assets/images/Ellipse.png";
import gift1 from "../../assets/images/golden1.png";
import gift2 from "../../assets/images/golden2.png";
import logo from "../../assets/images/Logo.png";
import menuImg1 from "../../assets/images/menu/menu1.png";
import menuImg10 from "../../assets/images/menu/menu10.png";
import menuImg11 from "../../assets/images/menu/menu11.png";
import menuImg12 from "../../assets/images/menu/menu12.png";
import menuImg2 from "../../assets/images/menu/menu2.png";
import menuImg3 from "../../assets/images/menu/menu3.png";
import menuImg4 from "../../assets/images/menu/menu4.png";
import menuImg5 from "../../assets/images/menu/menu5.png";
import menuImg6 from "../../assets/images/menu/menu6.png";
import menuImg7 from "../../assets/images/menu/menu7.png";
import menuImg8 from "../../assets/images/menu/menu8.png";
import menuImg9 from "../../assets/images/menu/menu9.png";
import dish from "../../assets/images/special/Exotic-dishes.png";
import fresh from "../../assets/images/special/Fresh-food.png";
import chef from "../../assets/images/special/skilled-Chef.png";
import stufImg2 from "../../assets/images/staff/chef.png";
import stufImg1 from "../../assets/images/staff/dish.png";
import stufImg3 from "../../assets/images/staff/team.png";
import BlogCard from "../../components/BlogCrad/BlogCard";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import FoodSection from "../../components/FoodSection/FoodSection";
import FooterInfo from "../../components/FooterInfo/FooterInfo";
import Logo from "../../components/Logo/Logo";
import MenuItem from "../../components/MenuItem/MenuItem";
import Navbar from "../../components/Navbar/Navbar";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SpecialCard from "../../components/SpecialCard/SpecialCard";
import StuffItem from "../../components/StuffItem/StuffItem";
import "./style.css";
class HomePage extends Component {
  render() {
    return (
      <>
        <div className="section1" id="home">
          <Navbar />
          <div className="section1Details">
            <h3 className="section1Title">Welcome To Golden View Dine</h3>
            <span className="section1Description">
              Explore the authentic vegan dishes with your friends and family
            </span>
            <Button title="Read More" />
          </div>
        </div>
        <div className="section2" id="about">
          <Container>
            <FoodSection
              title="About Us"
              description="Discover The Taste Of Worldclass Vegan Dishes From The Kitchen Of Go Green Dine"
              body="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras. Quisque Commodo Mattis Ornare A Nec Odio. Pulvinar Orci, Egestas Eget Nulla Duis At Iaculis Nunc, Elit. Nibh Auctor Purus Nunc Tellus Pellentesque Nibh Mattis. Malesuada Integer Consectetur. Imperdiet Aliquam Quam Mauris Semper Suscipit. Molestie Maecenas Interdum Pharetra Id Velit Sed Nec.Tetur Sit Sagittis Pretium Eget Vitae Semper Pellentesque Pellentesque."
              btnName="Read More"
              img={aboutImg}
            />
          </Container>
        </div>
        <div className="section3" id="special">
          <div className="section3Heading">
            <SectionHeading
              title="Special"
              description="What Makes Us Special"
            />
          </div>
          <div className="section3Cards">
            <SpecialCard
              img={fresh}
              title="Fresh Food"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras."
            />
            <SpecialCard
              img={chef}
              title="Skilled Chef"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras."
            />
            <SpecialCard
              img={dish}
              title="Exotic Dishes"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras."
            />
          </div>
        </div>
        <div className="section4" id="menu">
          <div className="section3Heading">
            <SectionHeading
              title="Straight From Kitchen"
              description="Our Menu"
            />
          </div>
          <Container>
            <div className="section4Menus">
              <MenuItem
                img={menuImg1}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 222"
              />
              <MenuItem
                img={menuImg2}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 190"
              />
              <MenuItem
                img={menuImg3}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 135"
              />
              <MenuItem
                img={menuImg4}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 590"
              />
              <MenuItem
                img={menuImg5}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 190"
              />
              <MenuItem
                img={menuImg6}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 130"
              />
              <MenuItem
                img={menuImg7}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 185"
              />
              <MenuItem
                img={menuImg8}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 200"
              />
              <MenuItem
                img={menuImg9}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 148"
              />
              <MenuItem
                img={menuImg10}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 200"
              />
              <MenuItem
                img={menuImg11}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 130"
              />
              <MenuItem
                img={menuImg12}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet"
                code="Rs 185"
              />
            </div>
          </Container>
        </div>
        <div className="section5">
          <div className="section5Imgs">
            <img src={gift1} alt="" />
            <img src={gift2} alt="" />
          </div>
          <div className="section5Details">
            <div className="section3Heading">
              <SectionHeading
                title="Come join us for a lunch this weekend and enjoy"
                description="FLAT 10% OFF"
                toggle
              />
            </div>
            <Button title="Book Table" />
          </div>
          <div className="section5Imgs">
            <img src={gift1} alt="" />
            <img src={gift2} alt="" />
          </div>
        </div>
        <div className="section2">
          <Container>
            <FoodSection
              title="Cooking ingredients"
              description="What Goes In"
              body="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras. Quisque Commodo Mattis Ornare A Nec Odio. Pulvinar Orci, Egestas Eget Nulla Duis At Iaculis Nunc, Elit. Nibh Auctor Purus Nunc Tellus Pellentesque Nibh Mattis. Malesuada Integer Nulla Orci Convallis Sit. At Libero Lacus, Eget Fermentum Sed Turpis Curabitur Donec Consectetur. Imperdiet Aliquam Quam Mauris Semper Suscipit."
              btnName="Read More"
              img={person}
            />
          </Container>
        </div>
        <div className="section6">
          <StuffItem img={stufImg1} number="250" title="Delicacy" />
          <StuffItem img={stufImg2} number="10" title="Renowed Chefs" />
          <StuffItem img={stufImg3} number="30" title="Members" />
        </div>
        <div className="section7">
          <div className="section3Heading">
            <SectionHeading
              title="Reviews"
              description="Words From Our Food Lovers"
            />
          </div>
          <ReviewCard
            img={person2}
            name="Alex andrina"
            description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin Hendrerit A Amet Viverra. Nunc Pretium In Amet At Mattis Cras. Quisque Commodo Mattis Ornare A Nec Odio. Pulvinar Orci, Egestas Eget Nulla Duis At Iaculis Nunc, Elit."
          />
        </div>
        <div className="section8" id="blogs">
          <div className="section3Heading">
            <SectionHeading
              title="Blogs"
              description="Words From Our Food Lovers"
            />
          </div>
          <div className="section8Blogs">
            <BlogCard
              img={blogImg1}
              body="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin"
              title="Cooking Dining Experience"
            />
            <BlogCard
              img={blogImg2}
              toggle
              body="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin"
              title="Cooking Dining Experience"
            />
            <BlogCard
              img={blogImg3}
              body="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sollicitudin"
              title="Cooking Dining Experience"
            />
          </div>
        </div>
        <div className="section9">
          <div className="section9One">
            <div className="section9Logo">
              <Logo logo={logo} />
              <h3>Gloden veiw dine</h3>
            </div>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
              Sollicitudin
            </p>
            <div className="section9Icons">
              <img src={youtube} alt="" />
              <img src={instegram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
          <div className="section9Two">
            <h3> Other Links</h3>
            <ul>
              <li>Privacy policy </li>
              <li>Terms & Condition</li>
              <li>Privacy policy </li>
              <li>Privacy policy </li>
              <li>Privacy policy </li>
            </ul>
          </div>
          <div className="section9Three">
            <h3>Contact Us</h3>
            <div>
              <FooterInfo img={message} title="Gogreendineservice@Gmail.Com" />
              <FooterInfo img={location} title="Gogreendineservice@Gmail.Com" />
              <FooterInfo img={phone} title="Gogreendineservice@Gmail.Com" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HomePage;
