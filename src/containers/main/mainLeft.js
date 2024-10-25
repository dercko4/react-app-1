import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Job from "../../pictures/job.jpg"
import HeaderLeft from "../../components/HeaderLeft/headerLeft";
import Header2 from "../../components/inHeaderLeft/header2";
import Educ from "../../pictures/education.png"
import Header3 from "../../components/inHeaderLeft/header3";
import About from "../../pictures/aboutme.png"
import Skills from "../../pictures/skills.png"

const resumeData = {
    freelance: ["Создание сайтов 'с нуля'", "Разработка структуры сайта", "Разработка дизайн-макетов"],
    web_agent: ["Создание сайтов 'с нуля'", "Разработка структуры сайта", "Разработка дизайн-макетов", "asdasdasd", "asdasdqwe"],
    skills: ["Применение систем контроля версий Git", "Написание сервера на NodeJS", "Технология контейниризации Docker"],
    contact: ["Телефон: +7 123 456 78-90", "Email: dercko4@mail.ru"]
}

const MainLeft = observer(() => {

    return (
        <>
            <Container style={{ height: 898, width: 1050, display: "inline-block" }}>
                <HeaderLeft text="Опыт работы" picture={Job} />
                <Header2 text="Фриланс" props={resumeData.freelance} />
                <Header2 text="Веб-агенство" props={resumeData.web_agent}/>
                <HeaderLeft text="Образование" picture={Educ} />
                <Header3 text="Среднее Профессиональное Образование на базе колледжа МКИТ" />
                <HeaderLeft picture={About} text="о себе" />
                <Header3 text="Сижу делаю реакт приложение. Получается то что получается :)" />
                <HeaderLeft text="навыки" picture={Skills}/>
                <Header2 text="Разработка" props={resumeData.skills}/>
            </Container>
        </>
    );
});

export default MainLeft;