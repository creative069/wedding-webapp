import React, { useState } from "react";
import "./WeddingCelebrations.css";

const events = [
  {
    title: "The Musical Eve",
    date: "April 11, 2026",
    time: "5:30 PM onwards",
    venue: "Pavithra & Family Residence ,Hebri, Karnataka",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3880.3700732867624!2d74.94383067508485!3d13.451270286909965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDI3JzA0LjYiTiA3NMKwNTYnNDcuMSJF!5e0!3m2!1sen!2sin!4v1772883634257!5m2!1sen!2sin",
    address: "Hebri, Udupi District, Karnataka"
  },
  {
    title: "Reception",
    date: "April 13, 2026",
    time: "6:30 PM onwards",
    venue: "Pavithra & Family Residence ,Hebri, Karnataka",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3880.3700732867624!2d74.94383067508485!3d13.451270286909965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDI3JzA0LjYiTiA3NMKwNTYnNDcuMSJF!5e0!3m2!1sen!2sin!4v1772883634257!5m2!1sen!2sin",
    address: "Hebri, Udupi District, Karnataka"
  },
  {
    title: "The Big Day",
    date: "April 12, 2026",
    time: "Muhurtha 9:03 AM - 9:36 AM",
    venue: "Buntara Bhavan ,Hebri, Karnataka",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.2399127380127!2d74.99491857463174!3d13.459303286902749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb60767265d4f5%3A0x823819d5bc2049ae!2sBuntara%20Bhavana!5e0!3m2!1sen!2sin!4v1772880553105!5m2!1sen!2sin",
    address: "Hebri, Udupi District, Karnataka"
  }
];

function FlipCard({ event }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-date">{event.date}</p>
          <p className="event-time">{event.time}</p>
          <p className="event-venue">{event.venue}</p>
          <p className="event-hint">HOVER OR TAP FOR THE VENUE DETAILS</p>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <p className="back-venue">{event.address}</p>
          <iframe
            title={event.title}
            src={event.mapUrl}
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "6px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
            target="_blank"
            rel="noreferrer"
            className="directions-link"
            onClick={(e) => e.stopPropagation()}
          >
            GET DIRECTIONS →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function WeddingCelebrations() {
  return (
    <section className="celebrations-section">
      <h2 className="celebrations-heading">Wedding Celebrations</h2>
      <div className="cards-top-row">
        <FlipCard event={events[0]} />
        <FlipCard event={events[1]} />
      </div>
      <div className="cards-bottom-row">
        <FlipCard event={events[2]} />
      </div>
    </section>
  );
}
