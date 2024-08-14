import { useState, ChangeEvent } from "react";
import "tldraw/tldraw.css";
import Section from "./common/layout/Section";
import SubSection from "./common/layout/SubSection";
import TimeLine from "./TimeLine";
import Header from "./common/heading/Header";

type EventData = {
  text: string;
  subtext: string;
};

export default function TldrawComponent() {
  const [numEvents, setNumEvents] = useState<number>(0);
  const [events, setEvents] = useState<EventData[]>([]);

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumEvents(Number(e.target.value));
  };

  const handleGenerateEvents = () => {
    if (numEvents < 1) {
      console.error("Number of events must be at least 1");
      return;
    }

    const newEvents: EventData[] = Array.from(
      { length: numEvents },
      (_, index) => ({
        text: `Subheading ${index + 1}`,
        subtext: `Description ${index + 1}`,
      })
    );

    setEvents(newEvents);
  };

  return (
    <Section className="flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <Header
          heading="Create high quality slides with AI"
          subheading="Try the individual slide creation experience. Full product coming soon...."
          className="flex justify-center items-center text-center tablet:mb-8 mb-5"
          headclassName="max-w-[100vh] laptop:text-6xl mobile:text-5xl text-4xl"
          />
        <button className="max-w-[256px] bg-black text-white p-2 px-8 rounded-xl">
          Try Now
        </button>
      </div>
      <Section className="grid laptop:grid-cols-2 grid-cols-1">
        <SubSection className="w-full h-[50vh]">
          <TimeLine events={events} />
        </SubSection>
        <SubSection className="w-full h-[50vh] flex flex-col justify-center">
          <span className="text-4xl font-bold text-center">Alai Coding Challenge</span>
          <span className="text-xl text-center">Tldraw Timeline Implementation</span>
          <div className="flex flex-col gap-4 items-center">
            <input
              type="number"
              min="1"
              value={numEvents}
              onChange={handleNumberChange}
              placeholder="Enter number of events"
              className="border p-2 mb-2 rounded-md"
            />
            <button
              onClick={handleGenerateEvents}
              className="max-w-[256px] bg-black text-white p-2 px-4 rounded-xl"
            >
              Generate Events
            </button>
          </div>
        </SubSection>
      </Section>
    </Section>
  );
}
