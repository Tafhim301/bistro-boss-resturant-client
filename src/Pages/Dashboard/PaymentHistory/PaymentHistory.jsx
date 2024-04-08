import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: payments = [] } = useQuery({
        queryKey: ['Payment History', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-xl font-bold">Total Payment:{payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, idx) => 
                                <tr  key={idx} className=" my-5">
                                    <th>{idx + 1}</th>
                                    <td>${payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>{payment.status}</td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;