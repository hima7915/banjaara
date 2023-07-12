import "bootstrap/dist/css/bootstrap.css";
import "./template.css";

function Template() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="image-frame mb-4">
            <div className="image-container mb-5">
              <img src="/images/SaHi.jpg" alt="SaHi" />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">Text will come here!</div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="image-frame mb-4">
            <div className="image-container mb-5">
              <img src="/images/SaHi.jpg" alt="SaHi" />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">Text will come here!</div>
      </div>
    </>
  );
}

export default Template;
