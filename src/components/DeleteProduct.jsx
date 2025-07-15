import React, { useState } from 'react';

const DeleteProduct = () => {
    const [input, changeInput] = useState(
      { productname: "" }
    )
    const inputHandler = (event) => {
      changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
      console.log(input)
    }

  return (
    <div>

      <div className="container">
        <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Product Name:</label>
              <input type="text" className="form-control" name='productname' value={input.productname} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-danger" onClick={readValues}>Delete</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DeleteProduct;
