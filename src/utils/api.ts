import { apiMessages } from "@/messages/apiMessages";
import { Card } from "@/types";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:3001";

export async function fetchCards():Promise<Card[]>{
    const res = await fetch(`${BASE_URL}/cards`);
    if(!res.ok){
        toast.error(apiMessages.serverError);
        throw new Error("Fetch Data Failed");
    }
    const data = res.json();
    return data   
}