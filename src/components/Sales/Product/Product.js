import React from "react";
import s from './Product.module.css';
const Product = (props) => {
    return (
      <div className={s.product}>
          <div className={s.name}>
          {props.name}
              <div className={s.specify}>
                  {props.specify}
              </div>
          </div>
          <div className={s.information}>
              <img src="https://cdn4.iconfinder.com/data/icons/store-4/92/icon72-16-512.png" alt=""/>
              {props.description}
          </div>

      </div>
    );
};
export default Product;