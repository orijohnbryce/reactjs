const RoundList = ({ rounds }) => {
    return (
        <div>
            <ul>
                {rounds.map((r, i) => <li key={i}> {r} </li>)}
            </ul>
        </div>
    )
}

export default RoundList