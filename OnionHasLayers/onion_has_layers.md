title: Onion has layers
author: Michał Zając, Jacek Młynek

!SLIDE

## Ciekawostka - long life systems.

    Czy wiecie że niektóre strony żyją dłużej niż pół roku?

!SLIDE

## Nasza aplikacja
 
* ### Od 7 lat nieprzerwanie na PRD,
* ### podstawowy booking engin dla 60 agencji turystcznych,
* ### 44,000 lini produkcyjnego kodu w _C#_,
* ### 18,000 lini produkcyjnego kodu w _Javascript_,
* ### 1,200 testow,
* ### 40 releasow,
* ### integruje około 4 wewnętrzn i 6 zewnętrznych podsystemów.

!SLIDE

## Pamiętacie Boba?
% Taki może nawet nie duży system nie bylby możliwy gdybyśmy byli bobem budowniczym.

![Bob budowniczy](./img/bob.png "Bob budowniczy")

% w naszej paroletniej pracy widzielismy często programistow ktorzy sostawali w spadku jakis system. Pierwsza rzecz jak% a z reguly narzekali na niego i zaczynali prepisywac od nowa. Po jakims czasie na ich miejsc przychodzili nastepni wi % dzialo sie tak samo.

!SLIDE

## Architektura ewoluuje 

    Dobra architektura to nie tylko dobry projekt. Dobry projekt to dopiero początek o architekturze trzba myśleć cały czas.

***

    Dobry system można łatwo zepsuć.

***

    Słaby system można przywrócić do życia.
    
% o tym ostatim zwlaszcza wam opowiemy.

!SLIDE

## Co zastaliśmy.

* #### najbliżej do transaction script pattern,
* #### brak separacji logiki i infrastruktury,
* #### brak świadomego zarządzania zalerznościami,
* #### duża ilość duplikacji kodu,
* #### javascript, którego każdy się bał (jeden wielki antypattern),

### Jednym zdaniem
    Kruchość + brak testów = katastrofa!

!SLIDE

## Cebula o smaku backendu.

![Cebula beckend](./img/BackendOnion.jpg "Backend Onion")

