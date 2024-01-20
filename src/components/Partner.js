import google from "@/assets/img/partners/google.png";
import trello from "@/assets/img/partners/trello.png";
import monday from "@/assets/img/partners/monday.png";
import notion from "@/assets/img/partners/notion.png";
import slack from "@/assets/img/partners/slack.png";
import Image from "next/image";

const imgPartners = [
  {
    id: 1,
    src: google,
  },
  {
    id: 2,
    src: trello,
  },
  {
    id: 3,
    src: monday,
  },
  {
    id: 4,
    src: notion,
  },
  {
    id: 5,
    src: slack,
  },
];
const Partner = () => {
  return (
    <div className="bg-white_banner">
      <div className="flex px-4 flex-wrap flex-col sm:flex-row gap-5 justify-between items-center max-w-screen-xl m-auto py-10 bg-white_banner">
        {imgPartners.map((partner) => (
          <Image key={partner.id} src={partner.src} alt="partners" />
        ))}
      </div>
    </div>
  );
};

export default Partner;
