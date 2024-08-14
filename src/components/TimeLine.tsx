import { TLShapeId, Tldraw, createShapeId } from "tldraw";
import "tldraw/tldraw.css";

type EventData = {
  text: string;
  subtext: string;
};

type Props = {
  events: EventData[];
};

export default function TimeLine({ events }: Props) {
  return (
    <Tldraw
      key={events.length}
      hideUi={true}
      onMount={(editor) => {
        console.log("Editor mounted with events:", events); 
        const shapeIds: TLShapeId[] = [];

        if (events.length < 2) {
          const placeholderId = createShapeId();
          shapeIds.push(placeholderId);
          editor.createShape({
            id: placeholderId,
            type: "text",
            x: 100,
            y: 250,
            isLocked: true,
            props: {
              text: "Not enough events to display timeline",
              color: "black",
            },
          });

          editor.zoomToFit();
        } 
        else {
          const padding = 50; 
          const eventSpacing = 200; 
          const totalWidth = (events.length - 1) * eventSpacing + padding * 2;

          const timelineLineId = createShapeId();
          shapeIds.push(timelineLineId);
          editor.createShape({
            id: timelineLineId,
            type: "geo",
            x: 100,
            y: 250,
            isLocked: true,
            props: {
              geo: "rectangle",
              w: totalWidth,
              h: 1,
              fill: "fill",
              color: "black",
            },
          });

          events.forEach((event, index) => {
            const x = 100 + padding + index * eventSpacing;
            const y = 230;

            const eventShapeId = createShapeId();
            shapeIds.push(eventShapeId);
            editor.createShape({
              id: eventShapeId,
              type: "geo",
              x: x,
              y: y + 12.5,
              isLocked: true,
              props: {
                geo: "ellipse",
                w: 15,
                h: 15,
                fill: "fill",
                color: "black",
              },
            });

            const vertLineId = createShapeId();
            shapeIds.push(vertLineId);
            editor.createShape({
              id: vertLineId,
              type: "geo",
              x: x + 7.5,
              y: y + (index % 2 === 0 ? 0 : 20),
              isLocked: true,
              props: {
                geo: "rectangle",
                w: 1,
                h: 20,
                fill: "fill",
                color: "black",
              },
            });

            const textShapeId = createShapeId();
            shapeIds.push(textShapeId);
            editor.createShape({
              id: textShapeId,
              type: "text",
              x: x - 50,
              y: y - 60 + (index % 2 === 0 ? -60 : 180),
              isLocked: false,
              props: {
                text: event.text,
                color: "black",
              },
            });

            const subtextShapeId = createShapeId();
            shapeIds.push(subtextShapeId);
            editor.createShape({
              id: subtextShapeId,
              type: "text",
              x: x - 50,
              y: y - 5 + (index % 2 === 0 ? -60 : 180),
              isLocked: false,
              props: {
                text: event.subtext,
                color: "grey",
              },
            });
          });

          editor.zoomToFit();
        }

        return () => {
          shapeIds.forEach((id) => {
            editor.deleteShape(id);
          });
        };
      }}
    />
  );
}
