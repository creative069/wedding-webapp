import { useState, useEffect } from "react";
import Countdown from "./Countdown";
import "./Slideshow.css";

const addToCalendar = () => {
  const event = {
    title: "Robin & Pavithra Wedding",
    start: "20260412T090000",
    end: "20260412T210000",
    location: "Hebri, Karnataka, India",
    details: "Join us as we celebrate the wedding of Robin & Pavithra!"
  };

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.details)}`;

  window.open(googleCalendarUrl, "_blank");
};

const slides = [
  {
    image: "/images/pavi-robin-slide-2.jpeg",
    position: "center center"
  },
  {
    image: "/images/pavi2.jpeg",
    position: "center 6%" 
  },
  {
    image: "/images/pavi3.jpeg",
    position: "center 15%"
  }
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <><div className="slideshow">
          {slides.map((slide, index) => (
              <div
                  key={index}
                  className={index === current ? "slide active" : "slide"}
              >
                  <img src={slide.image} className="slide-image" style={{ objectPosition: slide.position }} alt="Bride and Groom Portrait" />
                  {/* Dark overlay */}
                  <div className="overlay" />

                  {/* Content container */}
                  <div className="content">
                      <h1><strong>Robin</strong> <span className="gold">&amp;</span> <strong>Pavithra</strong></h1>
                      <p className="subtitle">ARE GETTING MARRIED</p>
                      <p className="date-location">April 12, 2026 · Hebri, India</p>

                      {/* Countdown always visible */}
                      <Countdown />

                      <div className="dots">
                          {slides.map((_, i) => (
                              <span key={i} className={i === current ? "dot active" : "dot"} onClick={() => setCurrent(i)} />
                          ))}
                      </div>

                      <button className="calendar-btn" onClick={addToCalendar}>ADD TO CALENDAR</button>
                  </div>
              </div>
          ))}
      </div><section className="invitation-section">
              <p className="invitation-label">WEDDING INVITATION</p>
              <h2 className="invitation-heading">Join Our Celebration</h2>
              <p className="invitation-body">
                  Please join us as we say "I do" and begin our new life together. With the blessings of<br />
                  our families, we invite you to celebrate love, laughter, and togetherness on our<br /> wedding day.
              </p>
              <p className="invitation-note">Your presence will make our day even more special.</p>
          </section></>
  );
}