import Link from "next/link";

const PaymentSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linen">
      <div className="p-8 bg-secondary rounded shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="mb-4">
          Thank you for your purchase. Your payment has been successfully
          processed.
        </p>
        <Link
          href="/home"
          className="bg-blackbean hover:bg-blackbean/40 text-secondary font-bold py-2 px-4 rounded"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
