const Statistics = ({good, neutral, bad}) => {

    const all = good + neutral + bad
    const average = all === 0 ? 0 : (good - bad) / all
    const positive = all === 0 ? 0 : (good / all) * 100

    return (
        <>
            <h2>Statistics</h2>
            { all === 0 ? (
                <p> No feedback given</p>
            ): (
                <>
                    <p> good {good}</p>
                    <p> neutral {neutral}</p>
                    <p> bad {bad}</p>
                    <p> all {all}</p>
                    <p> Average {average}</p>
                    <p>positive {positive}% </p>
                </>
            )
            }

        </>
    )
}

export default Statistics;