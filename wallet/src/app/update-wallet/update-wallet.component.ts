import {Component, OnInit} from '@angular/core';
import {Wallet} from "../wallet";
import {Router} from "@angular/router";
import {WalletService} from "../wallet.service";

@Component({
  selector: 'app-update-wallet',
  templateUrl: './update-wallet.component.html',
  styleUrls: ['./update-wallet.component.css']
})
export class UpdateWalletComponent implements OnInit{
  wallet:Wallet = new Wallet();

  constructor(private router:Router,private walletService:WalletService) {
  }
  ngOnInit():void {
    this.getWalletById();
 }

 // onSubmit(){
 //
 // }
 updateWallet(id?:number){
    console.log(this.wallet);
    this.walletService.updateWalletById(this.wallet).subscribe();
    this.router.navigate(['view']);
 }

 getWalletById(){
    this.walletService.getWalletById().subscribe(data=>{
      this.wallet = data;
    });
 }
}
