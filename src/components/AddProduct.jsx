import React from 'react';

const AddProduct = () => {
  return (
    <div>

      <div className="container">
        <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Product Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Image</label>
              <input type="file" className="form-control" />
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">Description</label>
              <textarea className="form-control"></textarea>
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Category</label>
              <select className="form-control">
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="grocery">Grocery</option>
              </select>
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Brand</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Price</label>
              <input type="number" className="form-control" />
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label">Stock</label>
              <input type="number" className="form-control" />
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
