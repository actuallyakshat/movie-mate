import { FaUserFriends } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { PiGenderIntersexDuotone } from "react-icons/pi";
import { IoTimerOutline } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Features = () => {
  return (
    <div className="pt-10 pb-24">
      <h1 className="font-Kanit font-bold text-5xl text-center text-white py-8">
        Why <span className="text-[#75adad]">Movie Mate?</span>
      </h1>
      <VerticalTimeline lineColor="#75adad">
        <VerticalTimelineElement
          icon={<FaUserFriends className="text-white" />}
          iconStyle={{ background: "#040d12", transform: "scale(1)" }}
        >
          <h1 className="font-bold text-3xl mt-[-15px] text-darkGreen font-Konit">
            Smart Movie Buddies Matching
          </h1>
          <p>
            Connect with individuals who share your movie taste, thanks to our
            intelligent matching algorithm. Movie Mate ensures you find
            like-minded companions for the ultimate cinematic experience.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        icon={<IoLockClosed className="text-white font-bold"/>}
          iconStyle={{ background: "#040d12", transform: "scale(1)" }}
        >
          <h1 className="font-bold text-3xl mt-[-15px] text-darkGreen font-Konit">
            End-to-End Encrypted Chats
          </h1>
          <p className="">
            Enjoy secure and private conversations with your movie buddies.
            Movie Mate employs end-to-end encryption for all chats, prioritizing
            the confidentiality and privacy of your discussions.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        icon={<PiGenderIntersexDuotone className="text-white scale-[1.4]"/>}
          iconStyle={{ background: "#040d12", transform: "scale(1)" }}
        >
          <h1 className="font-bold text-3xl mt-[-15px] text-darkGreen font-Konit">
            Gender-Specific Searching:
          </h1>
          <p>
            Tailor your movie buddy search with gender-specific preferences.
            Whether you are looking for male or female companions, Movie Mate
            allows you to connect with others based on your preferences and
            comfort level.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        icon={<IoTimerOutline className="text-white scale-125"/>}
          iconStyle={{ background: "#040d12", transform: "scale(1)" }}
        >
          <h1 className="font-bold text-3xl mt-[-15px] text-darkGreen font-Konit">
            Real-Time Movie Suggestions
          </h1>
          <p>
            Receive instant movie recommendations based on your current
            preferences and mood. Movie Mate&apos;s real-time suggestions ensure
            you always have exciting movie options at your fingertips.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        icon={<BiCameraMovie className="text-white scale-125"/>}
          iconStyle={{ background: "#040d12", transform: "scale(1)" }}
        >
          <h1 className="font-bold text-3xl mt-[-15px] text-darkGreen font-Konit">
            Interactive Movie Events
          </h1>
          <p>
            Participate in interactive movie events and themed nights hosted by
            Movie Mate. Engage in live discussions, polls, and trivia, creating
            a vibrant and communal movie-watching experience.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Features;
