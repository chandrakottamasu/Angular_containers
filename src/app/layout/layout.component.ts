import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../card-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  a: User[];
  filteredList: User[];
  private _searchText: string;

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;

    if (!this._searchText) {
      this.filteredList = this.a;
    }
    else {
      this.filteredList = this.modifyList(value);
      this.hasData();
    }

  }
  public hasData(): boolean {
    return (this.filteredList != null && this.filteredList.length > 0);
   }

  modifyList(searchString: string) {
    return this.a.filter(data =>
      data.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  constructor(private service: CardServiceService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.a = this.service.dynamicCard;
    this.filteredList = this.a;
  }
  redirectTo(data) {
    this.router.navigate(['/app-card/edit', data.id]);
  }


}
