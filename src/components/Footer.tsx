import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer
      className="text-white py-2"
      style={{ backgroundColor: "#303030", maxWidth: "100%", width: "auto" }}
    >
      <div className="container d-flex justify-content-between text-center">
        <div>
          <p className="mb-0">
            ©2024 Coffee Concepts Retail Co., Ltd. All rights reserved.
          </p>
        </div>
        <div>
          <p className="mb-0">Starbucks Thailand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
