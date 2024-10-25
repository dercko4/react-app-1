import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import HeaderRight from "../../components/HeaderRight/headerRight";
import Header4 from "../../components/inHeaderLeft/header4";
import Me from "../../pictures/pudge.jpg"
import Header5 from "../../components/inHeaderLeft/header5";
import Contacts from "../../pictures/contact.jpg"
import HeaderAAA from "../../components/HeaderRight/headerAAA";

const resumeData = {
    freelance: ["Создание сайтов 'с нуля'", "Разработка структуры сайта", "Разработка дизайн-макетов"],
    web_agent: ["Создание сайтов 'с нуля'", "Разработка структуры сайта", "Разработка дизайн-макетов", "asdasdasd", "asdasdqwe"],
    skills: ["Применение систем контроля версий Git", "Написание сервера на NodeJS", "Технология контейниризации Docker"],
    contact: ["Телефон: +7 123 456 78-90", "Email: dercko4@mail.ru"]
}


const MainRight = observer(() => {

    return (
        <>
            <Container style={{ height: 898, width: 795, display: "inline-block", position: "absolute"}}>
                <img style={{width: "80px", height: "120px", marginRight: "5px", float: "right", marginTop: "10px"}} src={Me}/>
                <HeaderAAA text="контакты" picture={Contacts}/>
                <Header5 text="Телефон и почта" props={resumeData.contact}/>
            </Container>
        </>
    );
});

export default MainRight;