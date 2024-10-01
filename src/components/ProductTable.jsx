import React from "react";
import Table from "./Table";
import ProductItem from "./products/ProductItem";
import ProductCategoryHeader from "./products/ProductCategoryHeader";

const ProductTable = ({ headers, products }) => {
  const sportingGoods = products.filter((product) => product.type === 1);
  const electronics = products.filter((product) => product.type === 2);

  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>

        <Table.TBody>
          {sportingGoods.length > 0 && (
            <ProductCategoryHeader text={headers[0]} />
          )}
          {sportingGoods.map((sportingGood) => (
            <ProductItem
              key={`${sportingGood.type}-${sportingGood.id}`}
              name={sportingGood.name}
              price={sportingGood.price}
            />
          ))}

          {electronics.length > 0 && (
            <ProductCategoryHeader text={headers[1]} />
          )}

          {electronics.map(({ id, name, price, type }) => (
            <ProductItem key={`${type}-${id}`} name={name} price={price} />
          ))}
        </Table.TBody>

        <Table.TFoot>
          <Table.Row>
            <Table.ColumnHeader>TOTAL</Table.ColumnHeader>
            <Table.Column>
              $
              {products.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.price,
                0
              )}
            </Table.Column>
          </Table.Row>
        </Table.TFoot>
      </Table.TableContainer>
    </div>
  );
};

export default ProductTable;
