import React from "react";

export default function Contact() {
  return (
    <div>
      <h2 id="contact" className="contactTitle">
        Contact
      </h2>
      <div className="contactContainer">
        <div className="itemContainer">
        <h4 className="contactSubtitle">Where to find me</h4>
        <p>
          You can reach me on my socials or email, whatever is most convenient!
        </p>
       
          <div className="socialItemContainer">
            <img
              className="contactIcons"
              src="https://lh3.googleusercontent.com/8_nxlKGnnLGYvfGF2C96qaHKGZchi1xGXuhvVjeKFbeGRSfU1gIt7bLwgGEFDu5wjR5rizh1EOaqZjJ_CktPXyEcovuzr3n3UtH7e9GkWzcnY0xxKVN-mM2uv5_W5LvJ3XozEine9g=w2400"
            />
            <p><strong>Email:</strong> jackmitchell2398@gmail.com</p>
          </div>

          <div className="socialItemContainer">
            <img
              className="contactIcons"
              src="https://lh3.googleusercontent.com/CvLijeWUssDrX6KHvhGmv-eix8cnZpzFV23S7efrY1AekksT7Q6WVh9FeaO5uqLx50yKRjJJmX0CXT9hcimHKaST9TTj_UfDgiy_L8V6Udt-D0ZPg7ClSp-UF0q4ULM_gO2LQXAKSg=w2400"
            />
            <p><strong>LinkedIn:</strong> Jack Mitchell</p>
          </div>

          <div className="socialItemContainer">
            <img
              className="contactIcons"
              src="https://lh3.googleusercontent.com/qTB3Vil42uZlxoYC8ooG1nfHQPKjQ3zWbi0C-ieEJZVLl-l9o32JMzKoaI_grSXnIAlce-GZVhOBwS4ApbmF65xp_9HJqA5NW5WztQWWWMHsCGmLjLaY2wGuV1n3QRgZ7INXRHI8XQ=w2400"
            />
            <p><strong>Website:</strong> jackmitchell.info</p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
