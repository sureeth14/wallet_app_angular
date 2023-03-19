import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Wallet} from "./wallet";

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  constructor(private httpClient: HttpClient) {}

    id?:number;

    private putURL = "http://localhost:8080/wallet";

    private deleteURL = "http://localhost:8080/wallet";

    getWalletList(): Observable<any>{
      return this.httpClient.get("http://localhost:8080/wallets");
    }

    createWallet(newWallet: Wallet):Observable<any>{
    let url:string = "http://localhost:8080/wallet";
    return this.httpClient.post(url,newWallet,{responseType:'json'});
    }

    getId(getId?:number){
      this.id = getId;
    }
    getWalletById():Observable<Object>{
    return this.httpClient.get<Object>(`${this.putURL}/${this.id}`);
    }

    updateWalletById(wallet?: Wallet):Observable<Object> {
      return this.httpClient.put<Object>(`${this.putURL}/${this.id}`,wallet);
    }

  deleteWallet(id? : number): Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }

}

