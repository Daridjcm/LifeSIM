import { useEffect, useState } from "react";
import { Alert } from "@heroui/react";
import CustomButton from "../../CustomButton.jsx";
import handleDownload from "./SavePDF.jsx";

const STORAGE_KEY = "atmInvoice";

const saveInvoiceToLocalStorage = (invoice) => {
  const invoiceWithTimestamp = {
    ...invoice,
    timestamp: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invoiceWithTimestamp));
};

const loadInvoiceFromLocalStorage = () => {
  const storedInvoice = localStorage.getItem(STORAGE_KEY);
  if (!storedInvoice) return null;

  const parsedInvoice = JSON.parse(storedInvoice);
  const { timestamp } = parsedInvoice;

  const EXPIRATION_TIME = 24 * 60 * 60 * 1000;
  if (Date.now() - timestamp > EXPIRATION_TIME) {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }

  return parsedInvoice;
};

export default function AtmTab({
  paymentStatus,
  setPaymentStatus,
  paymentProcessing,
  setPaymentProcessing,
  alertVisible,
  setAlertVisible,
  alertType,
  setAlertType,
}) {
  const [totalAmount, setTotalAmount] = useState(0);
  const [invoice, setInvoice] = useState(loadInvoiceFromLocalStorage());
  const [groceryList, setGroceryList] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchGroceryList = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/grocery");
        const data = await res.json();
        setGroceryList(data.groceries);
        setTotalAmount(
          data.groceries
            .reduce((total, item) => total + parseFloat(item.price), 0)
            .toFixed(2),
        );
      } catch (error) {
        console.error("Error fetching grocery list:", error);
      }
    };
    fetchGroceryList();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await fetch("http://localhost:3000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUserData(data.user); // Assuming the response has 'user' data
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handlePayment = async () => {
    if (groceryList.length === 0) return setAlert("Cart is empty!", "danger");

    setPaymentProcessing(true);
    setPaymentStatus("Making Payment...");

    try {
      const storedInvoice = loadInvoiceFromLocalStorage();
      const items = storedInvoice
        ? storedInvoice.items
        : groceryList.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          }));

      const requestData = {
        totalAmount,
        items: items,
        invoiceNumber: Date.now(),
        userID: userData?.id,
        username: userData?.username || "User",
      };

      console.log("Request Data:", requestData);

      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/api/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        const errorDetails = await res.json();
        console.error("Error details:", errorDetails);
        throw new Error("Failed to create invoice");
      }

      const invoiceData = await res.json();
      const latestInvoice = invoiceData.invoice;
      setInvoice(latestInvoice);
      saveInvoiceToLocalStorage(latestInvoice);

      setAlert("Payment Done ✅", "success");
    } catch (error) {
      setAlert("Payment Failed", "danger");
      console.error("Error during payment:", error);
    } finally {
      setPaymentProcessing(false);
    }
  };

  const setAlert = (status, type) => {
    setPaymentStatus(status);
    setAlertType(type);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 4500);
  };

  return (
    <>
      <p className="text-2xl font-bold">Summary Purchase</p>
      <p className="font-bold text-xl">Total: ${totalAmount}</p>
      <div className="flex flex-col gap-3 bg-gradient-to-r from-green-700 to-green-500 p-10 rounded-md mt-7 mb-3 text-slate-50 text-xl shadow-lg w-full">
        <p>Card LifeSIM</p>
        <ul>
          <li className="text-green-slate-100 opacity-70">
            1234 5678 9XXX XXXX
          </li>
          <li>
            Titular <span>{userData?.name || "Usuario"}</span> {/* Display the Titular name */}
          </li>
        </ul>
        <div className="flex flex-col text-end text-slate-100 opacity-70">
          <p>ID:</p> 12345abc
        </div>
      </div>

      <div className="flex gap-3">
        <CustomButton
          label={paymentProcessing ? paymentStatus : paymentStatus}
          onPress={handlePayment}
        />
        {invoice && (
          <CustomButton
            label="Download Report"
            onPress={() => handleDownload(invoice, userData)} // Pass userData to download function
          />
        )}
      </div>

      {alertVisible && (
        <Alert
          color={alertType}
          title={alertType === "success" ? "Payment Done" : "Payment Failed"}
          description={
            alertType === "success"
              ? "Payment has been made."
              : "Payment has been rejected."
          }
          isVisible={alertVisible}
          variant="faded"
          className="mt-5"
          onClose={() => setAlertVisible(false)}
        />
      )}
    </>
  );
}
