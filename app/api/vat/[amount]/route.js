export async function GET(_request, { params }) {
    const rate = parseFloat(process.env.VAT_RATE || '0.07');
    const amount = parseFloat(params.amount || '0');
    const vat = amount * rate;
    return Response.json({ rate, amount, vat });
  }
  