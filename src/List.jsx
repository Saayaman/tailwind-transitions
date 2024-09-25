import Button from "./Button"
import Wrapper from "./Wrapper"

const List = ({ list }) => {
    return (
        {list.map(item => <Wrapper><p>{item.text}</p><Button className={item.className}/></Wrapper>)}
    )
}

export default List