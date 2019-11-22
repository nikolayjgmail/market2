import React, {useState, useEffect} from 'react'
const Shop=(props)=>{
    useEffect(()=>{
        fetchItems()
    }, [])
     const [item, setItems] = useState([])
    const fetchItems =async ()=>{
        const data =await fetch(`http://localhost/components/getTest.php?column=gender&data=${props.match.params.gender}`)
        const items= await data.json()
setItems(items)
        console.log(items)

    }
return (
    <div>

    </div>
)

}

export default Shop