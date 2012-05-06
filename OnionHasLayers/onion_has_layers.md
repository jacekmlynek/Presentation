title: Onion has layers
author: Michał Zając, Jacek Młynek

% jacekm - wstęp

% mzaj

!SLIDE

## Ciekawostka - long-life systems

    Czy wiecie, że niektóre systemy żyją dłużej niż pół roku?

% obrazek?
!SLIDE

## Nasza aplikacja
 
* #### Od 5 lat nieprzerwanie na PRD
* #### podstawowy booking engine dla 60 agencji turystycznych
* #### 44,000 linii produkcyjnego kodu w _C#_
* #### 18,000 linii produkcyjnego kodu w _Javascript_
* #### 1,200 testów
* #### 40 release'ów
* #### integruje około 10 podsystemów

% jacekm

!SLIDE

## Pamiętacie Boba?
% Taki może nawet nie duży system nie bylby możliwy gdybyśmy byli bobem budowniczym.

![Bob budowniczy](./img/bob.png "Bob budowniczy")

% w naszej paroletniej pracy widzielismy często programistow ktorzy sostawali w spadku jakis system. Pierwsza rzecz jak% a z reguly narzekali na niego i zaczynali prepisywac od nowa. Po jakims czasie na ich miejsc przychodzili nastepni wi % dzialo sie tak samo.

% o tym ostatim zwlaszcza wam opowiemy.

!SLIDE

## Architektura ewoluuje 
    
    Dobra architektura to nie tylko dobry projekt. Dobry projekt to dopiero początek, o architekturze trzeba myśleć cały czas.
% podkreśliłbym, że to drugie (ciągłe utrzymanie) jest tak naprawdę istotniejsze niż dobry up-front design 

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

## Co zastaliśmy

* #### big ball of mud
* #### najbliżej do Transaction Script
* #### brak separacji logiki i infrastruktury
* #### brak świadomego zarządzania zależnościami
* #### bardzo duża duplikacja
* #### javascript, którego każdy się bał (jeden wielki antypattern)

#### Jednym zdaniem:
    Kruchość + brak testów = katastrofa!
% klasyczny legacy code

!SLIDE

## Co nas skłoniło do zmian

* #### Bardzo niska niezawodność systemu
Issue list potrafiła osiągać kilkadziesiąt pozycji w miesiącu

* #### Bardzo dlugo trwające update na PRD
Niekiedy nawet cały dzień :), bez powodzenia    

* #### Brak jakichkolwiek buildów
Systemu nikt nie potrafi uruchomić

* #### Perspektywa paru lat utrzymania
System przypominał maratończyka po maratonie kiedy ciągle miał sporo trasy przed sobą

* #### Potrzeba ciąglej rozbudowy
Ciągle pojawiały się nowe requesty od klienta oraz nowi klienci

!SLIDE

## Pierwsze kroki
% working with legacy code
* #### pierwsze testy jednostkowe
* #### sprzątanie nieużywanego kodu
* #### eliminacja duplikatów
* #### grupowanie powiązanych zagadnień
* #### świadome próby izolacji
% jacekm
* #### pierwsze próbowanie się z istniejącymi javscript'ami.

!SLIDE

## Rzeczy nabierają właściwych kształtów

![System puzzle](./img/system_puzzle.jpg "System puzzle")

!SLIDE 

## Composite i MVP pattern w Javascript
<% left do %>
![Js modules](./img/js_modules.jpg)
<% end %>

<% right do %>

<% step do %>

* Każdy element HTML może być częścią większej całość - doskonały przykład na _composite_ pattern.

<% end %>

<% step do %>
* Każdy element pełni zarazem odmienną funkcję a jenoczśnie zbudowany jest podobnych części:
    * mamy część odpowiedzialną za HTML - _View_,
    * mamy część odpowiedzialną za dane - _Model_,
    * mamy część za logike UI - _Presenter_.
    * Model nic nie wie o View i Presenterze.

<% end %>

<% step do %> 

* Każdy element istnieje niezależnie.

<% end %>
<% end %>

% Dodać tutaj albo slajd albo wspominiec co to dalo.

% mzaj

!SLIDE

## Dependency Injection & Loose Coopling
* #### testy jednostkowe (TDD) mocno wyartykułowały odwieczną potrzebę systemu
* #### centralny punkt zarządzania zeleżnościami - niekoniecznie (ciężki) framework DI
% wzmianka o złej prasie DI
* #### stopnie włącznie nowych obszarów
* #### mocny nacisk na separowanie się od _zewnętrznych_ komponentów

!SLIDE

## Domain Driven Design
* #### upside-down
* #### większy nacisk na domenę niż infrastrukturę 
* #### nie naginamy domeny problemu do używanej infrastruktury
% ponownie izolacja
* #### nie walczmy z rzeczywistością
* #### system zgodny z domeną łatwiej dostosowuje się do zmieniających wymagań
% maintainability vs. performance

!SLIDE

## Zaczyna rysować się architektura
* #### zastasowane wzorce i praktyki zaczęły formowac całościową architekturę systemu
* #### dodatkowo w warstwie front-end pojawiają się kolejne czynniki
    * szybki rozwój i zmiany używanych bibliotek
    * globalna zmiana podejścia do javascriptów i wypracowywanie coraz lepszy wzorców
    * requesty od klientów
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
* #### Jimmy Nilsson. Applying Domain-Driven Design and Patterns: With Examples in C# and .NET
* #### Robert C. Martin. Agile Principles, Patterns, and Practices in C#
* #### http://jeffreypalermo.com/blog/the-onion-architecture-part-1/ 
