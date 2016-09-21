import { Injectable } from '@angular/core';
import {Ads, Books, Cars, Mobiles} from './adObjects'; // classes imported
import { ad } from './adArray'; //ad array imported

@Injectable()
export class AdService {
    getAds(): any[] {
        return ad;
    }
}