import {Component, OnInit} from '@angular/core';
import {Wallet} from "../wallet";
import {WalletService} from "../wallet.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.css']
})

export class CreateWalletComponent implements OnInit {
  wallet: Wallet = new Wallet();
  constructor(private walletService : WalletService ,
              private router : Router) { }

  ngOnInit():void {
  }
  onSubmit(){
    console.log(this.wallet);
    this.saveWallet();
  }

  saveWallet(){
    this.walletService.createWallet(this.wallet).subscribe(data => {
      console.log(data);
      this.goToWalletList();
    },
      error => console.log(error));
  }

  goToWalletList(){
    this.router.navigate(['/view']);
  }
}
