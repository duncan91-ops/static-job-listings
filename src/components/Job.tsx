import Wrapper from "../assets/wrappers/Job";
import Tag from "./Tag";

type JobProps = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

const Job = ({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: JobProps) => {
  return (
    <Wrapper className={featured ? "featured" : ""}>
      <div className="content">
        <div className="logo-box">
          <img src={logo} alt="company logo" className="logo" />
        </div>
        <div className="content__text">
          <header className="header">
            <p className="company">{company}</p>
            {isNew && <p className="new">NEW!</p>}
            {featured && <p className="featured">FEATURED</p>}
          </header>
          <h2 className="position">{position}</h2>
          <div className="details">
            <p className="detail">{postedAt}</p>
            <div className="fullstop"></div>
            <p className="detail">{contract}</p>
            <div className="fullstop"></div>
            <p className="detail">{location}</p>
          </div>
        </div>
      </div>
      <div className="tags">
        <Tag text={role} />
        <Tag text={level} />
        {languages.map((language) => (
          <Tag key={language} text={language} />
        ))}
        {tools.map((tool) => (
          <Tag key={tool} text={tool} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Job;
