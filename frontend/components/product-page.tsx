'use client';

import React, { useState } from 'react';
import CartIcon from './utilities/cart';
import ModalsProduct from './modal-procustc';

interface Props {
    data: any;
}

const ProductPage: React.FC<Props> = ({ data }) => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    const handleOpenModal = (item: any) => {
        setSelectedItem(item);
        setOpenModal(true);
    };

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center justify-items-center">
            {data?.map((item: any, index: number) => (
                <section
                    key={index}
                    id="Projects"
                    className="grid grid-cols-1 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"

                >
                    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img onClick={() => handleOpenModal(item)}
                                src={`${item.image}`}
                                alt="Product"
                                className="h-80 w-72 object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">
                                    {item.category}
                                </span>
                                <p className="text-lg font-bold text-black truncate block capitalize">
                                    {item.title}
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                                        $ {item.price}
                                    </p>
                                    <div>
                                        <CartIcon product={item} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
            ))}

            {selectedItem && (
                <ModalsProduct
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    data={selectedItem}
                    title={selectedItem.title}
                    text={selectedItem.description}
                >
                    <p>{selectedItem.description}</p>
                </ModalsProduct>
            )}
        </div>
    );
};

export default ProductPage;
