import Payment from "../Pages/Payment Page/Page 1/Pay1";
import Payment2 from "../Pages/Payment Page/Page 2/Pay2";
import Ticket from "../Pages/Ticket Page/Ticket";

export const routes = [
    {
        path: "/Payment",
        element: <Payment />
    },
    {
        path: "/Payment/:mobilName/:kategori/:totalPrice/:selectedBank",
        element: <Payment2 />
    },
    {
        path: "/Ticket",
        element: <Ticket />
    }
]