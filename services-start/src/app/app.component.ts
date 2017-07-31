import { Component, OnInit } from '@angular/core';
import { AccountsService } from "app/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] =  [];
  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountsService.updateAccount(updateInfo);
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accountsService.addAccount(newAccount);
  }
}
