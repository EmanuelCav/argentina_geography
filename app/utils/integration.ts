import { EXPO_ACCESS_TOKEN_DEV, EXPO_ACCESS_TOKEN_PROD, NODE_ENV } from "@env"

import { ITent } from "../interface/User"

export const handleIntegrationMP = async (tent: ITent) => {

    const { title, description, price, quantity } = tent

    const preferencia = {
        "items": [
            {
                "title": title,
                "description": description,
                "picture_url": "https://res.cloudinary.com/projects-emanuek/image/upload/v1714063248/portfolio/logo_2_luwfnx.png",
                "quantity": quantity,
                "currency_id": "ARS",
                "unit_price": price / 10
            }
        ]
    }

    try {

        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${NODE_ENV !== 'production' ? EXPO_ACCESS_TOKEN_DEV : EXPO_ACCESS_TOKEN_PROD}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preferencia)
        })

        const data = await response.json()

        return data.init_point

    } catch (error) {
        console.log(error)
    }
}