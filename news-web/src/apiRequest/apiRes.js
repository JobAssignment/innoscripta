const mockApiData = [
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "Holly Williams, Erin Lyall",
    title:
      "Israel-Hamas cease-fire extended 2 days, Qatar says, amid joyous reunions for freed hostages, Palestinian prisoners",
    description:
      "Hamas is expected to release more hostages, and Israel more Palestinian prisoners, under a cease-fire that has been extended 2 days, Qatar announced.",
    url: "https://www.cbsnews.com/news/israel-hamas-war-cease-fire-hostages-released-extension-hope/",
    urlToImage:
      "https://assets3.cbsnewsstatic.com/hub/i/r/2023/11/27/5928261c-d32f-4b68-a90d-de99ba7ffcf6/thumbnail/1200x630/1978693116192db3af17d459f117c6d3/israel-hamas-hostages-1815258707.jpg?v=5659e73acd91751548aa89950cf015b0",
    publishedAt: "2023-11-27T17:30:00+00:00",
    content:
      'Petah Tivka, Israel — A humanitarian pause in fighting between Israel and Hamas will be extended by two days, Qatar said Monday before the initial four-day truce in Gaza was set to expire.\r\n"The Stat… [+5280 chars]',
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "CBS News",
    title: "Elon Musk visits Israel after endorsing antisemitic post on X",
    description:
      "Elon Musk is visiting Israel Monday, touring a kibbutz attacked last month by Hamas militants. Musk has come under fire after endorsing an antisemitic post on his platform, X, formerly known as Twitter. Ryan Mac, a technology reporter for The New York Times, …",
    url: "https://www.cbsnews.com/video/elon-musk-visits-israel-after-endorsing-antisemitic-post-on-x/",
    urlToImage:
      "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/27/6cd63d2e-fc8a-4bc2-8550-95f2c78d8c44/thumbnail/1200x630/3ebbc9a1a180cedb6cd3582f37b51926/cbsn-fusion-elon-musk-visits-israel-after-endorsing-antisemitic-post-on-x-thumbnail-2481788-640x360.jpg?v=5659e73acd91751548aa89950cf015b0",
    publishedAt: "2023-11-27T17:28:02+00:00",
    content:
      "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "How Hamas built a force to attack Israel on 7 October",
    description:
      "BBC Arabic and BBC Verify have pieced together how armed groups came together to train for the assault.",
    url: "http://www.bbc.co.uk/news/world-middle-east-67480680",
    urlToImage:
      "https://ichef.bbci.co.uk/news/1024/branded_news/3DE1/production/_131814851_hamas-camp-2.jpg",
    publishedAt: "2023-11-27T17:22:21.2663143Z",
    content:
      "Five armed Palestinian groups joined Hamas in the deadly 7 October attack on Israel after training together in military-style exercises from 2020 onwards, BBC News analysis shows.\r\nThe groups carried… [+11653 chars]",
  },
  {
    source: {
      id: "cbc-news",
      name: "CBC News",
    },
    author: "CBC News",
    title:
      "Trudeau offended Israel with call for 'maximum restraint,' says Israeli president | CBC News",
    description:
      "Israeli President Isaac Herzog said Prime Minister Justin Trudeau offended his country earlier this month when he asked Israel to exercise “maximum restraint” in military operations in Gaza.",
    url: "http://www.cbc.ca/news/politics/herzog-says-trudeau-offended-israel-1.7041040",
    urlToImage:
      "https://i.cbc.ca/1.7041048.1701103268!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/austria-israel.jpg",
    publishedAt: "2023-11-27T17:22:19.829172Z",
    content:
      'Israeli President Isaac Herzog said Prime Minister Justin Trudeau offended his country earlier this month when he asked Israel to exercise "maximum restraint" in military operations in Gaza.\r\n"We wer… [+3739 chars]',
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "CBS News",
    title:
      "AG Garland addresses threats against Jewish, Muslim and Arab communities in U.S.",
    description:
      "Attorney General Merrick Garland spoke Monday in New York about the Israel-Hamas war and the rise in violence in the U.S. against Jewish, Muslim and Arab people since the Oct. 7 attacks.",
    url: "https://www.cbsnews.com/video/ag-garland-addresses-rise-in-antisemitism-islamaphobia/",
    urlToImage:
      "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/27/3edca106-cf2a-4c6e-b140-ab34cce394da/thumbnail/1200x630/551f124253c20a0304b997249e31c4ec/cbsn-fusion-ag-garland-addresses-rise-in-antisemitism-islamaphobia-thumbnail-2481749-640x360.jpg?v=5659e73acd91751548aa89950cf015b0",
    publishedAt: "2023-11-27T17:21:29+00:00",
    content:
      "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
  },
  {
    source: {
      id: "cbs-news",
      name: "CBS News",
    },
    author: "CBS News",
    title: "Israel, Hamas agree to 2-day cease-fire extension, Qatar says",
    description:
      "The pause in fighting between Israel and Hamas will be extended two more days, Qatar said Monday before the initial four-day cease-fire in Gaza was set to expire. CBS News correspondent Lilia Luciano has more.",
    url: "https://www.cbsnews.com/video/israel-hamas-agree-to-2-day-cease-fire-extension-qatar-says/",
    urlToImage:
      "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/27/be7b6093-ea24-4c42-b94b-f427f1e82cd9/thumbnail/1200x630/65a6981a469f4af7b222d331ccf5934f/cbsn-fusion-qatar-israel-hamas-agree-to-2-day-cease-fire-extension-thumbnail-2481744-640x360.jpg?v=5659e73acd91751548aa89950cf015b0",
    publishedAt: "2023-11-27T17:14:01+00:00",
    content:
      "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On",
  },
  {
    source: {
      id: "al-jazeera-english",
      name: "Al Jazeera English",
    },
    author: "Al Jazeera",
    title:
      "Photos: Empty towns to sea laundry: How war has changed Israel, Palestine",
    description:
      "From border towns in Israel to devastated cities in Gaza and harassed Palestinians in Jerusalem, nothing is the same.",
    url: "http://www.aljazeera.com/gallery/2023/11/27/photos-empty-towns-to-sea-laundry-how-war-has-changed-israel-palestine",
    urlToImage:
      "https://www.aljazeera.com/wp-content/uploads/2023/11/Collective-punishement-Adnan-1701089313.jpg?resize=1920%2C1440",
    publishedAt: "2023-11-27T16:57:45Z",
    content:
      "On October 7, Hamas launched deadly attacks on southern Israel, prompting a relentless aerial bombardment of the Gaza Strip and a subsequent ground offensive by Israel that has killed nearly 15,000 P… [+2607 chars]",
  },
  {
    source: {
      id: "cbc-news",
      name: "CBC News",
    },
    author: "CBC News",
    title:
      "Hamas, mediator Qatar say truce with Israel to be extended 2 more days | CBC News",
    description:
      "Qatar's foreign ministry said on Monday that a truce in Gaza has been extended for two more days, which a Hamas official said separately would involve similar conditions as those that have been in place since Friday to secure the exchange of Israeli hostages …",
    url: "http://www.cbc.ca/news/world/biden-hostages-hamas-israel-1.7040761",
    urlToImage:
      "https://i.cbc.ca/1.7040817.1701090011!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/israel-palestinians.JPG",
    publishedAt: "2023-11-27T16:52:22.9545359Z",
    content:
      "Qatar's foreign ministry said on Monday that a truce in Gaza has been extended for two more days.\r\n\"An agreement has been reached to extend the humanitarian truce for an additional two days in the Ga… [+7063 chars]",
  },
  {
    source: {
      id: "info-money",
      name: "InfoMoney",
    },
    author: "Bloomberg",
    title:
      "Catar afirma que Israel e Hamas concordaram em estender trégua por dois dias",
    description:
      "Um cessar-fogo inicial de quatro dias deveria terminar na manhã desta terça-feira",
    url: "https://www.infomoney.com.br/mundo/catar-afirma-que-israel-e-hamas-concordaram-em-estender-tregua-por-dois-dias/",
    urlToImage:
      "https://www.infomoney.com.br/wp-content/uploads/2023/11/GettyImages-1816744150.jpg?quality=70",
    publishedAt: "2023-11-27T16:52:06Z",
    content:
      "© 2000-2023 InfoMoney. Todos os direitos reservados.\r\nO InfoMoney preza a qualidade da informação e atesta a apuração de todo o conteúdo produzido por sua equipe, ressaltando, no entanto, que não faz… [+1194 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: "CNN",
    title:
      "Israel-Hamas truce extends by two days, Qatar says: Live updates - CNN",
    description: null,
    url: "https://news.google.com/rss/articles/CBMiV2h0dHBzOi8vd3d3LmNubi5jb20vbWlkZGxlZWFzdC9saXZlLW5ld3MvaXNyYWVsLWhhbWFzLXdhci1nYXphLW5ld3MtMTEtMjctMjMvaW5kZXguaHRtbNIBW2h0dHBzOi8vYW1wLmNubi5jb20vY25uL21pZGRsZWVhc3QvbGl2ZS1uZXdzL2lzcmFlbC1oYW1hcy13YXItZ2F6YS1uZXdzLTExLTI3LTIzL2luZGV4Lmh0bWw?oc=5",
    urlToImage: null,
    publishedAt: "2023-11-27T16:52:00+00:00",
    content: null,
  },
  {
    source: {
      id: "il-sole-24-ore",
      name: "Il Sole 24 Ore",
    },
    author: null,
    title:
      "Guerra, ultime notizie. Gaza, fonti israeliane: «Accordo raggiunto sugli ostaggi, liberi 9 bambini e due madri». Hamas conferma",
    description:
      "Fonti egiziane riferiscono che gli sforzi per estendere la tregua umanitaria nella Striscia di Gaza sono vicini a raggiungere un accordo per una proroga di altri due giorni. Israele avrebbe offerto ad Hamas ’un’opzione’ per estendere la tregua e ricevere altr…",
    url: "https://www.ilsole24ore.com/art/israele-riceve-lista-11-ostaggi-che-saranno-liberati-oggi-AFHRl2nB",
    urlToImage:
      "https://i2.res.24o.it/images2010/S24/Documenti/2023/11/28/Immagini/Ritagli/2023-11-27T120849Z_553026497_RC2KL4AVYVFH_RTRMADP_5_ISRAEL-PALESTINIANS-U83177816881MZH-1440x752@IlSole24Ore-Web.JPG?r=1170x507",
    publishedAt: "2023-11-27T16:47:55Z",
    content:
      "I bisogni umanitari nel sud di Gaza sono immensi. È difficile descrivere ciò che ci circonda. Non cè carburante, e senza carburante non si muove niente. Non si può cucinare, non si possono far funzio… [+2057 chars]",
  },
  {
    source: {
      id: "die-zeit",
      name: "Die Zeit",
    },
    author: "Tobias Dorfer, AFP, AP",
    title:
      "Krieg in Gaza: Israel und Hamas einigen sich laut Katar auf verlängerte Feuerpause",
    description:
      "Die Waffenruhe zwischen Israel und der Hamas soll um zwei Tage verlängert werden. Das teilte das Außenministerium von Katar mit. Die Hamas bestätigte die Einigung.",
    url: "https://www.zeit.de/politik/ausland/2023-11/katar-israel-und-hamas-einigen-sich-auf-zwei-weitere-tage-feuerpause",
    urlToImage:
      "https://img.zeit.de/politik/ausland/2023-11/katar-israel-und-hamas-einigen-sich-auf-zwei-weitere-tage-feuerpause-bild/wide__1300x731",
    publishedAt: "2023-11-27T16:43:19+00:00",
    content:
      "Kurz vor dem Auslaufen der Feuerpause zwischen Israel und der Terrorgruppe Hamas haben sich beide Seiten nach Angaben Katars auf eine Verlängerung verständigt. Die Waffenruhe solle noch zwei weitere … [+1886 chars]",
  },
  {
    source: {
      id: "google-news-uk",
      name: "Google News (UK)",
    },
    author: "Financial Times",
    title:
      "Israel-Hamas truce extended by two days, Qatar says - Financial Times",
    description: null,
    url: "https://news.google.com/rss/articles/CBMiP2h0dHBzOi8vd3d3LmZ0LmNvbS9jb250ZW50LzY0YzE5M2IzLTg3ZmYtNDBmMy04MDk2LTMwYTZjZDQxNjcwZdIBAA?oc=5",
    urlToImage: null,
    publishedAt: "2023-11-27T16:28:10+00:00",
    content: null,
  },
  {
    source: {
      id: "handelsblatt",
      name: "Handelsblatt",
    },
    author: null,
    title:
      "+++ Israel-Krieg +++: Feuerpause wird laut Katar um zwei Tage verlängert",
    description:
      "Kairo: Elf Geiseln sollen am Montag freikommen +++ UN-Generalsekretär Guterres fordert dauerhaften Waffenstillstand +++ Israel und Hamas unzufrieden mit Listen der Freizulassenden +++ Der Newsblog.",
    url: "https://www.handelsblatt.com/politik/international/israel-feuerpause-wird-laut-katar-um-zwei-tage-verlaengert/29433048.html",
    urlToImage: null,
    publishedAt: "2023-11-27T16:22:19+00:00",
    content:
      "Kairo: Elf Geiseln sollen am Montag freikommen +++ UN-Generalsekretär Guterres fordert dauerhaften Waffenstillstand +++ Israel und Hamas unzufrieden mit Listen der Freizulassenden +++ Der Newsblog.",
  },
];
export default mockApiData;
