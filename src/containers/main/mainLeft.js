import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Job from "../../pictures/job.jpg"    
import HeaderLeft from "../../components/HeaderLeft/headerLeft";
import Header2 from "../../components/inHeaderLeft/header2";
const resumeData = {
    freelance: ["Создание сайтов 'с нуля'", "Разработка структуры сайта", "Разработка дизайн-макетов"],
    web_agent: ["Создание сайтов 'с нуля'", "Разработка структуры сайта", "Разработка дизайн-макетов", "asdasdasd", "asdasdqwe"]
}

const MainLeft = observer(() => {

    return (
        <>
            <Container style={{ height: 898, width: 1050, display: "inline-block" }}>
                <HeaderLeft text="Опыт работы" picture={Job} />
                <Header2 text="Фриланс" props={resumeData.freelance} />
                <Header2 text="Веб-агенство" props={resumeData.web_agent} />
                <HeaderLeft text/>
            </Container>
        </>
    );
});

export default MainLeft;