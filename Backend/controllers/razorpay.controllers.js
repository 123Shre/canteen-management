import Razorpay from "razorpay";
import { generate } from "shortid";
import { config } from "dotenv";



const razorpayController = {
  createOrder: async (req, res) => {
    try {
     // console.log(req.body);
      const {total} = req.body;
      if (req.method === "POST") {
        config();
        const razorpay = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const payment_capture = 1;
        const amount = total;
        const currency = "INR";
        const options = {
          amount: (amount * 100).toString(),
          currency,
          receipt: generate(),
          payment_capture,
        };

        try {
          const response = await razorpay.orders.create(options);
          res.status(200).json({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
          });
         // console.log(response.id)
        } catch (err) {
          console.error(err);

          res.status(400).json(err);
        }
      }
    } catch (error) {
      res.json({ status: "failed", message: "Internal Server Error" });
    }
  },
};

export default razorpayController;
