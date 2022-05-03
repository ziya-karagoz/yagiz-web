import "../../src/styles/featurestyle.css";
export const Features = (props) => {
  return (
    <div
      id='features'
      className='text-center'
      style={{ justifyContent: "center", display: "flex" }}
    >
      <div className='' style={{ width: "85%" }}>
        <div className='col-md-12  section-title'>
          <div class='page-section'>
            <div class='' style={{ justifyContent: "center" }}>
              <div
                className='features-side'
                style={{
                  flexDirection: "row",
                  display: "flex",
                  height: "auto",
                }}
              >
                <div
                  class='features-side-text'
                  style={{ marginRight: "30px", textAlign: "center" }}
                >
                  <h2 class='title-section'>
                    Profesyonel{" "}
                    <span class='fg-primary'>
                      {" "}
                      <a href='#services'>Hizmetler</a>
                    </span>{" "}
                    İçin Yanınızdayız...
                  </h2>

                  <p>
                    Dijitalleşme, yönetim anlayışında ve iş yapış biçiminde
                    köklü değişimler yaratıyor. Yeni nesil teknolojiler ile
                    geliştirilen otomasyonlar büyük avantajlar sağlıyor. Bununla
                    birlikte bu avantajlar özelleştirme ve entegrasyon
                    ihtiyaçlarının karşılanmasını gerektiriyor.{" "}
                  </p>

                  <p>
                    Dijitalleşme, yönetim anlayışında ve iş yapış biçiminde
                    köklü değişimler yaratıyor. Yeni nesil teknolojiler ile
                    geliştirilen otomasyonlar büyük avantajlar sağlıyor. Bununla
                    birlikte bu avantajlar özelleştirme ve entegrasyon
                    ihtiyaçlarının karşılanmasını gerektiriyor.{" "}
                  </p>

                  <p>
                    Dijitalleşme, yönetim anlayışında ve iş yapış biçiminde
                    köklü değişimler yaratıyor. Yeni nesil teknolojiler ile
                    geliştirilen otomasyonlar büyük avantajlar sağlıyor. Bununla
                    birlikte bu avantajlar özelleştirme ve entegrasyon
                    ihtiyaçlarının karşılanmasını gerektiriyor.{" "}
                  </p>

                  <a href='#services' class='btn btn-primary mt-4'>
                    Tüm Hizmetlere Göz Atın
                  </a>
                </div>
                <div class='features-side-image' style={{ width: "100%" }}>
                  <img
                    src='./img/blkchn2.gif'
                    style={{ width: "100%" }}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
