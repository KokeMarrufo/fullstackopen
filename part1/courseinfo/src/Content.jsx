import Part from "./Part";

const Content = (props) => {
    return (
        <>
            {props.items.map((item, key) => <Part key={key} item={item} />)}
        </>
    )
}

export default Content;
