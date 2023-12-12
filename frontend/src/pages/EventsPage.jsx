import React from "react";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
//import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  return (
        <div>
          <Header activeHeading={4} />
          <EventCard active={true} />
          <EventCard active={true} />
        </div>
  );
};

export default EventsPage;
