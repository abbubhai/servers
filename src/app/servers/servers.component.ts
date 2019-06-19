import { Component, OnInit } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus= 'No server was created';
  serverName=' Test Server';
  serverCreated= false;
  servers =['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
