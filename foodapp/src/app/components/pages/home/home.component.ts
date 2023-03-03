import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    activaTedRoute: ActivatedRoute
  ) {
    let foodsObservable: Observable<Food[]>;
    activaTedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      } else if (params.tag) {
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        foodsObservable = this.foodService.getAll();
      }

      foodsObservable.subscribe((serverFoods: Food[]) => {
        this.foods = serverFoods;
      });
    });
  }

  ngOnInit(): void {}
}
