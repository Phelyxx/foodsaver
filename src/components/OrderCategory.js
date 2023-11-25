import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner
import mealInfo from '../assets/meal_info.json';
import axios from 'axios'; // Import Axios

function OrderCategory() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const [orderStatus, setOrderStatus] = useState('idle'); // Add orderStatus state



  const fetchData = async () => {
    setLoading(true); // Set loading state to true
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
          selected: true, // Add this line
        });
      }

      setOrder(orderData);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false); // Set loading state to false
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckboxChange = (index) => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      newOrder[index].selected = !newOrder[index].selected;
      return newOrder;
    });
  };
  const handleOrderClick = () => {
    const selectedItems = order.filter((item) => item.selected);
    console.log(selectedItems);

    setOrderStatus('processing'); // Set orderStatus to 'processing'

    const waitTime = Math.floor(Math.random() * 2000) + 1000; // Random time between 1 and 3 seconds
    setTimeout(() => {
      setOrderStatus('completed'); // Set orderStatus to 'completed' after the wait
    }, waitTime);
  };


  const handleCancelClick = () => {
    setOrder([]);
  };

  return (
    <Container className="mt-2 mb-5" style={{ fontSize: '1.5rem'}}>
    {loading ? ( // If loading is true, render Spinner
      <Container className="mt-2 mb-5 d-flex justify-content-center align-items-center flex-column" >
              <h1 style={{ fontSize: '2rem', marginBottom: '2rem'}}>Predicting...</h1>
      <Spinner animation="border" role="status" style={{ width: '20rem', height: '20rem', color: 'green' }}>
        <span className="sr-only">Loading...</span>
      </Spinner>
      </Container>
          ) : ( 
      <>
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
              <td>{item.stock} kg</td>
              <td>{item.distributor}</td>
              <td>{item.Amount} kg</td>
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
      {orderStatus === 'processing' && <div><Spinner animation="border" /></div>}
          {orderStatus === 'completed' && <p>Order successfully placed</p>}
      </>)}
    </Container>
  );
}

export default OrderCategory;
