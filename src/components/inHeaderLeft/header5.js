import { observer } from "mobx-react-lite";
import "./header5.css"

const Header5 = observer(({text, props}) => {
    return (
        <>
            <h2 className="h2Right">
                {text}
            </h2>
            <ul className="ulRight">
            {props.map((freelance) => (
              <li className="liRight">{freelance}</li>
            ))}
          </ul>
        </>
    );
})

export default Header5;