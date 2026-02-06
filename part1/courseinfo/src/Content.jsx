import Part from "./Part";

const Content = (props) => {
    return (
        <>
            {props.parts.map((part, key) => <Part key={key} part={part} />)}
        </>
    )
}

export default Content;
