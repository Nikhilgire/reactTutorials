import Row from "./Row"

const Tbody = ({data}) => {
  return (
   <tbody>
        {
          data.map(people => <Row {...people}/>)
        }
   </tbody>
  )
}

export default Tbody