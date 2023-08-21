import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import MountImg from "../assets/6img.jpg";
import MountImg2 from "../assets/7img.jpg";
import MountImg3 from "../assets/8img.jpg";
import MountImg4 from "../assets/9img.jpg";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Journey in Christ</h1>
      <p>Giving your life a meaning</p>
      <DestinationData
        className="first-des"
        heading="Untold Riches in Christ"
        text=" The Church of Our Lord Jesus Christ was the name of the church I
      attended during the last couple of weeks. It was my friends’ church
      that was located in Brazil, Indiana. It was a fairly small church
      compared to other churches I have been to. It was a primarily black
      church with a few other races that attended also. This church had a
      guy drumming during every song that was song. I found this church to
      be very different from the ones we discussed in class. This church
      service was interesting to me because the worship service was
      charismatic and it inspired many that were in the church at the
      time. During the time we spent in class talking about the culture of
      churches"
        img1={MountImg}
        img2={MountImg2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="New Life in Christ"
        text="The early Christian church had no buildings, at least not in the sense of what we would consider church buildings today. First century Christians were often persecuted and, as a result, often met in secret usually in homes. As the influence of Christianity spread, eventually buildings dedicated to worship were established and became what we know today as churches. In this sense, then, the church consists of people not buildings. Fellowship, worship and ministry are all conducted by people, not buildings. Church structures facilitate the role of God’s people, but they do not fulfill it."
        img1={MountImg3}
        img2={MountImg4}
      />
    </div>
  );
};
export default Destination;
