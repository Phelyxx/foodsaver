import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import mealInfo from '../assets/meal_info.json';
import axios from 'axios'; // Import Axios

function OrderCategory() {
  const [order, setOrder] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const fetchData = async () => {
    try {
      const ingredients = [
        "Spring Onions", "Ciabatta Bread", "Pizza Dough", "Mozzarella Cheese", "Lemon"
        // "Salmon", "Mozzarella Cheese", "Tomato Sauce",
        // "Lamb", "Mineral Water", "Balsamic Vinegar", "Tofu"
      ];

      const mealIds = {};

      for (const ingredient of ingredients) {
        const meal = mealInfo.find(item => item.ingredient === ingredient);
        if (meal) {
          mealIds[ingredient] = meal.meal_id;
        }
      }

      const orderData = [];

      for (const ingredient of ingredients) {
        const attr_4 = mealIds[ingredient];
        const requestBody = {
          data: {
            req_data: [{
              attr_1: 100000,
              attr_2: 10,
              attr_3: 55,
              attr_4,
              attr_5: 200,
              attr_6: 200,
              attr_7: 1,
              attr_8: 1
            }]
          }
        };

        // Replace the fetch call with Axios
        console.log(requestBody);
        const response = await axios.post('http://94.74.67.209:5000/https://01516f373f434921a874bf502a986a58.apig.ap-southeast-3.huaweicloudapis.com/v1/infers/83ad41f3-3161-4430-ba2c-2db270e9cc91', requestBody, {
          headers: {
            'X-Apig-AppCode': '8256069e07fd48b8b3589bab45d05b2df06a3e3e392c4f13b521b02617050779',
          }
        });

        console.log(response);

        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const result = response.data;
        const amount = result.data.resp_data[0].predict - 200;

        const meal = mealInfo.find(item => item.ingredient === ingredient);

        orderData.push({
          Amount: (result.data.resp_data[0].predict / 100).toFixed(2),
          distributor: meal.category + ' Distributor',
          ingredient,
          stock: (amount / 100).toFixed(2),
        });
      }

      setOrder(orderData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckAll = (e) => {
    setSelectAll(e.target.checked);
  };

  const handleCheckboxChange = (id) => {
    setOrder((prevOrder) => {
      return prevOrder.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      );
    });
  };

  const handleOrderClick = () => {
    const selectedItems = order.filter((item) => item.selected);
    // Send the selected items to the backend for ordering
    console.log(selectedItems);
  };

  const handleCancelClick = () => {
    setOrder([]);
  };

  return (
    <Container className="mt-2 mb-5">
      <Table striped bordered hover className="container-table">
        <thead>
          <tr>
            <th>
              Order
            </th>
            <th>Ingredient</th>
            <th>Stock</th>
            <th>Distributor</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, index) => (
            <tr key={index}>
              <td>
                <Form.Check
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={item.selected}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td>{item.ingredient}</td>
              <td>{item.stock}</td>
              <td>{item.distributor}</td>
              <td>{item.Amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="danger" className="m-2" onClick={handleCancelClick}>
        Cancel
      </Button>
      <Button variant="success" className="m-2 button-green" onClick={handleOrderClick}>
        Order
      </Button>
    </Container>
  );
}

export default OrderCategory;
