title: Old body young soul
author: Jacek Mlynek


!SLIDE

## Why javscript in this way?

### You are not bored, when you start learning new language from its bases (types, loops, classes ...)?

Why you always start from theB beginning? Why we learn something which is almost the same  in all languages?  

### The best way to get better with something is learning its distinctive features.

If you know well other languages, you should start from the biggest differ features. You should start from something which we can call _"ideas behind language"_.

### What can be more specific for languages if not its own "body" and "soul"? :)

Body represents something which you can touch, something which can use up. Soul are all stuff which remains the same no matter how old are you. 

!SLIDE

## It is not only about javascript!

### First of all I must say that me and javascript, that we are not in "love"! :)

We are just "friends". It is for those who know me and really don't understand my simply interest with javascript. 

### It is specially for those with a lot of experience.

It is really something big if you convince guys with many years experience, with master skills in such a languages like Java or Ruby put theirs attention to this tiny languages starting with small "j". There is something money can't buy :)   

!SLIDE

## What for? 

### Not for writing better javascript code!

I will not try convince you to get better with javascript for better js code. Maybe you will not have to, maybe you will. Maybe in the next year we can deal with "super magic" DSL (better than coffee script), which do all work for us.

### For writing better code!

If you can understand the good and bad idea behind some language you can search it or omit in another.   
I will try convince you to "use" this simply language as a _"excuse"_ to better understand object oriented programming.   

!SLIDE

## How can we meet js?

### Back to past.

We try to remembered how programming use to look like and how it has changed. We look in this context to javascript.

### Through today to get to tomorrow.

We will see if javascript besides of its age and "body" is in step with mainstream languages such as ruby.

!SLIDE

## Simple is beautiful!

### First time go back to past and look how it has changed:
    
* from procedural to functional programming, 
* from machine code to languages close to domain, 
* from cryptic symbols to very _"plastic forms"_.
    
