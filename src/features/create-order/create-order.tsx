import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { OrderRequest } from "../../api/models/orders";
import { useCreateOrder } from "../../api/queries/transactions/useCreateOrder";
import { portfolioAtom } from "../../atoms/portfolio.atom";
import styles from "./create-order.module.scss";

type FormValues = {
  qty: number;
  price?: number;
};

export function CreateOrder() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [portfolioItem, setPortfolioItem] = useAtom(portfolioAtom);
  const [side, setSide] = useState<OrderRequest["side"] | null>(null);
  const createOrder = useCreateOrder();

  function onClose() {
    setPortfolioItem(null);
    setSide(null);
  }

  function onSubmit(values: FormValues) {
    if (!portfolioItem || !side) return;
    let orderToSend: OrderRequest;

    if (side === "BUY") {
      orderToSend = {
        instrument_id: portfolioItem.instrument_id,
        side,
        type: "MARKET",
        quantity: values.qty,
      };
    } else {
      orderToSend = {
        side,
        instrument_id: portfolioItem.instrument_id,
        quantity: values.qty,
        type: "LIMIT",
        price: Number(values.price),
      };
    }

    createOrder.mutate(orderToSend, {
      onSuccess: (response) => {
        onClose();
        reset();
        toast(JSON.stringify(response, null, 2), {
          duration: Infinity,
          position: "bottom-center",
        });
      },
      onError: () => {
        toast("Something went wrong", {
          style: { background: "red", color: "white" },
        });
      },
    });
  }

  return (
    <AnimatePresence>
      {portfolioItem ? (
        <>
          <motion.div
            key="backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.1 } }}
            className={styles.backdrop}
          />
          <motion.div
            key="content"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ type: "tween" }}
            className={styles.container}
          >
            <div style={{ width: "100%" }}>
              <p>I want to:</p>
              <div className={styles.header}>
                <button
                  className={side === "BUY" ? styles.active : undefined}
                  onClick={() => setSide("BUY")}
                >
                  BUY
                </button>
                <button
                  className={side === "SELL" ? styles.active : undefined}
                  onClick={() => setSide("SELL")}
                >
                  SELL
                </button>
              </div>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Enter the number of shares"
                  type="text"
                  {...register("qty", { required: true })}
                />

                {side === "SELL" && (
                  <input
                    placeholder="Enter price"
                    type="text"
                    {...register("price", { required: true })}
                  />
                )}

                <button type="submit" disabled={!side}>
                  Create order
                </button>
              </form>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
