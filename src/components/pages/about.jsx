import { motion } from "framer-motion";

export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true, amount: 0.8 }}
            className='col-xs-12 col-md-6'
          >
            {" "}
            <img src='img/blkchn1.gif' className='img-responsive' alt='' />
          </motion.div>
          <div className='col-xs-12 col-md-6'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                x: [300, 0],

                opacity: 1,
                transition: {
                  type: "tween",
                  bounce: 0.9,
                  duration: 1,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              className='about-text'
            >
              <h2>Hakkımızda</h2>

              <p>{props.data ? props.data.paragraph : "loading..."}</p>

              <h3>Neden bizimle çalışmalısınız?</h3>

              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
