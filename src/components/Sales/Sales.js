import React from "react";
import s from './Sales.module.css'
import Product from "./Product/Product";
const Sales = (props) =>
{
    return (
      <div className={s.sales}>
          <div className={s.title}>Последние транзакции
          </div>
          <Product name = 'Закупка' specify = 'Транзакция' description = '21.12.2019 '/>
          <Product name = 'Закупка' specify = 'Транзакция' description = '21.12.2019'/>
          <Product name = 'Закупка' specify = 'Транзакция' description = '21.12.2019'/>

      </div>
    );
};
export default Sales;