

import Footer from '../component/Footer/Footer';
import HeroCarousel from '../component/Hero/Hero';
import EcommerceHomepage from '../component/CardSection/CardSection';
import MobileCarousel from '../component/Hero/MobileCarousel';
import AmazonNavbar from '@/component/Header/Header';
import ProductList from '@/component/ProductList';






export default function Home() {
  return (
    <div className="">
    {/* Header */}
    <AmazonNavbar />
    {/* <Header /> */}
    <ProductList />
      {/* Hero Section */}
      <div className=" bg-gray-100">
        {/* Hero Section */}
        <div className="relative z-10" >
          {/* <HeroCarousel /> */}
          {/* <MobileCarousel/> */}

        </div>

        {/* Move EcommerceHomepage Up */}
        <div className=" relative -mt-84 z-40 ">
          {/* <EcommerceHomepage /> */}
        </div>
      </div>




      {/* There will be some content here */}
      {/* Footer */}
      {/* <Footer /> */}

    </div>
  );
}