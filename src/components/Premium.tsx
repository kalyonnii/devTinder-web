import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      { membershipType: type },
      { withCredentials: true }
    );
    const { amount, currency, keyId, orderId, notes } = order.data;
    // Open Razorpay Checkout
    const options = {
      key: keyId, // Replace with your Razorpay key_id
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "DEV TINDER",
      description: "Connect to Other Developers",
      order_id: orderId, // This is the order_id created in the backend
      // callback_url: "http://localhost:3000/payment-success", // Your success URL
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999"
      },
      theme: {
        color: "#000"
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="m-10">
      <div className="flex w-full">
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl">Silver Membership</h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - 100 connection requests per day</li>
            <li> - Blue Tick</li>
          </ul>
          <button
            onClick={() => handleBuyClick("silver")}
            className="btn btn-secondary"
          >
            {" "}
            Buy Silver
          </button>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
          <h1 className="font-bold text-3xl"> Gold Membership</h1>
          <ul>
            <li> - Chat with other people</li>
            <li> - Inifinte connection requests per day</li>
            <li> - Blue Tick</li>
          </ul>
          <button
            onClick={() => handleBuyClick("gold")}
            className="btn btn-primary"
          >
            {" "}
            Buy Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
