import { observer } from "mobx-react-lite";
import "./header4.css"

const Header4 = observer(({text}) => {
    return (
        <>
            <h2 className="h2HeaderRight">
                {text}
            </h2>
        </>
    );
})

export default Header4;