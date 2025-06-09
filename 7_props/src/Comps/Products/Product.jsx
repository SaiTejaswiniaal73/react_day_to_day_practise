import React from 'react'

const Product = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.singleP.title}</h1>
        <p>{props.singleP.rating}</p>
        <p>{props.singleP.tags}</p>
        <p>{props.singleP.dimensions.width},{ props.singleP.dimensions.height }</p>
        <p>{props.singleP.reviews.map((x)=>{
            return (<div>
                <p>{x.comment}</p>
                <p>{x.reviwerName}</p>
            </div>)
        })}</p>
    </div>
  )
}

export default Product
