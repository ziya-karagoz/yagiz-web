import Carousel from "../carousel";
export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Hizmetlerimiz</h2>

          <p>
            Devlet ve özel sektördeki bir çok faaliyet alanlarımız aşağıda yer
            almaktadır.
          </p>
          <div style={{ height: "400px" }}>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};
