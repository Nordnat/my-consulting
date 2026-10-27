export type SubCompetencyDetail = {
  tagline: string
  overview: string
  keyBehaviors: string[]
  antiPatterns: string[]
  auditQuestions: string[]
  maturityIndicators: {
    level1: string
    level3: string
    level5: string
  }
}

export const SUBCOMPETENCY_DETAILS: Record<string, Record<string, SubCompetencyDetail>> = {
  'agile-lean-practitioner': {
    'mindset': {
      tagline: 'Głębokie zrozumienie filozofii zwinności i ciągłego doskonalenia ponad sztywnymi regułami.',
      overview: 'Agile/Lean Mindset to fundament wiarygodności każdego coacha. Nie polega na recytowaniu Manifestu Agile czy zasad Scruma, lecz na codziennym podejmowaniu decyzji w duchu empiryzmu (przejrzystość, inspekcja, adaptacja), minimalizacji marnotrawstwa i koncentracji na dostarczaniu wartości użytkownikowi końcowemu.',
      keyBehaviors: [
        'Zawsze zadaje pytanie „dlaczego?”, pomagając zespołom i liderom zrozumieć cel praktyk, a nie tylko ich formę.',
        'Promuje kulturę psychologicznego bezpieczeństwa i traktuje błędy jako okazje do nauki.',
        'Koncentruje się na przepływie wartości (flow) i redukcji marnotrawstwa zamiast maksymalizacji zajętości ludzi.',
        'Wspiera myślenie produktowe zamiast wąskiego podejścia projektowo-harmonogramowego.',
      ],
      antiPatterns: [
        'Dogmatyczne trzymanie się zasad przewodników bez uwzględnienia realiów biznesowych i technologicznych.',
        '„Agile Police” — upominanie zespołów za odstępstwa od reguł zamiast zrozumienia ich przyczyn.',
        'Akceptowanie pozornego Agile (tzw. Cargo Cult / Zombie Scrum), gdzie ceremonie trwają, ale nie ma adaptacji.',
      ],
      auditQuestions: [
        'Czy zespół rozumie cel i wartość poszczególnych ceremonii, czy traktuje je jako narzucony obowiązek?',
        'Jak zespół i liderzy reagują na nieudany eksperyment lub awarię produkcyjną?',
        'Czy decyzje o wdrożeniu lub zmianie praktyk są poparte dążeniem do skrócenia czasu dostarczania wartości?',
      ],
      maturityIndicators: {
        level1: 'Zna pojęcia i zasady teoretyczne, lecz ocenia sytuacje zero-jedynkowo.',
        level3: 'Praktycznie tłumaczy i demonstruje wartości zwinne w codziennych wyzwaniach zespołu.',
        level5: 'Kształtuje kulturę organizacyjną opartą na zaufaniu, przejrzystości i ciągłym doskonaleniu na poziomie zarządczym.',
      },
    },
    'frameworki-i-praktyki': {
      tagline: 'Biegłość w metodykach Scrum, Kanban, XP i Lean oraz pragmatyczne ich dopasowanie.',
      overview: 'Znajomość narzędziowa i metodyczna to warsztat pracy coacha. Obejmuje dogłębną znajomość mechanik Scruma, zasad zarządzania przepływem w Kanbanie, inżynieryjnych praktyk Extreme Programming (TDD, CI/CD, Pair Programming) oraz skalowania (LeSS, SAFe, Nexus), z umiejętnością ich harmonijnego łączenia.',
      keyBehaviors: [
        'Dobiera właściwy framework do charakteru pracy (np. Scrum dla rozwoju nowych funkcji, Kanban dla operacji/supportu).',
        'Wdraża i monitoruje metryki przepływu: Lead Time, Cycle Time, WIP, Throughput.',
        'Wspiera integrację praktyk inżynieryjnych XP, wiedząc, że bez jakości technicznej nie ma prawdziwej zwinności.',
        'Projektuje tablice i procesy w sposób odzwierciedlający realny przepływ wartości end-to-end.',
      ],
      antiPatterns: [
        'Wdrażanie jednego frameworka (np. czystego Scruma) do każdego typu problemu bez diagnozy.',
        'Ignorowanie długu technologicznego i inżynierii na rzecz samych ceremonii procesowych.',
        'Wymuszanie skomplikowanych frameworków skalowania tam, gdzie wystarczyłaby dekompozycja zależności.',
      ],
      auditQuestions: [
        'Jakie metryki procesowe są regularnie analizowane i wykorzystywane do usprawnień?',
        'Czy limity pracy w toku (WIP) są zdefiniowane i respektowane przez zespół i interesariuszy?',
        'W jaki sposób proces wspiera automatyzację testów, ciągłą integrację i częste wdrożenia?',
      ],
      maturityIndicators: {
        level1: 'Zna podstawowe reguły Scruma, lecz ma trudności z rozwiązywaniem nietypowych sytuacji.',
        level3: 'Sprawnie łączy praktyki Scrum, Kanban i podstawy XP w zależności od potrzeb zespołu.',
        level5: 'Projektuje autorskie modele operacyjne i systemy przepływu wartości dla całych pionów biznesowych.',
      },
    },
  },
  'serving': {
    'biznes': {
      tagline: 'Wspieranie Product Ownerów i interesariuszy w maksymalizacji wartości biznesowej.',
      overview: 'Serving the Business polega na budowaniu mostu między techniczną realizacją a celami strategicznymi organizacji. Coach pomaga w precyzyjnym definiowaniu celów produktowych, zarządzaniu backlogiem opartym na hipotezach i metrykach (np. OKR, pirate metrics) oraz efektywnej współpracy z interesariuszami.',
      keyBehaviors: [
        'Pomaga Product Ownerom w dekompozycji celów biznesowych na mierzalne hipotezy i wartościowe przyrosty.',
        'Wspiera wdrożenie podejścia opartego na danych (np. badania z użytkownikami, analityka behawioralna).',
        'Facylituje negocjacje zakresu i priorytetyzację z kluczowymi interesariuszami.',
        'Zabezpiecza jasność wizji produktu i jej zrozumienie przez zespół deweloperski.',
      ],
      antiPatterns: [
        'Koncentrowanie się wyłącznie na zespole deweloperskim i ignorowanie wyzwań biznesowych Product Ownera.',
        'Pozwalanie, by Product Owner stał się jedynie „zarządcą biletów w Jirze” zamiast liderem produktu.',
        'Brak powiązania celów sprintu ze strategią biznesową i wynikami rynkowymi.',
      ],
      auditQuestions: [
        'W jaki sposób Product Owner podejmuje decyzje o priorytetach w backlogu?',
        'Czy zespół wie, jak dostarczana funkcjonalność wpływa na wskaźniki biznesowe spółki?',
        'Jak często zbierany jest realny feedback od klientów i użytkowników końcowych?',
      ],
      maturityIndicators: {
        level1: 'Rozumie rolę Product Ownera, lecz nie potrafi aktywnie pomóc w pracy z backlogiem.',
        level3: 'Praktycznie wspiera PO w warsztatach User Story Mapping, formułowaniu OKR i priorytetyzacji WSJF.',
        level5: 'Współtworzy strategię zarządzania portfolio produktowym na poziomie zarządu.',
      },
    },
    'zespol': {
      tagline: 'Budowanie samoorganizacji, psychologicznego bezpieczeństwa i usuwanie blokerów.',
      overview: 'Serving the Team to serce roli przywództwa służebnego. Polega na tworzeniu warunków, w których zespół może wziąć pełną odpowiedzialność za rezultaty. Coach nie zarządza zadaniami, lecz usuwa przeszkody systemowe, moderuje konflikty i rozwija dojrzałość interpersonalną zespołu.',
      keyBehaviors: [
        'Aktywnie identyfikuje i usuwa blokady systemowe, organizacyjne i komunikacyjne.',
        'Chroni zespół przed niekontrolowanymi zakłóceniami z zewnątrz przy jednoczesnym budowaniu relacji.',
        'Stopniowo przekazuje odpowiedzialność i decyzyjność zespołowi, wspierając autonomię.',
        'Buduje atmosferę otwartości, w której każdy członek zespołu ma prawo zgłaszać problemy.',
      ],
      antiPatterns: [
        '„Mama zespołu” — wyręczanie członków zespołu w podstawowych obowiązkach i uzależnianie ich od coacha.',
        'Zamiatanie trudnych tematów i konfliktów pod dywan w imię pozornego spokoju.',
        'Przejmowanie roli kierownika projektu rozliczającego ludzi z czasu pracy.',
      ],
      auditQuestions: [
        'Czy zespół potrafi samodzielnie podjąć decyzję i zaplanować pracę pod nieobecność Scrum Mastera?',
        'Jak szybko eskalowane i rozwiązywane są blokady technologiczne oraz kompetencyjne?',
        'Czy członkowie zespołu otwarcie mówią o trudnościach podczas retrospektyw?',
      ],
      maturityIndicators: {
        level1: 'Organizuje kalendarz spotkań i notuje ustalenia, działając odtwórczo.',
        level3: 'Skutecznie diagnozuje dynamikę grupową i rozwija samoorganizację oraz zaufanie.',
        level5: 'Wychowuje samodzielne, wysokoefektywne zespoły i tworzy systemowe mechanizmy eliminacji blokerów w firmie.',
      },
    },
  },
  'coaching': {
    'mindset': {
      tagline: 'Niezłomna wiara w potencjał i mądrość klienta oraz wstrzemięźliwość doradcza.',
      overview: 'Postawa coachingowa opiera się na standardach ICF (International Coaching Federation). Zakłada, że klient (zespół, lider, inżynier) posiada zasoby i wiedzę niezbędną do znalezienia najlepszego rozwiązania. Rolą coacha jest tworzenie bezpiecznej przestrzeni myślenia i prowokowanie wglądów, a nie narzucanie gotowych recept.',
      keyBehaviors: [
        'Powstrzymuje się od oceniania, doradzania i narzucania własnych pomysłów.',
        'Wierzy, że zespół ma najlepszy wgląd w swoje realia techniczne i organizacyjne.',
        'Utrzymuje ciekawość i obecność tu i teraz zamiast realizowania z góry przyjętego scenariusza.',
        'Akceptuje milczenie i daje rozmówcy przestrzeń na głębszą refleksję.',
      ],
      antiPatterns: [
        'Zadawanie pytań z ukrytą tezą lub radą (np. „A nie uważasz, że powinniście zrobić code review?”).',
        'Niecierpliwość i wchodzenie w rolę wszechwiedzącego eksperta przy pierwszych trudnościach klienta.',
        'Projektowanie własnych lęków i frustracji na zespół lub lidera.',
      ],
      auditQuestions: [
        'Kto podczas rozmów 1:1 mówi przez większość czasu — coach czy rozmówca?',
        'Czy pytania coacha otwierają nowe perspektywy, czy sugerują konkretną odpowiedź?',
        'Czy coach potrafi pozostać w neutralności, gdy klient podejmuje inną decyzję niż spodziewana?',
      ],
      maturityIndicators: {
        level1: 'Zna definicję coachingu, ale w 80% sytuacji odruchowo radzi i instruuje.',
        level3: 'Konsekwentnie utrzymuje postawę coachingową w sesjach indywidualnych i zespołowych.',
        level5: 'Działa z poziomu mistrzowskiej obecności, wspierając transformację tożsamościową liderów i organizacji.',
      },
    },
    'umiejetnosci': {
      tagline: 'Aktywne słuchanie na wielu poziomach, potężne pytania i profesjonalne kontraktowanie.',
      overview: 'Warsztat umiejętności coachingowych to precyzyjne narzędzia komunikacyjne: słuchanie globalne (słów, emocji, mowy ciała, kontekstu), zadawanie pytań otwierających, parafrazowanie, odzwierciedlanie oraz praca z kontraktem i celem (np. modele GROW, Solution-Focused).',
      keyBehaviors: [
        'Słucha na poziomie 2 i 3 (koncentracja na rozmówcy i intuicyjne wychwytywanie niespójności oraz emocji).',
        'Zadaje zwięzłe, proste pytania, które zmieniają perspektywę i prowokują wglądy.',
        'Zawiera jasny kontrakt na proces i na każde pojedyncze spotkanie (cel, wskaźniki sukcesu, poufność).',
        'Wspiera klienta w przekuwaniu wglądów w konkretne, mierzalne zobowiązania do działania.',
      ],
      antiPatterns: [
        'Brak jasnego celu i kontraktu na sesję („pogawędki bez konkluzji”).',
        'Zadawanie serii pytań zamkniętych lub wielokrotnie złożonych, które blokują rozmówcę.',
        'Ignorowanie emocji i napięć pojawiających się w trakcie rozmowy.',
      ],
      auditQuestions: [
        'Czy każda interwencja coachingowa rozpoczyna się od uzgodnienia celu i mierników sukcesu?',
        'W jaki sposób coach weryfikuje realizację postanowień z poprzednich sesji?',
        'Czy pytania coacha pomagają w odkryciu przyczyn źródłowych, a nie tylko objawów?',
      ],
      maturityIndicators: {
        level1: 'Stosuje podstawowe pytania otwarte, lecz gubi strukturę i cel rozmowy.',
        level3: 'Płynnie prowadzi procesy coachingowe w oparciu o uznane ramy (np. GROW) z wyraźnym kontraktem.',
        level5: 'Superwizuje innych coachów i precyzyjnie operuje zaawansowanymi technikami pracy z przekonaniami i oporem.',
      },
    },
  },
  'facilitating': {
    'mindset': {
      tagline: 'Neutralność procesowa, zaufanie do inteligencji zbiorowej i transparentność intencji.',
      overview: 'Facilitation Mindset to postawa bezstronności wobec treści dyskusji przy jednoczesnym pełnym zaangażowaniu w jakość procesu. Facylitator ufa, że grupa zebrana na sali posiada mądrość wystarczającą do wypracowania trwałego porozumienia, o ile zapewni się jej odpowiednią strukturę i równe prawo głosu.',
      keyBehaviors: [
        'Pozostaje bezstronny i nie faworyzuje żadnej ze stron sporu.',
        'Dba o inkluzywność — angażuje introwertyków i tonuje dominujące osobowości.',
        'Transparentnie komunikuje cele, agendę i zasady współpracy.',
        'Ufa procesowi i zachowuje spokój w obliczu niepewności lub impasu.',
      ],
      antiPatterns: [
        'Sterowanie dyskusją pod z góry założoną przez siebie lub management tezę (manipulacja facylitacją).',
        'Pozwalanie na dominację spotkania przez najgłośniejszych uczestników lub najwyższe stanowisko (HIPPO).',
        'Frustracja, gdy grupa wybiera inne rozwiązanie niż osobista preferencja facylitatora.',
      ],
      auditQuestions: [
        'Czy wszyscy uczestnicy spotkania mają równy wpływ na wypracowane decyzje?',
        'Jak facylitator zachowuje się, gdy dyrektor lub sponsor próbuje narzucić zdanie wbrew grupie?',
        'Czy zasady spotkania (working agreements) są znane, akceptowane i egzekwowane?',
      ],
      maturityIndicators: {
        level1: 'Stara się być neutralny, ale łatwo wchodzi w dyskusję merytoryczną i forsuje swoje pomysły.',
        level3: 'Konsekwentnie utrzymuje neutralność i sprawnie zarządza równowagą głosów na spotkaniach.',
        level5: 'Modeluje mistrzowską neutralność w kryzysowych, wysoce politycznych sporach strategicznych.',
      },
    },
    'umiejetnosci': {
      tagline: 'Projektowanie struktury warsztatów, praca z konfliktem i techniki konwergencji/dywergencji.',
      overview: 'Umiejętności facylitacyjne to techniczny aparat prowadzenia spotkań: od projektowania agendy zorientowanej na rezultat, przez dobór technik dywergencji (Brainstorming, Liberating Structures: 1-2-4-All, TRIZ) i konwergencji (Dot Voting, Fist of Five), aż po techniki deeskalacji i mediacji w konflikcie.',
      keyBehaviors: [
        'Projektuje warsztaty z jasnym podziałem na fazy: otwarcie, dywergencja, eksploracja, konwergencja i domknięcie.',
        'Biegle wykorzystuje struktury uwalniające (Liberating Structures) i narzędzia wizualne (Miro, Mural, tablice fizyczne).',
        'Zauważa napięcia i potrafi konstruktywnie moderować konflikt bez zamiatania go pod dywan.',
        'Pilnuje precyzyjnego zapisu wypracowanych decyzji i przypisania właścicieli akcji.',
      ],
      antiPatterns: [
        'Brak przygotowania — prowadzenie spotkań z marszu bez jasnego celu i scenariusza.',
        'Stosowanie nudnych, jednostronnych prezentacji zamiast formatów angażujących.',
        'Kończenie spotkania bez jednoznacznych ustaleń i konkretnych osób odpowiedzialnych za kolejne kroki.',
      ],
      auditQuestions: [
        'Czy każde spotkanie kończy się jasną listą uzgodnień, zadań i ich właścicieli?',
        'W jaki sposób facylitator radzi sobie z pojawiającym się konfliktem zdań?',
        'Jakie techniki są stosowane, by w 10 minut zebrać opinie od 20 osób bez chaosu?',
      ],
      maturityIndicators: {
        level1: 'Prowadzi standardowe spotkania według prostej agendy czasowej.',
        level3: 'Projektuje i bezbłędnie przeprowadza złożone warsztaty wieloosobowe (np. PI Planning, retrospektywy wydania).',
        level5: 'Facylituje kluczowe fuzje, restrukturyzacje i debaty zarządów o najwyższym poziomie napięcia.',
      },
    },
  },
  'guiding-learning': {
    'teaching': {
      tagline: 'Nowoczesna andragogika, uczenie oparte na doświadczeniu i Training from the Back of the Room.',
      overview: 'Nauczanie dorosłych wymaga zupełnie innego podejścia niż tradycyjne wykłady. Guiding Learning poprzez teaching opiera się na 4C (Connections, Concepts, Concrete Practice, Conclusions), mikro-naukach i angażujących ćwiczeniach symulacyjnych, dzięki którym wiedza natychmiast zamienia się w praktyczne nawyki.',
      keyBehaviors: [
        'Projektuje szkolenia z przewagą ćwiczeń praktycznych i symulacji nad slajdami (zasada 70/20/10).',
        'Weryfikuje zrozumienie pojęć poprzez praktyczne zadania, a nie tylko pytania kontrolne.',
        'Dostosowuje język i przykłady do specyfiki audytorium (deweloperzy, testerzy, menedżerowie, HR).',
        'Dba o utrwalenie wiedzy po szkoleniu poprzez follow-upy i zadania wdrożeniowe.',
      ],
      antiPatterns: [
        '„Death by PowerPoint” — wielogodzinne odczytywanie slajdów bez zaangażowania uczestników.',
        'Przekazywanie czystej teorii oderwanej od codziennego kodu i procesów firmy.',
        'Brak ewaluacji wpływu szkolenia na realne zachowania w zespole po jego zakończeniu.',
      ],
      auditQuestions: [
        'Jaki procent czasu szkolenia uczestnicy spędzają na aktywnych ćwiczeniach?',
        'W jaki sposób mierzona jest efektywność prowadzonych warsztatów i transfer wiedzy do pracy?',
        'Czy materiały edukacyjne są aktualizowane w oparciu o bieżące wyzwania technologiczne?',
      ],
      maturityIndicators: {
        level1: 'Prowadzi podstawowe prezentacje wprowadzające do Scruma na bazie gotowych szablonów.',
        level3: 'Tworzy autorskie, wysoce interaktywne programy szkoleniowe oparte na TBR i symulacjach.',
        level5: 'Jest uznanym autorem programów edukacyjnych i certyfikowanym trenerem uczącym innych trenerów.',
      },
    },
    'mentoring': {
      tagline: 'Mądre dzielenie się własnym doświadczeniem, modelowanie ról i ścieżki rozwoju.',
      overview: 'Mentoring polega na przyspieszaniu rozwoju mentee poprzez dzielenie się własnymi sukcesami i porażkami, wskazywanie sprawdzonych wzorców oraz udzielanie konstruktywnego feedbacku. Coach jako mentor pomaga w budowaniu ścieżki kariery Scrum Mastera, Product Ownera czy Tech Leada.',
      keyBehaviors: [
        'Dzieli się konkretnymi case studies ze swojej kariery, pokazując kontekst i konsekwencje decyzji.',
        'Udziela regularnego, opartego na faktach feedbacku wspierającego (SBI — Situation-Behavior-Impact).',
        'Pomaga mentee w diagnozie mocnych stron i luk kompetencyjnych oraz planowaniu 90-dniowych celów.',
        'Wspiera mentee w bezpiecznym eksperymentowaniu z nowymi zachowaniami.',
      ],
      antiPatterns: [
        'Mówienie mentee, co dokładnie ma zrobić („kopiuj moje rozwiązania”), niszczące samodzielność.',
        'Rzadkie, nieregularne spotkania bez śledzenia postępów i zobowiązań.',
        'Wykorzystywanie pozycji mentora do budowania własnego ego zamiast rozwoju podopiecznego.',
      ],
      auditQuestions: [
        'Czy proces mentoringowy ma zdefiniowany plan rozwoju i mierzalne kryteria postępu?',
        'Jak często mentee otrzymuje konstruktywny feedback z obserwacji w boju (shadowing)?',
        'Czy po zakończeniu mentoringu podopieczny potrafi działać w pełni samodzielnie?',
      ],
      maturityIndicators: {
        level1: 'Udziela okazjonalnych porad młodszym kolegom na zasadzie ad-hoc.',
        level3: 'Prowadzi ustrukturyzowane, długofalowe programy mentoringowe dla Scrum Masterów i PO.',
        level5: 'Projektuje systemowe programy sukcesji i mentoringu strategicznego w całej organizacji.',
      },
    },
    'learning-mindset': {
      tagline: 'Kultura ciągłego eksperymentowania, bezpieczeństwo psychologiczne i nauka na błędach.',
      overview: 'Learning Mindset to zaszczepianie w organizacji głodu wiedzy i ciekawości. Coach pomaga traktować każdy sprint i wdrożenie jako pętlę uczenia się (Build-Measure-Learn). Wspiera tworzenie społeczności praktyków (Communities of Practice, Guilds) i otwartą wymianę wiedzy między silosami.',
      keyBehaviors: [
        'Inicjuje i wspiera gildie, meetupy wewnętrzne, dojo technologiczne i hackathony.',
        'Promuje podejście hipotezowe i szybkie prototypowanie zamiast wielomiesięcznych analiz.',
        'Pomaga przekuwać porażki projektowe w bezcenną wiedzę organizacyjną (blameless post-mortems).',
        'Samodzielnie stale się rozwija, czytając literaturę, uczestnicząc w konferencjach i dzieląc się wiedzą.',
      ],
      antiPatterns: [
        'Karanie za nieudane eksperymenty, które prowadzi do asekuranctwa i ukrywania problemów.',
        'Silosowa wymiana wiedzy — brak przepływu doświadczeń między poszczególnymi zespołami.',
        'Brak dedykowanego czasu na naukę i innowacje w rytmie sprintu.',
      ],
      auditQuestions: [
        'Czy w firmie funkcjonują aktywne społeczności praktyków (Guilds / CoP)?',
        'Jak organizacja podchodzi do analizy incydentów produkcyjnych (czy są to blameless post-mortems)?',
        'Ile czasu w sprincie inżynierowie mogą przeznaczyć na rozwój i eksperymenty technologiczne?',
      ],
      maturityIndicators: {
        level1: 'Dba o własny rozwój, lecz nie angażuje się w budowanie kultury uczenia się w firmie.',
        level3: 'Aktywnie animuje społeczności wewnętrzne i promuje kulturę eksperymentu w zespołach.',
        level5: 'Przekształca firmę w „Learning Organization” z silną marką inżynieryjną przyciągającą talenty.',
      },
    },
  },
  'advising': {
    'mindset': {
      tagline: 'Świadoma zmiana kapelusza, transparentność intencji i szacunek dla decyzyjności klienta.',
      overview: 'Doradztwo wymaga od coacha absolutnej dyscypliny: jasnego zakomunikowania „teraz zdejmuję kapelusz coacha, a zakładam doradcę”. Kluczowe jest zrozumienie, że rekomendacja to propozycja poparta argumentami i analizą ryzyka, a nie polecenie służbowe. Ostateczna decyzja i odpowiedzialność zawsze spoczywa na kliencie.',
      keyBehaviors: [
        'Zawsze pyta o zgodę przed wejściem w rolę doradczą („Czy mogę podzielić się rekomendacją?”).',
        'Jasno rozdziela fakty od opinii i doświadczeń z innych firm.',
        'Przedstawia co najmniej dwie alternatywne opcje z ich mocnymi i słabymi stronami.',
        'Akceptuje odrzucenie rekomendacji bez urazy i wspiera klienta w wybranej drodze.',
      ],
      antiPatterns: [
        'Przełączanie się w tryb doradczy bez uprzedzenia i zdominowanie rozmowy.',
        'Podejście „jeden właściwy sposób” (Best Practice) zamiast dopasowania do kontekstu (Good Practice).',
        'Obrażanie się lub wycofywanie wsparcia, gdy klient wybiera inne rozwiązanie.',
      ],
      auditQuestions: [
        'Czy coach wyraźnie sygnalizuje moment przejścia z pytań coachingowych do doradzania?',
        'Czy rekomendowane rozwiązania uwzględniają unikalną kulturę i ograniczenia firmy?',
        'Jak coach reaguje, gdy management podejmuje decyzję odmienną od jego sugestii?',
      ],
      maturityIndicators: {
        level1: 'Doradza spontanicznie i chaotycznie, nie zdając sobie sprawy ze zmiany roli.',
        level3: 'Świadomie i czysto operuje przełączaniem ról, przedstawiając zrównoważone opcje.',
        level5: 'Jest strategicznym doradcą dla C-level, którego głos kształtuje architekturę biznesową firmy.',
      },
    },
    'umiejetnosci': {
      tagline: 'Strukturyzacja diagnozy, analiza wielokryterialna i precyzyjne formułowanie rekomendacji.',
      overview: 'Kompetencje doradcze opierają się na umiejętności szybkiej diagnozy systemowej (badanie procesów, kodu, metryk, wywiady), syntezy danych oraz prezentacji rekomendacji w formacie zrozumiałym dla biznesu (Executive Summary, Trade-offs, ROI, macierz ryzyka).',
      keyBehaviors: [
        'Stosuje ustrukturyzowane ramy diagnostyczne (np. DORA, VSM, audyty dojrzałości).',
        'Formułuje rekomendacje w języku korzyści biznesowych i zarządzania ryzykiem.',
        'Wskazuje natychmiastowe Quick Wins oraz strategiczne, długofalowe zmiany systemowe.',
        'Przygotowuje plan wdrożenia rekomendacji z mierzalnymi wskaźnikami (KPI/OKR).',
      ],
      antiPatterns: [
        'Stawianie diagnozy na podstawie powierzchownych opinii bez weryfikacji w danych.',
        'Tworzenie wielostronicowych, nieczytelnych raportów, których nikt nie wdraża.',
        'Ignorowanie kosztów zmiany i wpływu rekomendacji na obciążenie zespołów.',
      ],
      auditQuestions: [
        'Czy rekomendacje doradcze zawierają jasne oszacowanie ryzyka i kosztów alternatywnych?',
        'Na jakich twardych danych i obserwacjach oparta jest diagnoza problemu?',
        'W jaki sposób weryfikowane są rezultaty wdrożonych rekomendacji doradczych?',
      ],
      maturityIndicators: {
        level1: 'Udziela porad opartych na intuicji bez struktury i analizy ryzyka.',
        level3: 'Przeprowadza profesjonalne audyty i prezentuje zwięzłe, dobrze uzasadnione opcje decyzyjne.',
        level5: 'Projektuje kompleksowe strategie transformacyjne o wielomilionowym wpływie na wynik firmy.',
      },
    },
  },
  'leading': {
    'visionary': {
      tagline: 'Budowanie porywającej wizji zmiany, malowanie przyszłości i nadawanie sensu pracy.',
      overview: 'Visionary to zdolność widzenia dalej niż bieżący sprint i kwartał. Coach jako wizjoner potrafi zdefiniować i barwnie zakomunikować, jak organizacja będzie wyglądać po transformacji, dlaczego warto podjąć wysiłek zmiany oraz jakie korzyści odczują inżynierowie, klienci i akcjonariusze.',
      keyBehaviors: [
        'Przekłada abstrakcyjne cele strategiczne zarządu na namacalne i inspirujące historie.',
        'Pomaga zespołom i liderom zdefiniować ich własną „North Star Metric” i wizję rozwoju.',
        'Utrzymuje kierunek i optymizm zespołu w trudnych momentach spadku produktywności (J-curve).',
        'Stale przypomina o celu nadrzędnym i łączy codzienne zadania z sensem misji firmy.',
      ],
      antiPatterns: [
        'Tworzenie pustych sloganów i korpo-nowomowy, która budzi cynizm inżynierów.',
        'Wizjonerstwo oderwane od realiów technologicznych i ograniczeń budżetowych.',
        'Zmienne, niespójne komunikowanie wizji wprowadzające chaos decyzyjny.',
      ],
      auditQuestions: [
        'Czy każdy inżynier w zespole potrafi w jednym zdaniu powiedzieć, do czego zmierza organizacja?',
        'W jaki sposób wizja zmiany jest komunikowana i odświeżana w codziennej pracy?',
        'Czy cele zespołowe bezpośrednio wynikają z długoterminowej wizji produktu?',
      ],
      maturityIndicators: {
        level1: 'Skupia się wyłącznie na bieżących zadaniach, nie potrafi mówić o szerszej wizji.',
        level3: 'Inspiruje zespoły i Product Ownerów, pomagając im kreować spójne wizje produktów.',
        level5: 'Współtworzy wizję rynkową całej firmy i porywa za sobą setki pracowników.',
      },
    },
    'role-modeling': {
      tagline: 'Wpływ przez osobisty przykład, spójność słów z czynami i odwaga cywilna.',
      overview: 'Nie można uczyć otwartości, samemu będąc zamkniętym na krytykę. Role Modeling to ucieleśnienie wartości, które chcemy zaszczepić w organizacji. Coach jest pierwszym, który przyznaje się do niewiedzy, prosi o feedback, okazuje szacunek w sporze i demonstruje odwagę w trudnych rozmowach.',
      keyBehaviors: [
        'Demonstruje spójność: zachowuje się dokładnie tak, jak oczekuje od innych (Walk the Talk).',
        'Otwarcie przyznaje się do błędów i pokazuje, jak wyciągać z nich wnioski bez poczucia wstydu.',
        'Wykazuje odwagę cywilną: mówi prawdę kadrze zarządzającej nawet wtedy, gdy jest niewygodna.',
        'Promuje kulturę szacunku i nie bierze udziału w biurowych plotkach czy polityce.',
      ],
      antiPatterns: [
        '„Róbcie tak, jak mówię, a nie tak, jak robię” — hipokryzja i podwójne standardy.',
        'Unikanie trudnych tematów w obawie przed utratą sympatii przełożonych.',
        'Szukanie winnych i obwinianie otoczenia za brak sukcesu transformacji.',
      ],
      auditQuestions: [
        'Czy zachowania coacha w sytuacjach stresowych są spójne z głoszonymi wartościami agile?',
        'Czy coach regularnie prosi zespoły i liderów o bezwzględny, szczery feedback o swojej pracy?',
        'Jak coach reaguje na krytykę własnych metod i pomysłów?',
      ],
      maturityIndicators: {
        level1: 'Deklaruje wartości, lecz w kryzysie wraca do zachowań reaktywnych i defensywnych.',
        level3: 'Jest postrzegany jako autorytet moralny i wzorzec profesjonalizmu w swoim otoczeniu.',
        level5: 'Jego postawa zmienia standardy etyczne i relacyjne w całej kulturze korporacyjnej.',
      },
    },
    'leading-for-growth': {
      tagline: 'Tworzenie liderów zamiast naśladowców, delegowanie uprawnień i facylitacja autonomii.',
      overview: 'Prawdziwym sprawdzianem lidera jest to, ilu nowych liderów wychował. Leading for Growth polega na identyfikowaniu talentów, budowaniu pewności siebie u inżynierów i menedżerów, tworzeniu bezpiecznego środowiska do podejmowania decyzji oraz stopniowym wycofywaniu się na pozycję cichego wsparcia.',
      keyBehaviors: [
        'Stwarza okazje dla innych do zabierania głosu, przewodzenia inicjatywom i prezentacji sukcesów.',
        'Wdraża narzędzia delegowania uprawnień (np. Delegation Poker, 7 Levels of Delegation).',
        'Wzmacnia poczucie sprawczości u Engineering Managerów i Tech Leadów.',
        'Cieszy się z sukcesów innych i pozostaje w cieniu, gdy zespół zbiera laury.',
      ],
      antiPatterns: [
        'Budowanie zależności zespołu od siebie, by czuć się niezastąpionym.',
        'Przypisywanie sobie zasług zespołu w raportach dla dyrekcji.',
        'Mikrozarządzanie i kontrolowanie każdego kroku w obawie przed potknięciem podopiecznego.',
      ],
      auditQuestions: [
        'Ilu nowych liderów i propagatorów zwinności wyrosło w zespołach w ciągu ostatniego roku?',
        'W jakim stopniu decyzje techniczne i procesowe są podejmowane bez udziału coacha?',
        'Czy menedżerowie liniowi czują się partnerami i współautorami zmian kulturowych?',
      ],
      maturityIndicators: {
        level1: 'Skupia uwagę na sobie i dba o to, by każda decyzja przechodziła przez jego ręce.',
        level3: 'Świadomie buduje kompetencje przywódcze u Product Ownerów i Scrum Masterów.',
        level5: 'Buduje samoodnawialny ekosystem przywództwa w skali międzynarodowej organizacji.',
      },
    },
  },
  'transforming': {
    'organizational-design': {
      tagline: 'Architektura organizacji: struktury, zespoły strumieni wartości i przepływ decyzyjny.',
      overview: 'Projektowanie organizacyjne to inżynieria struktury firmy. Zgodnie z Prawem Conwaya architektura systemów odzwierciedla strukturę komunikacji. Coach wspiera tworzenie zespołów interdyscyplinarnych (Stream-aligned teams, Platform teams, Complicated-subsystem, Enabling teams wg Team Topologies), eliminując zależności i zatory decyzyjne.',
      keyBehaviors: [
        'Wykorzystuje koncepcje Team Topologies i Dynamic Reteaming do projektowania układu zespołów.',
        'Mapuje strumienie wartości (Value Stream Mapping) i identyfikuje wąskie gardła w strukturze.',
        'Pomaga w przejściu ze struktur silosowo-funkcyjnych do autonomicznych zespołów produktowych end-to-end.',
        'Optymalizuje interfejsy i modele interakcji między zespołami (X-as-a-Service, Collaboration, Facilitating).',
      ],
      antiPatterns: [
        'Wdrażanie zwinności wewnątrz sztucznych silosów (osobny zespół Agile-Frontend, Agile-Backend, Agile-QA).',
        'Tworzenie skomplikowanych macierzy odpowiedzialności uniemożliwiających szybkie podejmowanie decyzji.',
        'Ignorowanie Prawa Conwaya i próba tworzenia mikroserwisów przy monolitycznej strukturze działów.',
      ],
      auditQuestions: [
        'Czy zespoły są w stanie samodzielnie dostarczyć wartość produkcyjną bez zależności od 5 innych zespołów?',
        'Jaki jest średni czas oczekiwania na decyzję lub komponent z innego działu?',
        'Czy struktura zespołów odpowiada architekturze domeny biznesowej (Bounded Contexts)?',
      ],
      maturityIndicators: {
        level1: 'Rozumie definicję zespołu interdyscyplinarnego, ale nie potrafi przemodelować struktury działu.',
        level3: 'Praktycznie stosuje Team Topologies i mapowanie strumieni wartości w pionach 50-100 osób.',
        level5: 'Projektuje globalną architekturę organizacyjną dla przedsiębiorstw zatrudniających tysiące osób.',
      },
    },
    'organizational-change': {
      tagline: 'Zarządzanie zmianą systemową, praca z kulturą, oporem i myślenie systemowe.',
      overview: 'Prawdziwa transformacja to nie wymiana narzędzi, lecz zmiana nawyków kulturowych i relacji władzy. Coach wykorzystuje wiedzę z zakresu psychologii zmiany (Kotter, ADKAR, Lean Change Management), teorii złożoności (Cynefin) oraz myślenia systemowego (Peter Senge), by przeprowadzać ludzi przez zmianę z szacunkiem i trwałością.',
      keyBehaviors: [
        'Traktuje opór przed zmianą jako cenną informację zwrotną o niezaspokojonych potrzebach i lękach.',
        'Projektuje transformację jako serię małych, mierzalnych eksperymentów (Lean Change Management).',
        'Identyfikuje i buduje koalicje ambasadorów zmiany na wszystkich szczeblach firmy.',
        'Wspiera kadrę zarządzającą w transparentnej, empatycznej komunikacji trudnych decyzji.',
      ],
      antiPatterns: [
        'Wdrażanie zmiany metodą „Wielkiego Wybuchu” (Big Bang) od góry do dołu bez dialogu z ludźmi.',
        'Etykietowanie pracowników mających wątpliwości jako „wrogów transformacji” lub „betonu”.',
        'Ogłaszanie sukcesu transformacji po przeszkoleniu ludzi i zmianie nazw stanowisk w HR.',
      ],
      auditQuestions: [
        'W jaki sposób zbierany jest feedback od pracowników na temat tempa i kierunku zmian?',
        'Czy plan transformacji podlega regularnej inspekcji i adaptacji na podstawie wyników biznesowych?',
        'Jak zarządzany jest lęk i niepewność związana ze zmianą ról w organizacji?',
      ],
      maturityIndicators: {
        level1: 'Postrzega zmianę mechanicznie jako harmonogram wdrożenia procesów.',
        level3: 'Biegle facylituje procesy zmian z wykorzystaniem eksperymentów i empatii dla oporu.',
        level5: 'Przeprowadza trwałe, głębokie transformacje kulturowe o zasięgu korporacyjnym.',
      },
    },
  },
  'self-mastery': {
    'samoswiadomosc': {
      tagline: 'Rozpoznawanie własnych wzorców, wyzwalaczy emocjonalnych i ograniczeń poznawczych.',
      overview: 'Self Mastery jest osią całego koła. Bez samoświadomości coach jest niewolnikiem własnych nawyków i nieuświadomionych lęków. Obejmuje znajomość własnych mocnych stron, cieni, stylów komunikacji oraz momentów, w których tracimy obiektywizm i ulegamy stresowi.',
      keyBehaviors: [
        'Zauważa swoje fizyczne i psychiczne reakcje na trudne zachowania innych ludzi (triggery).',
        'Zna swoje mocne strony oraz obszary, w których łatwo ulega zniecierpliwieniu.',
        'Potrafi nazwać swoje intencje przed wejściem na salę warsztatową lub spotkanie 1:1.',
        'Regularnie zatrzymuje się na autorefleksję po trudnych interwencjach.',
      ],
      antiPatterns: [
        'Przekonanie o własnej nieomylności i moralnej wyższości nad „niezwinnymi” pracownikami.',
        'Brak świadomości własnych uprzedzeń i projekcji emocjonalnych na rozmówców.',
        'Ignorowanie sygnałów wyczerpania i przeciążenia emocjonalnego.',
      ],
      auditQuestions: [
        'Jakie sytuacje w pracy z zespołem lub zarządem najszybciej wyprowadzają coacha z równowagi?',
        'W jaki sposób coach weryfikuje własne ograniczenia i ślepe plamki?',
        'Czy coach potrafi otwarcie powiedzieć: „Nie wiem, pomyliłem się”?',
      ],
      maturityIndicators: {
        level1: 'Działa automatycznie, uświadamiając sobie błędy i reakcje dopiero po czasie lub wcale.',
        level3: 'W czasie rzeczywistym obserwuje swoje stany emocjonalne i nie pozwala im sterować interwencją.',
        level5: 'Osiąga głęboki wgląd i integralność osobistą, która stanowi fundament naturalnego autorytetu.',
      },
    },
    'regulacja-emocji': {
      tagline: 'Opanowanie w kryzysie, rezyliencja psychiczna i świadomy wybór reakcji na bodźce.',
      overview: 'Regulacja emocji to umiejętność zachowania spokoju i jasności umysłu pod presją. Gdy na sali wybuchają emocje lub gdy management żąda natychmiastowych rezultatów, coach z wysoką regulacją nie wpada w panikę ani agresję, lecz stanowi bezpieczną kotwicę dla całego systemu.',
      keyBehaviors: [
        'Zachowuje spokój i opanowanie w sytuacjach silnego konfliktu i presji terminowej.',
        'Stosuje techniki oddechowe i mindfulness, by utrzymać koncentrację w trudnych momentach.',
        'Reaguje na agresję lub frustrację z empatią i ciekawością, a nie kontratakiem.',
        'Dba o higienę psychiczną, odpoczynek i regenerację, zapobiegając wypaleniu zawodowemu.',
      ],
      antiPatterns: [
        'Wchodzenie w dyskusje z pozycji urazy, złości lub obrony własnego statusu.',
        'Reaktywne uleganie panice interesariuszy i nerwowe zmienianie ustaleń.',
        'Tłumienie emocji i udawanie spokoju przy narastającym wewnętrznym cynizmie.',
      ],
      auditQuestions: [
        'Jak coach zachowuje się podczas gwałtownej awantury na retrospektywie lub demo?',
        'W jaki sposób coach radzi sobie ze stresem i chroniczną presją ze strony otoczenia?',
        'Czy obecność coacha uspokaja emocje na sali, czy potęguje nerwowość?',
      ],
      maturityIndicators: {
        level1: 'Łatwo daje się wciągnąć w spiralę emocjonalną i reaguje obronnie na ataki.',
        level3: 'Świadomie kontroluje swoje reakcje i deeskaluje napięcia w trudnych sytuacjach.',
        level5: 'Emanuje spokojem i obecnością, która automatycznie stabilizuje rozchwiany emocjonalnie zespół.',
      },
    },
    'ciagly-rozwoj': {
      tagline: 'Praktyka refleksyjna, regularna superwizja, journaling i stałe poszerzanie horyzontów.',
      overview: 'Ciągły rozwój w Self Mastery to zawodowa pokora. Dojrzały coach wie, że jego narzędzia i wiedza wymagają nieustannej kalibracji. Korzysta z regularnej superwizji z akredytowanym superwizorem, prowadzi dziennik refleksji i uczy się z dziedzin wykraczających poza IT (psychologia, socjologia, neurobiologia).',
      keyBehaviors: [
        'Regularnie uczestniczy w sesjach superwizji indywidualnej lub grupowej.',
        'Prowadzi systematyczną praktykę refleksyjną (np. dziennik coacha po ważnych wydarzeniach).',
        'Stale poszukuje krytycznego feedbacku od klientów, współpracowników i mentorów.',
        'Czyta literaturę naukową i zgłębia nowe dziedziny wiedzy o człowieku i organizacji.',
      ],
      antiPatterns: [
        'Poczucie, że po zdobyciu certyfikatu nie trzeba się już uczyć i rozwijać.',
        'Brak jakiejkolwiek formy superwizji lub mentoringu zewnętrznego.',
        'Ograniczanie wiedzy wyłącznie do wąskich forów internetowych i postów na LinkedIn.',
      ],
      auditQuestions: [
        'Kiedy coach ostatnio odbył sesję superwizyjną i nad jakim własnym przypadkiem pracował?',
        'Jakie nowe książki lub badania naukowe wpłynęły ostatnio na metody pracy coacha?',
        'W jaki sposób coach dokumentuje i analizuje swoje trudne przypadki zawodowe?',
      ],
      maturityIndicators: {
        level1: 'Uczy się sporadycznie, głównie przygotowując się do testów certyfikacyjnych.',
        level3: 'Prowadzi regularną praktykę refleksyjną i systematycznie korzysta z superwizji.',
        level5: 'Współtworzy dorobek merytoryczny społeczności i sam szkoli oraz superwizuje mistrzów fachu.',
      },
    },
  },
}
