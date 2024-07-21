import { EXPO_HOST, EXPO_HOST_PROD, NODE_ENV } from "@env"

import { ITent } from "../interface/User"

export const handleIntegrationMP = async (tent: ITent) => {

    const { title, description, price, quantity, isAdd } = tent

    const preferencia = {
        id: title,
        title,
        description,
        quantity,
        price,
        isAdd
    }

    try {

        const response = await fetch(`${NODE_ENV.trim() === "production" ? EXPO_HOST_PROD : EXPO_HOST}/payments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(preferencia)
        })

        const data = await response.json()

        return data

    } catch (error) {
        console.log(error)
    }
}