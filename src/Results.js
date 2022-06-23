import './Results.css';
import redbar from './redbar.png'

function Result(props) {
    return (
        <table className="do_vote">
            <tbody>
                <tr>
                    <td className="printname">
                        <a
                            href="http://google.com"
                        >
                            {props.id}번 {props.name}
                        </a>
                    </td>
                    <td className="each_result_bar">
                        <img src={redbar} height="20" width={`${props.voteRate * 0.8}%`} />
                        {props.voteEarned} ({props.voteRate}%)
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export default Result