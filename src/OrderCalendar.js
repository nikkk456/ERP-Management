import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrderCalendar = ({ orders }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("Selected Date", selectedDate.toDateString());
    };

    // Filter orders based on selected date
    const filteredOrders = orders.filter(order => {
        const expectedDeliveryDate = new Date(order.expected_delivery);

        const selectedYear = selectedDate.getFullYear();
        const selectedMonth = selectedDate.getMonth();
        const selectedDay = selectedDate.getDate();
        return expectedDeliveryDate.getFullYear() === selectedYear &&
            expectedDeliveryDate.getMonth() === selectedMonth &&
            expectedDeliveryDate.getDate() === selectedDay;
    });
    // console.log(filteredOrders);
    return (
        <div className="calendar-container">
            <h2>Order Calendar</h2>
            <div className='row'>
                <div className='col-md-4'>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        className="react-calendar"
                    />
                </div>
                <div className='col-md-8'>
                    <h3>Orders for {selectedDate.toDateString()}</h3>
                    {filteredOrders.length > 0 ?
                        <>
                            {filteredOrders.map((order, index) => (
                                <div className='table-responsive'>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th scope="col">Order Id</th>
                                                <th scope="col">Customer Name</th>
                                                <th scope="col">Order Date</th>
                                                <th scope="col">Expected Delivery</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Total Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr key={order.order_id}>
                                                <th scope="row">{order.order_id}</th>
                                                <td>{order.name}</td>
                                                <td>{order.date}</td>
                                                <td>{order.expected_delivery}</td>
                                                <td>{order.status}</td>
                                                <td>&#36; {order.total_amount}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </>
                        :
                        <p>No delivery found for this date.</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default OrderCalendar
