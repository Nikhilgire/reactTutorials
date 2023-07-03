import Row from "./Row";
import Tbody from "./Tbody";

import "./Table.css"

const Table = ({data}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
            </thead>

            <Tbody data={data}/>
        </table>
    )
}

export default Table;