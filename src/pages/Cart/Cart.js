import { useLoaderData } from 'react-router-dom';


const Cart = () => {
    const { Name, price } = useLoaderData();

    const handlePlaceorder = (event) => {
        const Cname = event.target.name.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const order = {
            //service: _id,
            item: Name,
            price: price,
            customer: Cname,
            address: address,
            phone,
            email
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    return (
        <div className='m-24'>
            <form onSubmit={handlePlaceorder}>
                <h1 className='text-3xl font-semibold mb-4'>Your Order: {Name}</h1>
                <input type="text" name="name" placeholder="Type Name" className="input input-bordered input-accent w-full max-w-xl m-2" />
                <input type="text" name="address" placeholder="Type Address" className="input input-bordered input-accent w-full max-w-xl  m-2" /><br />
                <input type="Email" name="email" placeholder="Type Email" className="input input-bordered input-accent w-full max-w-xl m-2" />
                <input type="text" name="phone" placeholder="Type Phone" className="input input-bordered input-accent w-full max-w-xl m-2" /><br />
                <input type="submit" value="Place Order" className="btn btn-active btn-accent m-2" />
            </form>
        </div>
    );
};

export default Cart;