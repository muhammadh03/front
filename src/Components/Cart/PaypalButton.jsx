import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalButton = ({ amount, onSuccess, error }) => {
    return (
        <PayPalScriptProvider options={{ "client-id": "Ab36L0dBGnnga-tucoUL16AI2_Y7wLtXwVgpD0cBc_io6wEJXNdxSVKHGazweYpjg8jMiM3d09nftNEk" }}>

            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: amount
                                }
                            }
                        ],
                    })
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(onSuccess);
                }}
                onError={error}
            />
        </PayPalScriptProvider>
    )
}

export default PaypalButton;
