
import './footer.css' 

const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="inner">
          <div className="social">
                  <a href='https://www.facebook.com/eny.hovhannisyan'><i className="fa-brands fa-square-facebook"></i></a>
                  <a href="https://www.linkedin.com/in/annie-hovhannisyan-b6697a25b/"><i className="fa-brands fa-linkedin"></i></a>
                  <a href='https://github.com/hovhannisyanannie'><i className="fa-brands fa-square-github"></i></a>

          </div>
          <div className="content">
            <h3>The Star Wars API</h3>
          </div>
        </div>

        <p>Created by <span>Ani Hovhannisyan</span>|All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer