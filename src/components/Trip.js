import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/10img.jpg";
import Trip2 from "../assets/11img.jpg";
import Trip3 from "../assets/12img.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Services</h1>
      <p>Come and witness the awesome manifestation of the Holy Spirit</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Awesome Wonder"
          text="One of the primary works of the Holy Spirit is to bring men and women into a meaningful encounter with the Risen Christ. Guided by His Spirit, we can truly discover Jesus Christ and develop a genuine relationship with Him if we respond with total surrender and generosity. Soon enough, Christ’s love becomes the center of our lives and saturates us with joy and peace. Hence, when we have had a personal encounter with Jesus Christ by the Spirit’s power, our greatest desire is that our loved ones may"
        />
        <TripData
          image={Trip2}
          heading="Divine Rights"
          text="Who is the Holy Spirit? The Holy Spirit is a person, and is one of the three in the trinity: The Father, the Son, and the Holy Spirit. The Spirit is the active person that came to reside within the followers of Jesus Christ after Jesus had been crucified on the cross, and rose from the dead. This is laid out in the prophetic words of Acts in the Bible, particularly during Peter’s Sermon at Pentecost in Acts 2:17, where it talks about God pouring out his Spirit on to all people and them learning"
        />
        <TripData
          image={Trip3}
          heading="Heavenly Mandate"
          text="is the Holy Spirit who draws people towards salvation and sanctifies them. These works of the Spirit are inseparable. In fact, it would be an error to separate John’s view of the Holy Spirit and Luke’s Acts record of the Spirit. The Spirit was the initiator of salvation and the power to be sanctified. Romans chapter eight provides the clearest impact of the Spirit at work in the life of a follower. There is power to walk in the Spirit rather than in the old nature (v.4). Also, the Spirit changes"
        />
      </div>
    </div>
  );
}
export default Trip;
