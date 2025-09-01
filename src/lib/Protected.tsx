import { jwtDecode } from "jwt-decode"
import React, { useState, useEffect }  from "react"
import Spinner from "@/components/ui/Spinner.tsx"
import { Navigate, useLocation } from "react-router-dom"
import api from "@/api"

const Protected = ({children}) => {

    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)
    const location = useLocation()

    useEffect(function(){
        authorize().catch(() => setIsAuthorized(false))
    })



    async function refreshToken(){

        const refresh = localStorage.getItem("refresh")

        try{

            const response = await api.post("token_refresh/", {refresh})
            if(response.status === 200){
                localStorage.setItem("access", response.data.access)
                setIsAuthorized(true)
            }

            else{
                setIsAuthorized(false)
            }

        }


        catch(err){
            setIsAuthorized(false)
            console.log(err)
        }




    }


    async function authorize(){
        const token = localStorage.getItem("access")
        if(!token){
            setIsAuthorized(false)
            return
        }

        const decodedToken = jwtDecode(token)
        const expiry_date = decodedToken.exp
        const current_time = Date.now()/1000
        if (expiry_date){
            if(current_time > expiry_date){
                await refreshToken()
                return
            }
        }


        setIsAuthorized(true)




    }


    if(isAuthorized === null){
        return <Spinner />
    }

    return (
        <>
            {isAuthorized ? children : <Navigate to="/login" state={{from:location}} replace />}
        </>
    )
}

export default Protected