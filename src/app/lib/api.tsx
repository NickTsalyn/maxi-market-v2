// "use client";

// import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// const apiKey = "f28c735b51fa36fd04b64c9ccb5fc8f8"; 

// export const fetchCities = async (
//   req?: NextApiRequest,
//   res?: NextApiResponse
// ) => {
//   try {
//     const data = await axios.get(
//       `https://api.novaposhta.ua/v2.0/json/Address/getCities?key=${apiKey}`
//     );
//     console.log(data.data);
//     return data.data;   
//   } catch (error) {
//     res?.status(500).json({ message: 'Internal server error' });
//   }
// };
