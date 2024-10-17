import { observer } from "mobx-react-lite";
import "./header2.css"

const Header2 = observer(({text, props}) => {
    // const descs = props.desc
    // const listitem = resumeData.descs.map((descs) => <li>{descs}</li>)
    console.log(props)
    return (
        <>
            <h2>
                {text}
            </h2>
            <ul>
            {props.map((freelance) => (
              <li>{freelance}</li>
            ))}
          </ul>
        </>
    );
})

export default Header2;