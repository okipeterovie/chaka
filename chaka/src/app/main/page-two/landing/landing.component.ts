import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastService } from 'src/app/bootstrap/toast/ToastService';
import { ApiService } from 'src/app/services/api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  isLoading: boolean = false;
  profileArray: any[] = [];
  lineChart: any;
  barChart: any;

  constructor(private httpClient: HttpClient,
    private toastService: ToastService,
    private apiServices: ApiService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.isLoading = true;

    let url = "https://finnhub.io/api/v1/stock/profile2?symbol=BNGO&token=c15n0lf48v6taen8rmq0"

    this.httpClient.get<any>(url).pipe(
      finalize(() => {
        this.isLoading = false;
        this.drawLineChart('lineChart',
          [2, 3, 5, 6, 4, 8, 9, 2, 1, 4, 5, 6, 6, 7, 9, 2, 1, 5, 7, 6, 9, 8, 2, 5, 4, 8, 6],
          ['2', '3', '5', '6', '4', '8', '9', '2', '1', '4', '5', '6', '6', '7', '9', '2',
            '1', '5', '7', '6', '9', '8', '2', '5', '4', '8', '6'],
          ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue',
            'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue',
            'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue']);

        this.drawBarChart('barChart',
          [2, 3, 5, 6, 4, 8, 9, 2, 1, 4, 5, 6, 6, 7, 9, 2, 1, 5, 7, 6, 9, 8, 2, 5, 4, 8, 6],
          ['2', '3', '5', '6', '4', '8', '9', '2', '1', '4', '5', '6', '6', '7', '9', '2',
            '1', '5', '7', '6', '9', '8', '2', '5', '4', '8', '6'],
          ['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue',
            'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue',
            'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue']
        );
      })
    ).subscribe((response: any) => {
      // this.toastService.showSuccess("News fetched Sucessfully!");

      this.profileArray = response;
      // console.log(this.profileArray)
    },
      (error) => {
        this.toastService.showDanger(error);
      });
  }

  drawLineChart(id: string, data: any[], label: any[], color: any[]) {
    this.lineChart = new Chart(id, {
      type: 'line',
      options: {
        responsive: true,
        spanGaps: false,
        maintainAspectRatio: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          // text: 'Comparison'
        },
        layout: {
          padding: {
            left: 32,
            right: 32
          }
        },
        elements: {
          point: {
            radius: 4,
            borderWidth: 2,
            hoverRadius: 4,
            hoverBorderWidth: 2
          },
          // line: {
          //   tension: 0
          // }
        },
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                min: 0,
                // max: 5,
                // stepSize: 0.5
              }
            }
          ]
        },
      },
      data: {
        labels: label,
        datasets: [
          {
            type: 'line',
            label: id,
            data: data,
            borderColor: color,
            backgroundColor: color,
            fill: false,
          },
        ]
      }
    });
  }

  drawBarChart(id: string, data: any[], label: any[], color: any[]) {
    this.barChart = new Chart(id, {
      type: 'bar',
      options: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          // text: 'Comparison'
        },
        scales: {
          xAxes: [
            {
              display: false,
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                min: 0,
                // max: 500,
              }
            }
          ]
        }
      },
      data: {
        labels: label,
        datasets: [
          {
            type: 'bar',
            barPercentage: 0.5,
            label: id,
            data: data,
            // borderColor: color,
            backgroundColor: color,
            fill: true,
          },
        ]
      }
    });
  }

  redirect(path: string): void {
    this.router.navigateByUrl(path);
  }


}
