export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div
                animate={{
                  x: 0,
                  backgroundColor: "#000",
                  boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                  position: "fixed",
                  transitionEnd: {
                    display: "none",
                  },
                }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
