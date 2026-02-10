import StatisticLine from "./components/StatisticLine"

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
                    <table>
                        <tbody>
                            <StatisticLine text={'good'} value={good} />
                            <StatisticLine text={'neutral'} value={neutral} />
                            <StatisticLine text={'bad'} value={bad} />
                            <StatisticLine text={'all'} value={all} />
                            <StatisticLine text={'average'} value={average} />
                            <StatisticLine text={'positive'} value={`${positive}%`} />
                        </tbody>

                    </table>
                </>
            )
            }

        </>
    )
}

export default Statistics;