import "./timeline.css";

export default function TimeLineItem({ data }) {
  console.log(data);

  return (
    <div className="timeline-container">
      <div className="timeline ">
        {data.map((timeline, index) => (
          <div key={index} className="timeline-item">
            <span>{timeline.time}</span>
            <p> {timeline.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
