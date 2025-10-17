import { apiMessages } from "@/messages/apiMessages";
import { Card } from "@/types";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';


const BASE_URL = "http://localhost:3001";
const HEADERS = {
    "Content-Type":"application/json"
}

export async function fetchCards():Promise<Card[]>{
    const res = await fetch(`${BASE_URL}/cards`);
    if(!res.ok){
        toast.error(apiMessages.serverError);
        throw new Error("Fetch Data Failed");
    }
    return res.json();
}

export async function createCard(payload:Omit<Card,"id">):Promise<Card>{
    const id = `Card-${uuidv4()}`;
    const res = await fetch(`${BASE_URL}/cards`,{
        method:"POST",
        headers:HEADERS,
        body:JSON.stringify({...payload,id})
    });
    if(!res.ok){
        toast.error(apiMessages.createCardError);
        throw new Error("Create Card Failed");
    }
    toast.success(apiMessages.createCardSucees);
    return res.json();
}

export async function updateCard(id:string,patch:Partial<Card>):Promise<Card>{
    const res = await fetch(`${BASE_URL}/cards/${encodeURIComponent(id)}`,{
        method:"PATCH",
        headers:HEADERS,
        body:JSON.stringify(patch)
    }) 
    if(!res.ok){
        toast.error(apiMessages.updateCardError)
        throw new Error("Update Card Failed")
    }
    return res.json();
}

export async function deleteCard(id:string):Promise<void>{
    const res = await fetch(`${BASE_URL}/cards/${encodeURIComponent(id)}`,{
        method:"DELETE"
    })
    if(!res.ok){
        toast.error(apiMessages.deleteCardError)
        throw new Error("Delete Card Failed")
    }
    toast.success(apiMessages.deleteCardSucees)
}
