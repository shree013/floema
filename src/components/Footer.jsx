import React from 'react'

function Footer() {
  return (
    <footer className="footer-local" role="contentinfo">
      <div className="container">
        <div className="footer-local__main">
          <div className="footer-local__details">
            <h3>Visit Our Showroom</h3>
            <p>
              123 Design District<br />
              Lisbon, Portugal 1000-001
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+351210123456">+351 210 123 456</a><br />
              <strong>Email:</strong> <a href="mailto:hello@floema.com">hello@floema.com</a>
            </p>
            <ul className="footer-local__hours-list">
              <li><span>Monday-Friday</span> <span>9am - 6pm</span></li>
              <li><span>Saturday</span> <span>10am - 4pm</span></li>
              <li><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>
          <div className="footer-local__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.123456789!2d-9.139336!3d38.722252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a8a4d9c1f%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2sus!4v1630123456789!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              aria-label="Google map showing Floema showroom location in Lisbon"
            ></iframe>
          </div>
        </div>
        <div className="footer-local__bottom">
          <p className="footer-local__copyright">&copy; 2024 Floema. All Rights Reserved.</p>
          <nav className="footer-local__social" aria-label="Social media">
            <ul>
              <li>
                <a href="#" aria-label="Our Facebook Page">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Facebook</title>
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Our Instagram Profile">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.297-1.459.717-2.126 1.384S.926 3.356.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.297.784.717 1.459 1.384 2.126.667.666 1.342 1.089 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.784-.297 1.459-.718 2.126-1.384.666-.667 1.089-1.342 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.297-.784-.718-1.459-1.384-2.126C21.314 1.64 20.64 1.217 19.856.92c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.056-1.805-.249-2.227-.413-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.074-4.85c.056-1.17.249-1.805.413-2.227.217.562.477.96.896-1.382.42-.419.819.679 1.381-.896.422-.164 1.057.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer