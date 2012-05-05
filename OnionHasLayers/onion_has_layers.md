title: Onion has layers
author: Michał Zając, Jacek Młynek

% jacekm - wstęp

% mzaj

!SLIDE

## Ciekawostka - long life systems.

    Czy wiecie że niektóre systemy żyją dłużej niż pół roku?

% obrazek?
!SLIDE

## Nasza aplikacja
 
* ### Od 5 lat nieprzerwanie na PRD,
* ### podstawowy booking engine dla 60 agencji turystcznych,
* ### 44,000 linii produkcyjnego kodu w _C#_,
* ### 18,000 linii produkcyjnego kodu w _Javascript_,
* ### 1,200 testow,
* ### 40 releasow,
* ### integruje około 4 wewnętrznych i 6 zewnętrznych podsystemów.

% jacekm

!SLIDE

## Pamiętacie Boba?
% Taki może nawet nie duży system nie bylby możliwy gdybyśmy byli bobem budowniczym.

![Bob budowniczy](./img/bob.png "Bob budowniczy")

% w naszej paroletniej pracy widzielismy często programistow ktorzy sostawali w spadku jakis system. Pierwsza rzecz jak% a z reguly narzekali na niego i zaczynali prepisywac od nowa. Po jakims czasie na ich miejsc przychodzili nastepni wi % dzialo sie tak samo.

% o tym ostatim zwlaszcza wam opowiemy.

!SLIDE

## Architektura ewoluuje 
    
    Dobra architektura to nie tylko dobry projekt. Dobry projekt to dopiero początek o architekturze trzba myśleć cały czas.

![Systematic work](./img/systematicly_work.jpg "Systematic work")

!SLIDE

## Architektura ewoluuje 

    Dobry system można łatwo zepsuć.

![Jenga](./img/SOLID_Jenga.jpg "Jenga")

!SLIDE

## Architektura ewoluuje 

    Słaby system można przywrócić do życia.

![Correct system](./img/correct_system.jpg "Correct system")

% mzaj

!SLIDE

## Co zastaliśmy.

* #### najbliżej do transaction script pattern,
* #### brak separacji logiki i infrastruktury,
* #### brak świadomego zarządzania zależnościami,
* #### duża ilość duplikacji kodu,
* #### javascript, którego każdy się bał (jeden wielki antypattern),

### Jednym zdaniem
    Kruchość + brak testów = katastrofa!

!SLIDE

## Co Nas skłoniło do zmian.

* #### Bardzo niska niezawodność systemu.
Issue list potrafiła osiągać kilkaset pozycji w miesiącu.

* #### Bardzo dlugo trwające update na PRD.
Niekiedy nawet cały dzień :), bez powodzenia.    

* #### Brak jakichkolwiek buildów
Systemu nikt nie potrafi uruchomić

* #### Perspektywa paru lat utrzymania.
System przypominał maratończyka po maratonie kiedy ciągle miał sporo trasy przed sobą.

* #### Potrzeba ciąglej rozbudowy.
Ciągle pojawiały się nowe requesty od klienta i nowi klienci.

!SLIDE

## Pierwsze kroki.

* ### pierwsze testy jednostkowe,
* ### sprzątanie nieużywanego kodu,
* ### eliminacja duplikatów,
* ### grupowanie powiązanych zagadnień,
* ### świadome próby izolacji, separacji,
% jacekm
* ### pierwszy konatak z istniejącymi javscript'ami.

!SLIDE

## Rzeczy nabierają właściwych kształtów.

![System puzzle](./img/system_puzzle.jpg "System puzzle")

!SLIDE 

## Composite i MVP pattern w Javascript.

![Js modules](./img/js_modules.jpg)

!SLIDE

## Composite i MVP pattern w Javascript.

### Każdy element HTML może być częścią większej całość - doskonały przykład na composite pattern.
  
### Każdy element pełni zarazem odmienną funkcję a jenoczśnie zbudowany jest podobnych części:
* mamy część odpowiedzialną za HTML - View,
* mamy część odpowiedzialną za dane - Model,
* mamy część za logike UI - Presenter.
Przyczym dość ważne jest aby że Model nic nie wiem o Presenterze i View.
    
  
### Każdy element może istnieć niezależnie.

% mzaj

!SLIDE

## Loose Coopling & Dependency Injection
* testy jednostkowe mocno wyartykuowały odwieczną potrzebę systemu
* centralny punkt zarządzania zeleżnościami - niekoniecznie framework DI
* mocny nacisk na separowanie się od _zewnętrznych_ komponentów

!SLIDE

## Domain Driven Design
* większy nacisk na domenę niż infrastrukturę
* nie walczymy z rzeczywistością
* system zgodny z domeną łatwiej dostosowuje się do zmieniających wymagań 

!SLIDE

## Zaczyna rysować się architektura
* zastasowane wzorce i praktyki zaczęły formowac całościową architekturę systemu
* dodatkowo w warstwie front-end pojawiają się kolejne czynniki
    * szybki rozwój i zmiany używanych bibliotek
    * globalna zmiana podejścia do javascriptów i wypracowywanie coraz lepszy wzorców
    * request od klientów
    * dotychczasowy model MVP robi się za mały - pojawiają się nowe warstwy

!SLIDE

## Gdzie jesteśmy

![Generic onion](./img/onion_layers.jpg "Generic onion")

!SLIDE

## Cebula o smaku backendu.

![Cebula beckend](./img/BackendOnion.jpg "Backend Onion")

% jacekm wspomniec o wadach i salbosciach MVP

!SLIDE

## Cebula front-end'owa

![Cebula front-end'owa](./img/frontend_onion.jpg "Cebula front-end'owa")

!SLIDE

## Bibliografia


