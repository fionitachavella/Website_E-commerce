import Midtrans from "midtrans-client"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SECRET,
    clientKey: process.env.NEXT_PUBLIC_CLIENT
})

export async function POST(request) {
    const {id, productName,  new_price, cartItems} = await request.json()
    
    let parameter = {
        item_details: {
            name: productName,
            price: new_price,
            quantity:cartItems
        },
        transaction_details:{
            order_id:id,
            gross_amount: new_price * cartItems

        }
    }

    const token = await snap.createTransactionToken(parameter)
    console.log(token)
    // eslint-disable-next-line no-undef
    return NextResponse.json({ token })
}
