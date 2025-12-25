import { useMemo } from "react";

function Works() {
  const myWorks = useMemo(() => [
    {
      id: 1,
      title: "AvtoKira",
      description: "Avtokira is a car rental website. The user can choose the car and book it. Rental companies can add their cars to the site. All users can add servise ads about cars.Users make vip ads for their cars.",
      use: ["Html", "CSS", "Javascript", "Django", "Postgresql"],
      github: "",
      link: "https://avtokira.com/",
    },
    {
      id: 17,
      title: "Entropicon",
      description: "Entropicon is AI based Applicant Tracking System (ATS).",
      use: ["React", "Redux", "Django", "Postgresql", "DRF"],
      github: "",
      link: "https://jobs.entropicon.com/",
    },
   {
  id: 18,
  title: "NaviPeople",
  description: "NaviPeople is an AI-powered HR analytics platform.",
  use: ["React", "Redux", "NextJs", "Django", "PostgreSQL", "DRF"],
  github: "",
  link: "https://navipeople.ai",
}
,
    {
  id: 19,
  title: "PeopleAtWork",
  description: "PeopleAtWork is a job marketplace platform that connects employers and job seekers by enabling companies to publish job listings and candidates to discover and apply for career opportunities",
  use: ["React", "NextJs", "Redux", "Django", "PostgreSQL", "DRF"],
  github: "",
  link: "https://peopleatwork.az/",
}
,
    {
      id: 16,
      title: "Hirpo",
      description: "Hirpo enables you to easily automate 70% of the solution process through the information available in the database. With Hirpo, you can effectively carry out the performance evaluation process of your employees.",
      use: ["React", "Redux", "Django", "Postgresql", "DRF"],
      github: "",
      link: "https://app.hirpo.net",
    },
    {
      id: 2,
      title: "Whisper of Verses",
      description: "Whisper of Verses website is designed for reading the Quran in Azerbaijani and Arabic languages. It includes daily prayer times and the Hijri calendar.",
      use: ["Html", "CSS", "Javascript"],
      github: "https://github.com/JahanaSultan/whisperofverses",
      link: "https://whisperofverses.com/",
    },
    {
      id: 3,
      title: "TravelGo",
      description:
        "TravelGo helps travel companies to sell tours, and at the same time, it is possible to obtain the necessary materials for travel from the market section.",
      use: ["React", "Redux", "Firebase"],
      github: "",
      link: "https://travelgotourism.netlify.app",
    },
    {
      id: 4,
      title: "YeMake",
      description:
        "yemake.com food blog. All users can share blog and recipe. Users can add recipe to recipe book, like and add comment",
      use: ["Html", "CSS", "Javascript", "Django", "Postgresql"],
      github: "",
      link: "https://jahanasultan.pythonanywhere.com/",
    },
    {
      id: 5,
      title: "Rembini E-Commerce",
      description:
        "The site of the store that sells men's accessories.",
      use: ["Html", "CSS", "Javascript"],
      github: "https://github.com/JahanaSultan/Rembini",
      link: "https://jahanasultan.github.io/Rembini/",
    },
    {
      id: 6,
      title: "Pixel Art",
      description: "Pixel art project. User can choose color and draw pixel images.",
      use: ["Html", "CSS", "Javascript"],
      github: "https://github.com/JahanaSultan/pixsel_art",
      link: "https://jahanasultan.github.io/pixsel_art/",
    },
    {
      id: 7,
      title: "Quiz App",
      description:
        " I use opentdb.com API for questions. User input name and difficulty, after questions display. Every game has 10 questions.",
      use: ["Html", "CSS", "Javascript", "opentdb.com"],
      github: "https://github.com/JahanaSultan/Quiz-App-Javascript.git",
      link: "https://jahanasultan.github.io/Quiz-App-Javascript/",
    },
    {
      id: 8,
      title: "1 minute Typing Speed Test",
      description: "This project is a typing speed test. The user can choose the time and start the test. After the test, the user can see the result.",
      use: ["Html", "CSS", "Javascript"],
      github: "https://github.com/JahanaSultan/typing-game",
      link: "https://jahanasultan.github.io/typing-game/",
    },
    {
      id: 9,
      title: "NoteApp",
      description: "Note app for note taking. API was written using the Django Rest Framework. It is possible to add, delete and update notes",
      use: ["Python", "Django", "DRF", "React"],
      github: "https://github.com/JahanaSultan/NoteApp.git",
      link: "",
    },
    {
      id: 10,
      title: "Directone Hotel Website Template",
      description: "Directone Hotel website, only use Html and Css.",
      use: ["Html", "CSS"],
      github: "https://github.com/JahanaSultan/Directone-Template.git",
      link: "https://jahanasultan.github.io/Directone-Template/",
    },
    // {
    //   id: 11,
    //   title: "Standart Javascript Calculator",
    //   description: "Standart calculator project.",
    //   use: ["Html", "CSS", "Javascript"],
    //   github: "https://github.com/JahanaSultan/Calculator-JS.git",
    //   link: "https://jahanasultan.github.io/Calculator-JS/",
    // },
    // {
    //   id: 12,
    //   title: "Analog Clock",
    //   description:
    //     "Analog watch project written with javascript and show time.",
    //   use: ["Html", "CSS", "Javascript"],
    //   github: "https://github.com/JahanaSultan/AnalogClock.git",
    //   link: "https://jahanasultan.github.io/AnalogClock/",
    // },
    // {
    //   id: 13,
    //   title: "Weather App",
    //   description:
    //     "Weather app use data openweather.com API. Search any city and see the result",
    //   use: ["Html", "CSS", "Javascript", "openweather.com"],
    //   github: "https://github.com/JahanaSultan/Weather-App.git",
    //   link: "https://jahanasultan.github.io/Weather-App/",
    // },
    {
      id: 14,
      title: "Student Performance System",
      description:
        "This system has 3 login buttons: teacher, student, and admin. Students can see your information and marks, teachers know the group and group students. Add and update the mark. Admin can add teacher, student, lesson, and group.",
      use: ["Python", "Tkinter", "Sqlite"],
      github:
        "https://github.com/JahanaSultan/Tkinter-Student-Managment-with-Sqlite3.git",
      link: "",
    },
    {
      id: 15,
      title: "Unbeatable TicTacToe",
      description:
        "I use python Tkinter to visualize this game. This game has 2 play types: single players and 2 players. The single-player type has 2 difficulty levels: intermediate and advanced. Advanced level I use minimax algorithm and advance mode unbeatable.",
      use: ["Python", "Tkinter"],
      github: "https://github.com/JahanaSultan/TicTakToe.git",
      link: "",
    },
    // {
    //   id: 16,
    //   title: "Random Hex Color",
    //   description:
    //     "Background color changes randomly and shows background color hex code. When clicking the stop button background stops changing..",
    //   use: ["Html", "CSS", "Javascript"],
    //   github: "https://github.com/JahanaSultan/Random-Hex-Color-With-Js.git",
    //   link: "https://jahanasultan.github.io/Random-Hex-Color-With-Js/",
    // }
  ]
    , []);

  return (
    <>
      <section className="works padding-x" id="works">
        <div className="heading">
          <h1>
            <span>02.</span> My Works
          </h1>
        </div>
        <div className="boxes">
          {myWorks.map((e, i) => (
            <div className="box" key={i}>
              <div className="head">
                <i className="fa-regular fa-folder"></i>
                {e.github ? (<a href={e.github} target="_blank" rel="noreferrer noopener">
                  <i className="fa-brands fa-github"></i>
                </a>) : ""}
                {e.link ? (
                  <a target="_blank" rel="noreferrer noopener" href={e.link}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="content">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={e.link || e.github}
                >
                  {" "}
                  <h2>{e.title}</h2>
                </a>
                <p>{e.description}</p>
              </div>
              <div className="use">
                <ul>
                  {e.use.map((a, j) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Works;


