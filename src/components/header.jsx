import { motion } from "framer-motion";

export const Header = (props) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <motion.div
                variants={item}
                initial={item.hidden}
                transition={{ repeat: 0, duration: 2 }}
                animate={{
                  backgroundColor: "transparent",
                  opacity: 1,
                }}
                exit={{ opacity: 1 }}
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
                  Learn More
                </a>{" "}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
