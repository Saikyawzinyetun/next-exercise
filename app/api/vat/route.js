export async function GET(request) {
    const rate = parseFloat(process.env.VAT_RATE || '0.07');
    const { searchParams } = new URL(request.url);
    const amount = parseFloat(searchParams.get('amount') || '0');
    const vat = amount * rate;
    return Response.json({ rate, amount, vat });
  }
  
  export async function POST(request) {
    const rate = parseFloat(process.env.VAT_RATE || '0.07');
    const body = await request.json();
    const amount = parseFloat(body?.amount || '0');
    const vat = amount * rate;
    return Response.json({ rate, amount, vat });
  }
  