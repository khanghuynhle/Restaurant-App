import { Injectable } from '@angular/core';
import { BaseService } from 'app/services/base.service';
import { Category } from 'app/models/category';
import { Http } from '@angular/http';
import { ApiUrl } from 'app/config/constants';


@Injectable()
export class CategoryService extends BaseService<Category> {

  constructor(http: Http) {
    super(http);
  }

  baseUrl(id?: string): string {
    let entityId = '';
    if (id) {
      entityId = '/' + id;
    }

    return ApiUrl + 'categories' + entityId;
  }
}
