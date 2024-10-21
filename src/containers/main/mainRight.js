import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import HeaderRight from "../../components/HeaderRight/headerRight";
const resumeData = {
    freelance: ["Создание сайтов 'с нуля'", "Разработка структуры сайта", "Разработка дизайн-макетов"],
    web_agent: ["Создание сайтов 'с нуля'", "Разработка структуры сайта", "Разработка дизайн-макетов", "asdasdasd", "asdasdqwe"]
}

const MainRight = observer(() => {

    return (
        <>
            <Container style={{ height: 898, width: 846, display: "inline-block", backgroundColor: "green", position: "absolute"}}>
                <HeaderRight text="aboba"/>
            </Container>
        </>
    );
});

export default MainRight;