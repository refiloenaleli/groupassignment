import React, { useState } from 'react';
import './styles.css'; // Include this line for custom styling.

const Procurement = () => {
  const [orders, setOrders] = useState([
    { id: 1, item: 'Tesla Phone', quantity: 5, status: 'Pending' },
    { id: 2, item: 'Polariod Watches', quantity: 10, status: 'Completed' },
  ]);

  const [newOrder, setNewOrder] = useState({
    item: '',
    quantity: '',
    status: 'Pending',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const validateInputs = () => {
    if (!newOrder.item.trim()) return 'Item name is required.';
    if (newOrder.quantity <= 0) return 'Quantity must be greater than zero.';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateInputs();
    if (error) {
      alert(error);
      return;
    }

    if (isEditing) {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === currentOrderId ? { ...order, ...newOrder } : order
        )
      );
      setIsEditing(false);
    } else {
      setOrders([...orders, { ...newOrder, id: Date.now() }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setNewOrder({ item: '', quantity: '', status: 'Pending' });
    setIsEditing(false);
    setCurrentOrderId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    }
  };

  const handleEdit = (id) => {
    const orderToEdit = orders.find((order) => order.id === id);
    setNewOrder(orderToEdit);
    setIsEditing(true);
    setCurrentOrderId(id);
  };

  return (
    <div className="procurement-container">
      <h2>Acquisition Management</h2>

      <h3>{isEditing ? 'Edit Procurement Order' : 'Add New Acquisition Order'}</h3>
      <form onSubmit={handleSubmit} className="procurement-form">
        <div className="form-group">
          <label>Item:</label>
          <input
            type="text"
            name="item"
            placeholder="Enter item name"
            value={newOrder.item}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={newOrder.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
         <div>
      <h2>Acquisition</h2>
      <p>Manage IT Acquisition and purchasing processes here.</p>
    </div>
        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={newOrder.status}
            onChange={handleInputChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {isEditing ? 'Update Order' : 'Add Order'}
          </button>
          {isEditing && (
            <button type="button" onClick={resetForm} className="btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3>Acquisition Orders</h3>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <span>
              <strong>{order.item}</strong> - {order.quantity} units -{' '}
              <em>{order.status}</em>
            </span>
            <div>
              <button
                onClick={() => handleEdit(order.id)}
                className="btn-edit"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(order.id)}
                className="btn-delete"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Procurement;
