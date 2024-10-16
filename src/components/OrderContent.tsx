"use client";

import { Orders, Order } from "@/tools/orders.model";

export default function OrderContent({orders}: {orders:Order[]}){

    
    return(
        <>
            {orders.map((order) => (
                
                <div className="mb-4">
                    <h1 className="text-accent text-2xl font-bold mt-4">Order #{order.id}:</h1>
                    <div className="font-bold"><i className="fas fa-info-circle"></i> Customer Information</div>
                    <div className="m-0 p-0 text-sm">{order.name}</div>
                    <div className="m-0 p-0 text-sm">{order.address}</div>
                    <div className="m-0 p-0 text-sm">{order.city}</div>
                    <p className="font-bold mt-3"><i className="fas fa-pizza-slice"></i> pizza</p>
                    <p className="m-0 text-sm">{order.size}</p>
                    
                    <div className="font-bold mt-3"><i className="fas fa-list-ul"></i> Order Details</div>
                    {order.toppings.map((topping) => (
                        <div className="m-0 text-sm" >{topping.topping}</div>
                        ))}
                    
                    
                    <div className="font-bold mt-3"><i className="fas fa-sticky-note"></i> Order Notes</div>
                    {order.notes.map((note) => (
                        <div className="m-0 text-sm">{note.note}</div>
                        ))}
                    
                    
                </div>
            ))}
        </>

    );
}