title: Onion has layers
author: Michał Zając, Jacek Młynek

% jacekm - wstęp

% mzaj

!SLIDE

## Long-life systems

    Did you known that some systems lifes more than one year?

![Long life system](../img/long_life_system.jpg "Long life system")

!SLIDE

## Few facts about our application
* #### Have worked on PRD from five years 
* #### Main booking engin to sixty tourist agency
* #### 44,000 lines of production code in _C#_
* #### 18,000 lines of production code in _Javascript_
* #### 1,200 tests
* #### 40 releases
* #### Integrate about 10 subsystems

% jacekm

!SLIDE

## Do you remember Bob the Builder?
% Taki może nawet nie duży system nie bylby możliwy gdybyśmy byli bobem budowniczym.

![Bob budowniczy](../img/bob.png "Bob budowniczy")

!SLIDE

## A lot of us seems to like Bob's approach.
* #### Starts working with legalcy system
* #### Complains on it
* #### Deside to build the same system from the beginning
* #### Makes few things _better_
* #### Start to belive in "steel" design and lost big picture
* #### After some time the system looks like the old one

!SLIDE

## Architecture Evaluation
   
    Good architectural design is not only a good project. Good project is just the beginning, you must think about  architectural design all the time.  
 
% podkreśliłbym, że to drugie (ciągłe utrzymanie) jest tak naprawdę istotniejsze niż dobry up-front design 

![Systematic work](../img/systematicly_work.jpg "Systematic work")

!SLIDE

## Architecture Evaluation

    Even well working system can be easy break.

![Jenga](../img/SOLID_Jenga.jpg "Jenga")

!SLIDE

## Architecture Evaluation

    Evan weak system can become strong.

![Correct system](../img/correct_system.jpg "Correct system")

% mzaj

!SLIDE

## What we got in our application

* #### Big Ball of Mud
* #### Transaction Script
* #### No logic and infrastructure separetion
* #### No any kind of dependency management
* #### A lot of code duplication
* #### Javascript as one big ani pattern

#### In other words:
    fragility + no test = disaster!
% klasyczny legacy code

!SLIDE

## What pushed us into changes

* #### Low level of system reliability
A lot of opened issues and bugs.

* #### Updates take so long time
In some cases it can take even one day and fail

* #### No any kind of automatic builds
Very hard to create new system instance

* #### At least few years system maintenes perspective
System reminds marathon man after marathon although marathon still go on

* #### System development
New requests from our clients and new clients still required system development

!SLIDE

## First steps
% working with legacy code
* #### First unit tests
* #### Cleaning useless code
* #### Dupication code resolving
* #### Related problems grouping
* #### First attempt to layer isolation
% jacekm
* #### First entry to client side( Dark World of Javscript)

!SLIDE

## Things are starting to gel

![System puzzle](../img/system_puzzle.jpg "System puzzle")

!SLIDE 

## Composite and MVP pattern in Javascript
<% left do %>
![Js modules](../img/js_modules.jpg)
<% end %>

<% right do %>

<% step do %>

* Every HTML elements can contains other elements - excellent example of _composite_ pattern.

<% end %>

<% step do %>
* Every element has distinct role, however each element is builds with the same parts:
    * We have part responsible for HTML - _View_
    * We have part responsible for a data - _Model_
    * We have part responsible for UI logic -_Presenter_
    * Model is not related with View neither Presenter

<% end %>

<% step do %> 

* Every element exist in isolation

<% end %>
<% end %>

!SLIDE

## What we achieve on the client side?
   
* #### Basic division of Responsibility
* #### Possibility of bug fix without text parser :)
* #### Module reusability
* #### Development new feature without risk of breaking old ones 
% mzaj

!SLIDE

## Dependency Injection & Loose Coupling
* #### TDD and unit tests were like first sign of DI 
* #### Dependency management - not necessary external complex and heavy framework
% wzmianka o złej prasie DI
* #### Step by step involve new system areas 
* #### A lot of effort to isolate from _external_ components

!SLIDE

## Domain Driven Design
* #### Upside-down
* #### Focusing on domain not on infrastructure
* #### Infrastructure not deside about domain.
* #### Domain not tools or frameworks decide about design
% ponownie izolacja
* #### Application like a domain description
* #### System built on domain is more flexible for requirements changes
% maintainability vs. performance

!SLIDE

## First sings of system architecture
* #### Used patterns and good practices in each layer and components have form whole system architecture 
* #### Additionaly in frontend layer appears new factors
    * Quick development and changes in external libraries
    * Global dev community start taking Javascript seriously as a language   
    * Requests from clinets - big pressure on experience
    * Client side MVP becomes not sufficient - new layers appears on the client 

!SLIDE

## Where we are now

![Generic onion](../img/onion_layers.jpg "Generic onion")

!SLIDE

## Back-end flavour onion

![Cebula beckend](../img/BackendOnion.jpg "Backend Onion")

% jacekm wspomniec o wadach i salbosciach MVP

!SLIDE

## Front-end flavour onion

![Cebula front-end'owa](../img/frontend_onion.jpg "Cebula front-end'owa")

!SLIDE

## Bibliography:
* #### Jimmy Nilsson. Applying Domain-Driven Design and Patterns: With Examples in C# and .NET
* #### Robert C. Martin. Agile Principles, Patterns, and Practices in C#
* #### http://jeffreypalermo.com/blog/the-onion-architecture-part-1/
* #### http://martinfowler.com/eaaDev/uiArchs.html
* #### http://www.slideshare.net/nzakas/scalable-javascript-application-architecture 
