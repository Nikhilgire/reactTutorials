
const Row = ({name, email, contact}) => {

  return (
    <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{contact}</td>
    </tr>
  )
}

export default Row