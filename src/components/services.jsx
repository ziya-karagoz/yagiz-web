import Slider from "react-slick";
import MultipleItems from "./carousel";
export const Services = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Hizmetlerimiz</h2>

          <p>
            Devlet ve özel sektördeki bir çok faaliyet alanlarımız aşağıda yer
            almaktadır.
          </p>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <MultipleItems />
        </div>
      </div>
    </div>
  );
};
