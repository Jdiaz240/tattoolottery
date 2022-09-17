require('dotenv').config();

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))
const stripe = require('stripe')(process.env.stripekey)

const storeItems = new Map([
    [1, { priceInCents: 2000, name: 'number' }],
    [2, { priceInCents: 2000, name: 'number' }],
])
app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storedItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItems.name
                        },
                        unit_amount: storeItems.priceInCents
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.SERVER_URL}/success.html`,
            cancel_url: `${process.env.SERVER_URL}/cancel.html`,
        })
        res.json({ url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

app.listen(3000)