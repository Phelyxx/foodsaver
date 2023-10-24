import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './OrderCategory.css';

function OrderCategory() {
  const [order, setOrder] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_API_ENDPOINT_HERE');
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }
      const data = await response.json();
      setOrder(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    setOrder([
      {
        id: 1,
        ingredient: 'Ingredient 1',
        stock: 10,
        distributor: 'Distributor 1',
        Amount: 1,
        selected: false,
      },
      {
        id: 2,
        ingredient: 'Ingredient 2',
        stock: 20,
        distributor: 'Distributor 2',
        Amount: 2,
        selected: false,
      },
      {
        id: 3,
        ingredient: 'Ingredient 3',
        stock: 30,
        distributor: 'Distributor 3',
        Amount: 3,
        selected: false,
      },
    ]);
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
          {order.map((item) => (
            <tr key={item.id}>
              <td>
                <Form.Check
                  type="checkbox"
                  id={`checkbox-${item.id}`}
                  checked={item.selected}
                  onChange={() => handleCheckboxChange(item.id)}
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
