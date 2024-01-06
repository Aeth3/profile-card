import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  avatar: "images/avatar.jpg",
  name: "Ama Junriel Damalan",
  intro:
    "Adaptable person with knowledge of gathering, transforming, and arranging data for analysis to aid in making decisions. Excellent knowledge and skills in SQL, spreadsheets, Tableau, and other platforms needed for efficient data analysis. solid organizational and communication skills. analytical abilities. Just finished the challenging, practical Google Data Analytics Certificate program, which covers every aspect of the data analysis process.",
  skillList: [
    { skill: "HTML/CSS", level: "Advance", color: "red" },
    { skill: "Flutter", level: "Intermediate", color: "blue" },
    { skill: "Dart", level: "Intermediate", color: "green" },
    { skill: "Python", level: "Advance", color: "yellow" },
    { skill: "R", level: "Advance", color: "pink" },
    { skill: "JavaScript", level: "Beginner", color: "aqua" },
    { skill: "React", level: "Beginner", color: "purple" },
  ],
};
function App() {
  return (
    <body className="body">
      <div className="card">
        <Avatar avatar={profile.avatar} />
        <div className="data">
          <Intro profile={profile} />

          <SkillList skills={profile.skillList} />
        </div>
      </div>
    </body>
  );
}

function Avatar({ avatar }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img className="avatar" src={avatar} />;
}

function Intro({ profile }) {
  return (
    <div>
      <h1 className="h1">{profile.name}</h1>
      <p>{profile.intro}</p>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((element) => (
        <Skill skill={element} />
      ))}
    </div>
  );
}
function Skill({ skill }) {
  var level;
  if (skill.level === "Advance") {
    level = "💪";
  } else if (skill.level === "Intermediate") {
    level = "👍";
  } else {
    level = "👶";
  }
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill}</span>
      <span>{level}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
