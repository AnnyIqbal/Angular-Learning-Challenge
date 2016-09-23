import {Ads, Books, Cars, Mobiles} from './adObjects';

export const ad : any[] = [ // hard coded array for ad listings
        {x : new Books("HTML & CSS", "Jon Duckett", "HTML & CSS", 200, "app/Images/htmlcss.png")},
        {x : new Books("Git Essentials", "Ferdinando Santacroce", "Git", 700, "app/Images/git.png")},
        {x : new Mobiles("J1-Ace", "Samsung", "White", 4.3, 19000, "app/Images/j1.jpg")},
        {x : new Books("A Smarter Way To Learn JavaScript", "Mark Mayers", "JavaScript", 500, "app/Images/js.png")},
        {x : new Cars("Vitz", "Toyota", 2017, 1200, "Red", 500000, "app/Images/vitz.jpg")},
        {x : new Cars("Corolla", "Toyota", 2016, 1500, "Blue", 540000, "app/Images/corolla.jpg")},
        {x : new Cars("CheryQQ", "Santro", 2016, 1000, "White", 205000, "app/Images/cheryqq.jpg")},
        {x : new Mobiles("Noir S1", "Q-Mobile", "Black", 5, 11000, "app/Images/S1.png")},
        {x : new Mobiles("E8-2", "htc", "black", 5, 27000, "app/Images/htc.jpg")}
    ]; // objects are pushed dynamically whenever a user posts ad
