import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrderCalendar = ({ orders }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("Selected Date", selectedDate.toDateString());
    };

    //Function to Filter The orderes on the basis of selected expected date of delivery
    const filteredOrders = orders.filter(order => {
        const expectedDeliveryDate = new Date(order.expected_delivery);
        const selectedYear = selectedDate.getFullYear();
        const selectedMonth = selectedDate.getMonth();
        const selectedDay = selectedDate.getDate();
        return expectedDeliveryDate.getFullYear() === selectedYear &&
            expectedDeliveryDate.getMonth() === selectedMonth &&
            expectedDeliveryDate.getDate() === selectedDay;
    });
    return (
        <div className="calendar-container">
            <h2 className='my-3'><span style={{ borderBottom: "2px solid gold" }}>Order Calendar</span></h2>
            <div className='row'>
                <div className='col-md-4'>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        className="react-calendar"
                    />
                </div>
                <div className='col-md-8'>
                    <h3 className='my-2'>Orders for {selectedDate.toDateString()}</h3>
                    {filteredOrders.length > 0 ?
                        <>
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
                                    {filteredOrders.map((order, index) => (
                                        <tbody key={order.order_id}>
                                            <tr>
                                                <th scope="row">{order.order_id}</th>
                                                <td>{order.name}</td>
                                                <td>{order.date}</td>
                                                <td>{order.expected_delivery}</td>
                                                <td>{order.status}</td>
                                                <td>&#36; {order.total_amount}</td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
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
