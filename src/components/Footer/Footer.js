import React from 'react';

const Footer = () => {

    const date = new Date().getFullYear()
    // console.log(date);

    return (
        <footer className="bg-slate-900 text-center lg:text-center text-white">
            <div className="container p-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 ">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 ">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 ">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 ">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" className="">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className=" text-center p-4">
                © {date} Copyright :
                <a className="" href="/"> Neighbour Home</a>
            </div>
        </footer>
    );
};

export default Footer;