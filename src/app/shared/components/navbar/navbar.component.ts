import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  linkedinIcon = faLinkedin;
  githubIcon = faGithub;
  kanbanIcon = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

  goGithub() {
    window.open('https://github.com/kellycibely/kanban', '_black');
  }

  goLinkedin() {
    window.open('https://www.linkedin.com/in/kelly-lopes-168686149/', '_black');
  }

}
