import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'src/app/bootstrap/toast/ToastService';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  isLoading: boolean = false;
  newsArray: any[] = [];

  page: number = 1;
  pageSize: number = 10;


  constructor(private httpClient: HttpClient,
    private toastService: ToastService,
    private apiServices: ApiService,
    private router: Router) {
    this.getNews()
  }

  ngOnInit(): void {
  }

  getNews() {
    this.isLoading = true;

    let url = "https://finnhub.io/api/v1/news?category=general&token=c15n0lf48v6taen8rmq0"

    this.httpClient.get<any>(url).pipe(
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe((response: any) => {
      // this.toastService.showSuccess("News fetched Sucessfully!");

      this.newsArray = response;
      // console.log(this.newsArray)
    },
      (error) => {
        this.toastService.showDanger(error);
      });
  }

  convertUnixTimeStampToDate(timestamp: any) {
    let unix_timestamp = timestamp

    let date = new Date(unix_timestamp * 1000);

    let hours = date.getHours();

    let minutes = "0" + date.getMinutes();

    let seconds = "0" + date.getSeconds();

    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // console.log(formattedTime);

    return formattedTime
  }

  readNews(link: any) {
    if (link == null) {
      alert('nolink attached here')
      return
    }
    window.open(link, "_blank");
  }

  redirect(path: string): void {
    this.router.navigateByUrl(path);
  }

}
