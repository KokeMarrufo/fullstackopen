const Content = (props) => {
    return (
        <>
            {props.items.map((item, key) => <p key={key}>{item.part} {item.exercises}</p>)}
        </>
    )
}

export default Content;
