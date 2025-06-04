import { IoMdCloseCircle } from 'react-icons/io';
import CartContents from '../Cart/CartContents';
import { useNavigate } from 'react-router-dom';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {

    const navigate = useNavigate();

    const handleCheckout = () => {
        toggleCartDrawer();
        navigate('/checkout');
    };

    return (
        <div className='flex flex-col'>
            <div className={`fixed top-0 right-0 w-2/3 md:w-1/3 lg:w-1/4 h-full p-4 bg-white text-gray-600 shadow-lg shadow-black transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex items-center justify-between pb-2'>
                    <h1 className='text-2xl font-semibold'>My Cart</h1>

                    {/* Close Button */}
                    <button onClick={toggleCartDrawer}>
                        <IoMdCloseCircle className='h-6 w-6 text-gray-600' />
                    </button>
                </div>

                <div>
                    <hr className='border-2 border-yellow-300' />
                </div>

                <div className='flex-grow overflow-y-auto'>
                    <CartContents />
                </div>

                {/* Checkout button fixed at the cart bottom */}
                <div className='bg-white sticky bottom-0'>
                    <button
                        onClick={handleCheckout}
                        className='w-full bg-blue-500 hover:bg-blue-300 text-white py-3 rounded-lg font-semibold transition'
                    >
                        Checkout
                    </button>
                    <p className='text-xs md:text-sm tracking-tighter text-gray-500 mt-2 text-center'>
                        Shipping, taxes, and discount codes calculated at checkout
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartDrawer;
