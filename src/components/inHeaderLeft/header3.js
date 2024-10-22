import { observer } from "mobx-react-lite";
import "./header3.css"

const Header3 = observer(({text}) => {
    return (
        <>
            <h2 className="h2Ussualy">
                {text}
            </h2>
        </>
    );
})

export default Header3;