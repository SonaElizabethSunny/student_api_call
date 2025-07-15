import React, {useState} from 'react';

const AddProduct = () => {
  const [input, changeInput] = useState(
    { productName: "", image: "", description: "", category: "", brand: "", price: "", stock: "" }
  )

  const inputHandler = (event) => {
    changeInput({...input,[event.target.name]:event.target.value})

  }
  const readValues=()=>{
    console.log(input)
  }

  return (
    <div>

      <div className="container">
        <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Product Name</label>
              <input type="text" className="form-control" name='productName' value={input.productName} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Image</label>
              <input type="file" className="form-control" name='image' value={input.image} onChange={inputHandler}/>
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">Description</label>
              <textarea className="form-control" name='description' value={input.description} onChange={inputHandler}></textarea>
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Category</label>
              <select className="form-control" name='category' value={input.category} onChange={inputHandler}>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="grocery">Grocery</option>
              </select>
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Brand</label>
              <input type="text" className="form-control" name='brand' value={input.brand} onChange={inputHandler}/>
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Price</label>
              <input type="number" className="form-control" name='price' value={input.price} onChange={inputHandler}/>
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Stock</label>
              <input type="number" className="form-control" name='stock' value={input.stock} onChange={inputHandler}/>
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <button className="btn btn-success" onClick={readValues}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
