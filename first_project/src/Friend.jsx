import FriendName from "./FriendName";
import CompanyName from "./CompanyName";

const Friend = (props) => {

    const {name, companyName} = props;

    return (
        <div>
            <FriendName name={name}/>
            <hr />
            <CompanyName name={companyName}/>
        </div>
    )
}

export default Friend;