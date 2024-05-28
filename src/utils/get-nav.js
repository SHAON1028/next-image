import { BASE_URL } from "@/config/config"

export const getNav = async()=>{
        const url = `${BASE_URL}/api/frontend/menus`

        const res =await fetch(url)

        return res.json()
}