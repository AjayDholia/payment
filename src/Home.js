import React from 'react'
import axios from 'axios'
import {Box,Stack} from '@chakra-ui/react'
import Crad from './Crad'
const Home = () => {
    const checkoutHandler = async(amount) =>
    {
const {data:{key}} = await axios.get("http://www.localhost:4000/api/getkey")

   const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
    amount:amount ,
   })
   var options = {
    key, // Enter the Key ID generated from the Dashboard
    amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Ajay Dholia",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "http://localhost:4000/api/paymentVarification",
    prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999"
    },
    notes: {
        address: "Razorpay Corporate Office"
    },
    theme: {
        color: "#3399cc"
    }
};
const razor = new window.Razorpay(options);

    razor.open();

    }

    return(
        
        <Box>
            <Stack direction={"row"}>
              <Crad amount = {5000} img ={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png?v=1620371415"} checkoutHandler={checkoutHandler}/>
            </Stack>
        </Box>
    )
}

export default Home




//  secrate key : tYUyGOEaKn9HV6jsqRt9TABN


//  temporary key: rzp_test_V7XIQ1QAtRtENY