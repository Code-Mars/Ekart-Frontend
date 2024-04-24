import PaymentCard from "./PaymentCard";

const Payments=()=>{
    const payments=["Stripe", "Visa", "Mastercard","Amazon", "Klarna", "Paypal", "Applepay", "Gpay"];
    return <div className="w-72 flex flex-col gap-4">
        <div className="text-2xl font-bold">Ekart</div>
        <div className="text-sm text-gray-700">Your one-stop solution for seamless online shopping experiences.</div>
        <div className="font-semibold">Accepted Payments</div>
        <div className="w-64 flex flex-wrap gap-1">
            {
                payments.map((e, i)=><PaymentCard key={i} name={e} />)
            }
        </div>
    </div>
}
export default Payments;