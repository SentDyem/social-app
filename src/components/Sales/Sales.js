import React from "react";
import s from './Sales.module.css'
import Product from "./Product/Product";
const Sales = (props) =>
{
    return (
      <div className={s.sales}>
          <div className={s.title}>Последние транзакции
              <img src="https://static.thenounproject.com/png/131779-200.png" alt=""/>
          </div>
          <Product name = 'Закупка' specify = 'Транзакция' description = '21.12.2019 '/>
          <Product name = 'Закупка' specify = 'Транзакция' description = '21.12.2019'/>
          <Product name = 'Закупка' specify = 'Транзакция' description = '21.12.2019'/>

      </div>
    );
};
export default Sales;