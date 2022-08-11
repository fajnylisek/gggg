export default {

  brand: 'ItemSzop',

  sign_in: 'Zaloguj się',
  sign_up: 'Zarejestruj się',

  transfer: 'Przelew',
  sms: 'SMS',
  transfer_psc: 'Przelew/PSC',
  przelewy24: 'Przelewy24',
  paypal: 'Paypal',
  paysafecard_manual: 'Ręczne sprawdzanie kodów PAYSAFECARD',

  page_not_found: '404 - Nie znaleziono strony',
  error_occurred: 'Nastąpił Błąd',

  homepage: {
    title: 'Darmowy sklep serwera minecraftowego',
    why_best: 'Dlaczego ItemSzop jest najlepszy?',
    comment: 'Posiadasz serwer minecraftowy i chcesz na nim zarabiać? ItemSzop to idealny wybór dla Ciebie! ',
    card1_title: 'Cena',
    card1_content: 'Nie ma tutaj żadnych planów cenowych. ItemSzop jest kompletnie za darmo, przez co tworzy sporą konkurencję dla innych sklepów serwerów.',
    card2_title: 'Open-source',
    card2_content: 'Kod źródłowy jest publicznie dostępny na githubie. Każdy może zostać współtwórcą tego projektu, dzięki temu może szybciej się rozwijać.',
    card2_button: 'Zobacz kod źródłowy',
    card3_title: 'Technologia',
    card3_content: "ItemSzop jest zbudowany przy użyciu najnowszych technologii takich jak serverless'owe funkcje lub baza danych w chmurze.",
    card4_title: 'Społeczność',
    card4_content: 'Utworzyliśmy serwer discordowy, na którym można zadawać pytania, składać propozycje lub zgłaszać problemy techniczne.',
    card4_button: 'Dołącz do serwera dc',
    card5_title: 'Bezpieczeństwo',
    card5_content: 'Wszystkie dane dotyczące sklepu znajdują się w bazie danych w chmurze. Żadna osoba niepowołana nie posiada dostępu do bazy.',
    card6_title: 'Architektura SaaS',
    card6_content: 'Cały sklep jest hostowany u nas. Nie musisz się martwić o stronę techniczną. Istnieje również możliwość własnego hostowania.',
    supported_operators: 'Wspierani operatorzy płatności'

  },

  actions: {
    go_to_panel: 'Przejdź do panelu',
    next: 'Dalej',
    cancel: 'Anuluj',
    reset: 'Resetuj',
    save: 'Zapisz',
    edit: 'Edytuj',
    remove: 'Usuń',
    back_to_homepage: 'Powrót do strony głównej',
    logout: 'Wyloguj się',
    new_shop: 'Nowy sklep',
    buy_now: 'Kup teraz',
    check_voucher: 'Sprawdź voucher',
    back_to_services: 'Powrót do usług',
    send_to_server: 'Wyślij do serwera',
    new_server: 'Nowy serwer',
    new_service: 'Nowa usługa',
    create_and_download: 'Stwórz i pobierz plik',
    remove_all_vouchers: 'Usuń wszystkie vouchery',
    remove_shop: 'Usuń sklep',
    back_to_servers_list: 'Powrót do listy serwerów',
    test: 'Przetestuj',
    password_reset: 'Resetowanie hasła',
    reload: 'Odśwież stronę',
    description: 'Opis',
    remove_payment_history: 'Usuń historię płatności',
    new_page: 'Nowa strona',
    go_back: 'Cofnij się',
    generate_new_key: 'Wygeneruj nowy klucz',
    send_test_message: 'Wyślij testową wiadomość',
    reset_stack: 'Zresetuj stos komend'
  },

  fields: {
    email: 'Email',
    password: 'Hasło',
    repeat_password: 'Powtórz hasło',
    display_name: 'Pseudonim',
    server_name: 'Nazwa serwera',
    server_id: 'ID serwera',
    trigger_ip: 'IP serwera do triggerowania',
    command: 'Komenda',
    service_name: 'Nazwa usługi',
    service_icon: 'Ikona usługi',
    service_id: 'ID usługi',
    icon_url: 'Adres URL do ikony',
    sms_payment: "Płatność SMS'em",
    choose_sms: 'Wybierz sms (za sztukę)',
    choose_smses: "Wybierz SMS'y, którymi będzie można płacić",
    transfer_payment: 'Płatność przelewem',
    transfer_cost: 'Koszt (w zł za sztukę)',
    choose_server: 'Wybierz serwer',
    server_command_info: 'Komendy do wywołania na serwerze ([nick] - nick kupującego)',
    code: 'Kod',
    nick: 'Wprowadź swój nick',
    user_id: 'ID użytkownika',
    id_number: 'Numer ID',
    hash: 'Hash (kodowanie md5)',
    sms_content: 'Treść SMS',
    payment_operator: 'Dostawca płatności',
    choose_service: 'Wybierz usługę',
    voucher_deadline: 'Termin działania voucherów',
    codes_amount: 'Liczba kodów',
    webhook_url: 'Adres URL webhooka',
    cost_slider: 'Suwak do wyboru ilości produktu',
    discord_webhook: 'Webhook discordowy',
    choose_service_hint: 'Wybierz jaką usługę będzie można aktywować voucherem.',
    codes_amount_hint: 'Liczba kodów, które mają zostać wygenerowane. Ustawiając np. 20 stworzysz dwadzieścia różnych kodów na tę samą usługę.',
    shop_name: 'Nazwa sklepu',
    shop_id: 'ID sklepu',
    sms_service_amount: 'Ilość produktów za SMS na {sms}',
    buy_more_once: 'Kup więcej za jednym razem',
    last_payments_amount: 'Ilość wyświetlanych ostatnich zakupów w sklepie',
    horizontal_history: 'Lista pozioma (z tooltipami)',
    vertical_history: 'Lista pionowa',
    shop_icon: 'Ikona sklepu',
    discord_widget: 'Widżet serwera discordowego',
    discord_server_id: 'ID Twojego serwera discordowego',
    shop_background: 'Zdjęcie w tle strony',
    shop_background_url: 'Adres URL tła strony',
    microsms: 'Operator płatności microsms.pl',
    lvlup: 'Operator płatności lvlup.pro',
    paypal: 'Operator płatności paypal',
    paypal_id: 'Klucz CLIENT ID',
    paypal_secret: 'Klucz CLIENT SECRET',
    lvlup_api: 'Klucz api z panelu lvlup.pro',
    actions: 'Akcje',
    shop_theme: 'Własny motyw strony',
    page_name: 'Nazwa strony',
    page_id: 'Id strony',
    page_content: 'Treść strony',
    min_amount: 'Minimalna ilość',
    max_amount: 'Maksymalna ilość',
    google_analytics: 'Google Analytics',
    gid: 'ID Google analytics',
    module_enabled: 'Moduł włączony',
    choose_payment_method: 'Wybierz sposób płatności',
    commands_in_queue: 'Komendy w kolejce',
    plugin_secret: 'Klucz do pluginu'
  },

  formats: {
    field_not_empty: 'Pole nie może pozostać puste',
    min_6_chars: 'Minimum 6 znaków',
    min_4_chars: 'Minimum 4 znaki',
    max_100_vouchers: 'Nie możesz wygenerować więcej niż 100 voucherów na raz',
    shop_id_format: 'Id sklepu może zawierać tylko litery, cyfry lub "_"',
    passwords_not_match: 'Hasła do siebie nie pasują',
    sms_format: 'Treść sms może zawierać tylko wielkie litery i kropki',
    hash_format: 'Hash może zawierać litery, cyfry oraz @,*,$',
    wrong_format: 'Nieprawidłowy format',
    wrong_codes_number: 'Niepoprawna liczba kodów',
    wrong_format_code: 'Niepoprawny format kodu',
    wrong_format_nick: 'Niepoprawny format nicka',
    wrong_format_shopid: 'Niepoprawny format id sklepu',
    wrong_format_serviceid: 'Niepoprawny format id usługi',
    wrong_format_serverid: 'Niepoprawny format id serwera',
    wrong_format_voucher: 'Niepoprawny format vouchera',
    wrong_format_api_key: 'Niepoprawny format klucza api',
    wrong_format_amount: 'Niepoprawny format ilości produktu',
    must_be_greater: 'Maksymalna ilość musi być większa od minimalnej',
    wrong_format_gid: 'Google Analytics ID musi mieć format G-XXXXXXXXXX'
  },

  titles: {
    panel: 'Panel',
    shops: 'Sklepy',
    account: 'Konto',
    preview: 'Podgląd',
    dashboard: 'Kokpit',
    servers: 'Serwery',
    services: 'Usługi',
    payments: 'Płatności',
    vouchers: 'Vouchery',
    pages: 'Podstrony',
    rcon: 'Rcon',
    additional_modules: 'Dodatkowe moduły',
    settings: 'Ustawienia',
    shop: 'Sklep',
    server_config: 'Konfiguracja serwera',
    rcon_console: 'Konsola RCON',
    service_config: 'Konfiguracja usługi',
    payments_config: 'Konfiguracja płatności',
    advanced_settings: 'Ustawienia zaawansowane',
    are_you_sure: 'Czy jesteś tego pewien?',
    latest_payments: 'Ostatnie zakupy',
    payment_success: 'Płatność zakończona pomyślnie',
    adding_vouchers: 'Dodawanie voucherów',
    removing_vouchers: 'Usuwanie voucherów',
    monthly_goal: 'Cel miesięczny',
    server_maintenance: 'Utrzymanie serwera',
    email_not_verified: 'Email nie został jeszcze potwierdzony',
    error: 'Błąd',
    redeem_voucher: 'Zrealizuj voucher',
    most_common_services: 'Najczęściej kupowane produkty',
    payment_methods: 'Metody płatności',
    shop_appearance: 'Wygląd sklepu',
    additional_settings: 'Dodatkowe opcje',
    no_service_available: 'Nie dodano żadnej usługi :(',
    loading: 'Ładowanie...',
    page_config: 'Konfiguracja strony',
    no_server_available: 'Nie dodano żadnego serwera :(',
    temp_announcement: 'Czasowe ogłoszenie',
    buy_service_1: 'Zapoznanie',
    buy_service_2: 'Wybór płatności',
    buy_service_3: 'Potwierdzenie',
    buy_service_4: 'Realizacja',
    main_page: 'Strona główna',
    modules: 'Moduły',
    voucher_success: 'Pomyślnie użyto vouchera',
    top_customer_widget: 'Widżet top-customer'
  },

  responses: {
    unable_to_connect: 'Nie udało się połączyć',
    config_not_exist: 'Konfiguracja sklepu nie istnieje',
    command_error: 'Nie udało się wywołać komendy na serwerze minecraftowym',
    auth_error: 'Nie udało się połączyć z serwerem minecraftowym',
    history_error: 'Nie można zapisać płatności w historii',
    monthly_goal_error: 'Nie udało się zaktualizować celu miesięcznego',
    discord_webhook_error: 'Nie udało się połączyć z webhookiem z discorda',
    voucher_not_exist: 'Voucher nie istnieje',
    voucher_expired: 'Voucher wygasł',
    server_owner_error: 'Nieprawidłowy właściciel serwera',
    wrong_api_key: 'Nieprawidłowy klucz api',
    shop_already_exist: 'Sklep z takim ID już istnieje',
    lvlup_error: 'Błąd w konfiguracji lvlup',
    reference_not_found: 'Nie znaleziono odwołania w bazie danych',
    server_already_exist: 'Serwer z takim ID już istnieje'
  },

  firebase: {
    'auth/invalid-email': 'Email jest źle sformatowany.',
    'auth/wrong-password': 'Złe hasło.',
    'auth/network-request-failed': 'Brak połączenia z internetem.',
    'auth/user-not-found': 'Nie znaleziono użytkownika o podanym mailu.',
    'auth/too-many-requests': 'Dostęp do konta został tymczasowo zablokowany ze względu na dużą liczbę nieudanych prób logowań. Możesz od razu je odblokować resetując hasło.',
    'auth/email-already-in-use': 'Email jest już w użyciu.',
    'auth/weak-password': 'Zbyt słabe hasło (powinno mieć co najmniej 6 znaków).',
    'auth/missing-email': 'Nie wpisałeś adresu email.'
  },

  misc: {
    required_fields: 'wskazuje pola wymagane',
    check_mailbox_again: 'Sprawdź swoją skrzynkę mailową lub poproś o wysłanie maila jeszcze raz',
    check_mailbox: 'Sprawdź swoją skrzynkę mailową, aby zalogować się na swoje konto',
    if_not_read: 'Jeśli tego nie przeczytasz staną się nieoczekiwane złe rzeczy!',
    after_shop_delete: 'Tej czynności nie można cofnąć. Spowoduje to trwałe usunięcie sklepu serwera oraz wszystkich rzeczy w tym sklepie takich jak Serwerów, Usług, Voucherów, Płatności.',
    after_service_delete: 'Spowoduje to usunięcie usługi na stałe, nie będzie się dało tej operacji cofnąć.',
    after_server_delete: 'Spowoduje to usunięcie serwera na stałe, nie będzie się dało tej operacji cofnąć.',
    type_shopid_to_confirm: 'Wpisz {shopid} aby potwierdzić swoją operację:',
    sms_send_instruction: 'Ta usługa kosztuje {netto}zł netto ( {brutto}zł z VAT ). {br} Aby zakupić tą usługę wyślij SMS o treści {sms} pod numer {number}. {br} W odpowiedzi otrzymasz SMS z kodem, który wpisz poniżej.',
    email_sent: 'Email został wysłany',
    shop_url: 'Twój sklep jest dostępny pod adresem',
    without_server: 'Bez serwera',
    no_payment_enabled: 'Nie włączono żadnej płatności!',
    default_description: '<h1>Opis super usługi!</h1><p>Tutaj możesz zamieścić opis usługi używając super tagów!</p>',
    test_message: 'Testowa wiadomość',
    costslider_instruction_transfer: 'Przy płatności przelewem koszt liczony jest: ILOŚĆ * KOSZT SZTUKI.',
    costslider_instruction_sms: "Przy płatności sms'em musisz wybrać w polach poniżej ile sztuk produktu będzie za dany sms.",
    costslider_instruction_placeholder: 'W komendach możesz użyć [n] jeśli chcesz użyć liczby wybranej na suwaku.',
    costslider_amount: 'Ilość produktów: {amount}',
    bought: 'kupił(a)',
    privacy_policy_accept: 'Rejestrując się w serwisie automatycznie akceptujesz ',
    privacy_policy: 'Politykę prywatności',
    per_item: 'za sztukę',
    price: 'Cena',
    price_from: 'Cena od',
    click_to_pay_by_link: 'Kliknij przycisk "Dalej", aby przejść do płatności.'
  }
}
