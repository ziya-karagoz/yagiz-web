import { motion } from "framer-motion";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
                viewport={{ once: true, amount: 0.8 }}
                className='col-md-8 col-md-offset-2 intro-text'
              >
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Daha Fazlası
                </a>{" "}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
