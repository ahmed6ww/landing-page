
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

type Phase = {
    title: string;
    points: string[];
  };
  

export default function TimelineElement({title, points} : Phase ) {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
         contentStyle={{
            background: 'rgb(22 22 22)',
            color: "white",
            boxShadow: 'none',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            textAlign: 'left',
            padding: '1.3rem 2rem',
            borderRadius: '15px',
          }}
          contentArrowStyle={{
            borderRight: '14px solid rgb(22 22 22)',
          }}
        icon={<p className="text-center flex justify-center items-center"></p>}
        iconStyle={{
            background: 'rgb(22 22 22)',
            fontSize: '1rem',
            border: '4px solid #f89b1f',
          }}
        visible={inView}
        iconClassName="bg-black"
      >
        <h3 className="text-[1.5rem] font-bold text-primary mb-4">{title}</h3>

        <ul className="list-disc space-y-2"> 

        {points.map((point, index) => {
            return <li key={index} className="pl-1 text-[0.8125rem]  font-normal tracking-wider">{point}</li>
        })}
</ul>
      </VerticalTimelineElement>
    </div>
  );
}