import { useState } from "react"
import ProductData from "../data/Products"

const Category = () => {
  const [data,setData] = useState(ProductData);

  const filterResult = (catItem: string) =>{
    const result = ProductData.filter((fdata)=>{
      return fdata.category === catItem;
    });
    setData(result);
  }
  
  return (
    <div>
        <div className="container">
          <button onClick={()=>{filterResult('man')}}>Men</button>
          <button onClick={()=>{filterResult('woman')}}>Woman</button>
          <div className="row">
           {data.map((values)=>{
            const{title,price,img,id}= values;
            return (
              <div key={id} className="card" style={{width: '18rem'}}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
              </div>
            </div>
           )})}

          </div>
        </div>
    </div>
  )
}

export default Category