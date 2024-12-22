import React from 'react';

export default function AboutUs() {
  return (
    <div className="container text-center">
      <h2>About Us</h2>
      <p>
        <strong>Our Mission:</strong> To connect loving families with cats in
        need of a forever home. We strive to create a world where every cat is
        cared for and loved.
      </p>
      <p>
        <strong>Our History:</strong> Founded in 2024, Purrfect Adoption has
        successfully facilitated thousands of adoptions. Our journey began
        with a single goal: to rescue and rehome as many cats as possible.
      </p>
      <img
        src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/457470980_1921671501604532_6985834528486305085_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFJYbAw8xmgoOGOKpiA_FIQ72EItiIQHe3vYQi2IhAd7fqW6QZ8vr4YVrljA7d_pqXlQvk1uGh3CMbTziHDt_Sw&_nc_ohc=MYVS1V52cXoQ7kNvgFEzV1s&_nc_zt=23&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ABwzkQYObblbOZZSiWP4NgQ&oh=00_AYD6p0E879ZgM2piWjG6g528ktPeQnZPPoNl7k74XN45zg&oe=676CC51C"
        alt="Abdullah Al Fahim"
        className="img-fluid rounded-circle mt-4"
        style={{ width: '150px', height: '150px' }}
      />
      <h4 className="mt-3">Abdullah Al Fahim</h4>
      <p>Founder of Purrfect Adoption</p>

      <div className="mt-4">
        <h5>Follow Us</h5>
        <div className="d-flex justify-content-center gap-3 mt-2">
          <a
            href="https://www.facebook.com/share/QX5JnpJZQFYTdkBN/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook fs-3"></i>
          </a>
          <a
            href="https://www.instagram.com/fahims_tagram/profilecard/?igsh=MXl6N3hxc21odnAz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram fs-3"></i>
          </a>
        </div>
      </div>

      <div className="mt-4">
        <h5>Contact Information</h5>
        <p>
          <strong>WhatsApp/Phone Number:</strong> <a href="tel:+8801940827961">01940827961</a>
        </p>
      </div>
    </div>
  );
}
