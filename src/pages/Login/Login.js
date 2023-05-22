import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { customerContext } from '../../Context/Context';

const Login = () => {
    const { login } = useContext(customerContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));

    }

    return (
        <div className="bg-no-repeat bg-center bg-cover bg-[url('https://thumbs.dreamstime.com/b/homemade-burger-fried-potatoes-french-fries-fast-food-set-delicious-fresh-tomatoes-lettuce-onions-cheese-rustic-wooden-table-93980191.jpg')]">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="card-body bg-slate-200 rounded-md ">
                            <form onClick={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered bg-slate-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="Password" className="input input-bordered bg-slate-200" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-teal-600 border-0" type="button" value="Login" />
                                </div>
                            </form>
                            <p className='text-xs'>New here? <Link className='text-teal-700 font-bold' to="/signup">Sign up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;