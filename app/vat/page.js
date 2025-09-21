"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

const VAT_RATE = 0.07; // 7% example

export default function VatPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { price: "" }
  });
  const [result, setResult] = useState(null);

  const onSubmit = ({ price }) => {
    const p = parseFloat(price);
    if (Number.isNaN(p)) {
      setResult(null);
      return;
    }
    const vat = p * VAT_RATE;
    const total = p + vat;
    setResult({
      price: p.toFixed(2),
      vat: vat.toFixed(2),
      total: total.toFixed(2),
    });
  };

  return (
    <main style={{ padding: 20, maxWidth: 480 }}>
      <h1>VAT Calculator</h1>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 12, marginTop: 12 }}>
        <label style={{ display: "grid", gap: 6 }}>
          Price
          <input
            type="number"
            step="0.01"
            placeholder="e.g. 100"
            {...register("price", { required: "Price is required" })}
          />
        </label>
        {errors.price && <small style={{ color: "crimson" }}>{errors.price.message}</small>}

        <button type="submit">Calculate VAT</button>
      </form>

      {result && (
        <section style={{ marginTop: 16 }}>
          <p>Price: {result.price}</p>
          <p>VAT ({(VAT_RATE * 100).toFixed(0)}%): {result.vat}</p>
          <p><strong>Total: {result.total}</strong></p>
        </section>
      )}
    </main>
  );
}