Back to your childchood, try to remembered your first steps. Methods with many lines of codes, programs base on one class, conditions almost looks like [De Morgan's laws](http://en.wikipedia.org/wiki/De_Morgan%27s_laws).

    We can learn from a few developers generations, that if somthing is less complicated than it is better.

!SLIDE
   
## Javascript is simple!

* ### simple object literal notation (_json_ is subset of it),
* ### easy to form - easy to extend,
* ### duck typing,
* ### _closur_ aka block,
* ### class free,
* ### just few build in types - easy to learn.

!SLIDE

## Simple object example.
    
    var pussInBoots = {
        weight: 11,
        speed: 10,
        numberOfMouseKilled: 3,
        danceSkillLeve: "low",
        eye: "very dark",
        drinkWine: function() {},
        takeOffBoots: function() {}
        };

## Nice, but how can I create a group of objects.

!SLIDE

## This is how _"professionals"_ deal with it!

### Class's World.
From many years, through such a languages like C++, Java, C# and even Ruby, the base way to create new object instance is _Class_.  

### Common base class responsibility:
* object creation,
* place for common object behevior and data.

### Common class problems especially in business logic layer:
* bad understand DRY principle goes to wrong class inheritnace (domain class inherit from tools class)
* strong inheritnace relationship can very easy violates [SRP](http://pragmaticcraftsman.com/2006/07/single-responsibility-principle/), [LSP](http://blog.objectmentor.com/articles/2008/09/06/the-liskov-substitution-principle-for-duck-typed-languages).

!SLIDE

## Novice naive example.
    We have a domain class Invoice. Invoice have a lot of fields like total price, tax, payment date and few behaviors.
  
    After some time our client request for pdf, html and csv invoice support. Some "guy" who may not understand very well DRY has found tool Printer which actually do all the work. He inherit Invoice from Printer. He think that this functionality comes for free. Everything works well, he is happy.
 
### However, he violated a few bases rules and principles:
* First of all he made dependency in his domain from much less important tool.
* Violated SRP. Invoice now is effected by Printer class changes which can anforce Invoice to change with Printer.

!SLIDE

## Classic shapes example.
  
It is well know example with shapes. Like square and rectangle and area calculation. I think just everybody knows those examples if not [see this](http://www.google.com/url?sa=t&rct=j&q=violate%20liskov%20substitution%20principle%20squer%20rectangle&source=web&cd=1&ved=0CCQQFjAA&url=http%3A%2F%2Fwww.objectmentor.com%2Fresources%2Farticles%2Flsp.pdf&ei=8OGKT4PvOaOJ4gSa08mNCg&usg=AFQjCNFnNI0DmzofjWDQEGILAT-W1L8Mtw&cad=rja) or [read this](http://www.amazon.co.uk/Principles-Patterns-Practices-Robert-Martin/dp/0131857258/ref=pd_rhf_se_p_t_1).
     
    The idea behind "shapes examples" is that if you inherit and change base behaviours you can very easy violates contract between collaborator and his client. It is much more harder to see than violation from previous example because it can be see only in term of client. Not in isolation.

### Its violates LSP because square is not rectangle in client of calculate rectangle area.

!SLIDE

## Still far away from the domain. 

### The Good and the Bad example.
    
    Priest, particularly good and honest. He help poor people, give them food, cloths. He try to teach other how to live and not hurt anybody. However, when night comes, he become thief and still charities.  
   
    In real World the same object (priest) can has many different behaviours "the good man" and "the bad man". In our code will be impossible to create class which contains behaviours for "the good" (priest) and the bad (thief) without violating SRP principle.

!SLIDE

## Problem.
* First of all class are not unique, the same violation of principles can be done with modules or functions. Maybe with classes it is much more easier maybe not.

* The problem is that, OOP was create to close our code to domain. In this case in many languages classes have significant role. However, it seems to the same classes keep as still far away from domain.

### Maybe it is time to look at object in different way? Besides OOP is about objects not necessary about classes. 

!SLIDE 

## Question.

### OK. But object without class? It is really possible?

### If it is even true, can it help in some way? 

!SLIDE 

## Go back to nature!

    Forget for a moment about classes. Make one step back and try remembered on what OOP creators base on. Go back to the nature.     

***    

    In nature one concrete specimen has been "created" by other concrete specimen. Not by some kind of "still life".

***

    Dog, cat, capybara, fly, duck are "creating" by other dogs, cats, capybara, flies, ducks. Not by plastic dogs plush cats, jelly capybara, mechanical flies or steel ducks.

!SLIDE

## _MyCar_ as simple prototype.

![Transparent Inheritance](./img/TransparencyInheritanceV5.jpg "Transparent Inheritance")

add link to examples

!SLIDE 

## Idea behind _prototype_.

### Prototype is just other way to create object and share common behaviour.
  
#### How it works? 
It allowed us to create new objects base on other objects - like in nature. 

    I love my first car so much that I want my next cars (myRoadCar, myTruckCar, myRoadsterTruck) look almost the same like myCar.

#### It is very important to understand transparent inheritance. 
No matter if we create new instance or new group of objects it looks exactly the same.
    
    MyRoadCar is like "next instance" of myCar, myTruckCar is full working truck but is also something more. It is base (parent) for myRoadsterTruck. 

!SLIDE

{{{
  var myOffRoadCar = Object.create(myCar);
    
  myOffRoadCar.name = "My off road car, its not prototyp, it can be, but now not nessesery";
  myOffRoadCar.sound = "road hrrr szrr"; // should overide mycar sound.
  myOffRoadCar.fireSecondWheelDrive = function(){
    console.log("second wheel drive has been fired");
  };    
  myOffRoadCar.startDrive(); //Should log raod hrrr szrr instand of brum
  
  var myTruckCar = Object.create(myCar);
    
  //Differances only
  myTruckCar.name = "My track has become truck prototype ";
  myTruckCar.sound = "hrrrrr plum";
  myTruckCar.containerType = "long";
  myTruckCar.cargoType = "wood";
  myTruckCar.relaseCargo = function (){
    console.log("cargo  has been relased");
  };
  myTruckCar.startDrive();
  myTruckCar.relaseCargo();
    
  // aguments params.
  var myRoadsterTruck = Object.create(myTruckCar,{
    name: {
        value: "My beautiful truck", 
        writable: true,
        configurable: true,
        enumerable: true},
    containerType: {value: "short"}
    });
  myRoadsterTruck.startDrive(); // it has not have its own sound so shoud get from myTruckCar.
    
  // It will be not needed i my shiny new truck :)
  myRoadsterTruck.cargoType = undefined;
  myRoadsterTruck.relaseCargo = undefined; 
  }}}

!SLIDE 

## What we get?

* ### Simplest object creation and code sharing.
We don't need anymore additional abstraction like class. All what we need is object and piece of code.

* ### Transparent _"inheritance"_.
In the same way we can create "new instance" and new group of objects. 

* ### Sharing code by delegation, help with SRP.
One solution for wrong inheritance which violates SRP (Invoice and Printer example) can be _composition_. In javscript through _prototype_ we get it for free. It is natural, easy and without any overhead. 

### By the way, sharing by delegation sounds quit familiar, doesn't it?

!SLIDE

## Śladami rubiego w javascript - Mixin.js.
Przykład mixin w rubim:

{{{module Printable
  def print_to_pdf
    puts "Text as pdf: #{self.details}"
  end
  
  def print_to_html
    puts "Text as html: #{self.details}"
  end
   
  def print_to_csv
    puts "Text as csv: #{self.details}"
  end
end
   
class Invoice
  include Printable
  attr_accessor :details
end
   
tv_invoice = Invoice.new
tv_invoice.details = "tv invoice for march equal 120 pln"
tv_invoice.print_to_pdf if tv_invoice.respond_to? 'print_to_pdf' 
   
mobile_invoice = Invoice.new 
mobile_invoice.details = "mobile invoice for april 89 pln"
mobile_invoice.print_to_csv if mobile_invoice.respond_to? 'print_to_csv'
}}}

!SLIDE

## Śladami rubiego w javascript - Mixin.js. 
Przykład zmiksowania w javscript:

{{{var printable = {
    printToPdf: {
      value: function()
      {
        console.log("Text as pdf: " + this.details);
      }
    },
    printToHtml: {
      value: function()
      {
        console.log("Text as html: " + this.details);
      }
    },
    printToCsv: {
      value: function(){
        console.log("Text as csv: " + this.details);
      }
    }
  };
  // Invoice maker like constructor but without "new".
  var invoiceMaker = function()
  {
    var _details;
    var _proto = {};
    Object.defineProperties(_proto, printable);
    var _that = Object.create(_proto);
  
    _that.details = _details;
    
    return _that;
  };
  
  tvInvoice = invoiceMaker();
  tvInvoice.details = "tv invoice for march equal 120 pln";
  if(tvInvoice.printToCsv !== undefined) tvInvoice.printToCsv();
   
  mobileInvoice = invoiceMaker();
  mobileInvoice.details = "mobile invoice for april 89 pln";
  if(mobileInvoice.printToHtml !== undefined) mobileInvoice.printToHtml();
}}}

!SLIDE

## Gdzie jest haczyk?
Generalnie jeden kod i drugi robi to samo - deleguje pewne cechy do obiektów, do nowych instancji obiektów.

### Nie liczy się co tylko jak - różnice.
1. Skoro każdego klienta nie obchodzi _"skąd"_ tylko _"czy"_ to naprawdę potrzebny jest nam typ nadawany przez klasę?      
2. Pomyślmy czy potrzebne jest nam też wyróżnienie abstrakcji - moduł? Czy nie lepiej dać domenie zrobić to za Nas? Czy _"prinatble"_ nie jest wystarczającą abstrakcją. W rubim raczej nie. Moduł jest potrzebny bo dodatkowo pokazuje że nie możemy utworzyć nowej instancji. W javascript nie! Tutaj nie ma dla nas znaczenie czy tworzymy nową instancje czy dajemy początek nowej rodzinie obiektów (klasycznie klasie).

### Podążaj za domeną rasistowski przykład!
    Piszemy system gdzie mamy jakiegoś Murzyna. Murzyn biega, skacze ... Za jakiś czas musimy dorobić Żółtka. Robi prawie to samo tylko woli ryż od bananów. Chcielibyśmy wydzielić to co ich łączy. Jeśli to co ich łączy ma swoją rolę w domenie wydzielmy to do czegoś co nazwiemy Human (klasa, obiekt). Jeśli nie ma roli w domenie po prostu zróbmy abstrakcje Humanable w js zwykły obiekt.

!SLIDE

## Gadu gadu ale jak to się ma do SRP czy LSP?

### Dobra delegacja zamiast dziedziczenia lekarstwem na SRP.
Mixin w rubim czy javscript wydaje się radzić super jeśli chodzi o zasady DRY czy SRP. Ponad to jest prosty i zgodny z naturą obu języków.

### Niestety nie radzi sobie z "księdzem" i "kwadratem".
Rozszerzenie klasy za pomocą mixin o ile zapobiegnie przypadkowy złego dziedziczenia po klasie narzędziowej o tyle nie poradzi sobie ze wspomnianymi przypadkami księdza czy kwadrata.

### Czy możemy zatem jakoś w ogóle z tym sobie poradzić?

!SLIDE

## Warunkowa zmiana obiektów.

### Oddzielmy dane od zachowań.

### Rozszerzajmy obiekty warunkowo w runtime.

    Czy to coś zmienia? Zasadniczo kodu w rutime (w pamięci programu) nie dotyczy SRP nie musimy go utrzymywać.
Jeśli chcemy księdza mamy księdza jak chcemy złodzieje mamy złodzieja. To samo z kwadratem. Tutaj po prostu figura raz będzie prostokątem raz kwadratem.


### To wszystko prowadzi do DCI ale to już historia na następny raz.

!SLIDE

## Podsumowanie.

### Javascript mimo swojego wieku wydaje się być całkiem rześkim dziadkiem.

***

### Może się czasami potknie (przekazywanie this, czy też operator new), nie mniej w niektórych momentach jest wstanie prześcignąć rubiego (brak klas, prostota).

***

### Wydaje się zatem idealnym językiem do modelowania domeny, do DCI.
