/* ===== EDIT HERE: categories, boxes, and arrows ===== */
const CATS = {
  env: "Humans & Environment",
  cult: "Cultural Developments",
  gov: "Governance",
  eco: "Economic Systems",
  soc: "Social Organization",
  tech: "Technology & Innovation",
  evt: "Major Event"
};

const NODES = [
  {
    "id": "enl",
    "chapter": 7,
    "cat": "cult",
    "title": "Enlightenment ideas",
    "x": 40,
    "y": 100,
    "when": "Mid-1700s\u20131800s",
    "about": "European thinkers challenged traditional authority, proposing that society could be understood and improved through reason, liberty, and human engineering rather than divine right or ancient custom.",
    "who": "Philosophes, educated elites, merchants, and literate publics across Europe and the Americas.",
    "results": "Subverted absolute monarchies, fueled the Atlantic revolutions, and provided the philosophical foundation for abolitionism, popular sovereignty, and modern constitutionalism."
  },
  {
    "id": "am",
    "chapter": 7,
    "cat": "evt",
    "title": "American Revolution",
    "x": 340,
    "y": 0,
    "when": "1775\u20131787",
    "about": "Disputes over representation, taxation, and Parliament's efforts to tighten imperial control escalated into a colonial rebellion shaped by Enlightenment arguments about political authority.",
    "who": "British colonists, landed gentry, colonial merchants, loyalists, and British imperial forces.",
    "results": "Established a durable republic under a written constitution and inspired later republican movements, while preserving slavery and excluding many people from political rights."
  },
  {
    "id": "fr",
    "chapter": 7,
    "cat": "evt",
    "title": "French Revolution",
    "x": 340,
    "y": 100,
    "when": "1789\u20131815",
    "about": "Driven by bankruptcy, estate inequality, and radical Enlightenment thought, French revolutionaries abolished feudal privileges, executed the monarch, and initiated the Reign of Terror before Napoleon exported its reforms across Europe.",
    "who": "The Three Estates (clergy, nobility, and commoners), peasant rebels, sans-culottes, and European monarchies.",
    "results": "Dismantled the Ancien R\u00e9gime, ended feudalism in Western Europe, disseminated legal equality via the Napoleonic Code, and unleashed modern nationalism."
  },
  {
    "id": "ht",
    "chapter": 7,
    "cat": "evt",
    "title": "Haitian Revolution",
    "x": 340,
    "y": 200,
    "when": "1791\u20131804",
    "about": "Enslaved people in the French colony of Saint-Domingue began a major uprising in 1791. Toussaint Louverture became a leading figure in the struggle, which continued after his capture and death.",
    "who": "Enslaved Africans, affranchis (free people of color), white planters, and French colonial authorities.",
    "results": "Established Haiti as the first independent Black-led republic and a landmark victory against slavery and colonial rule, while leaving the new country isolated and burdened by war."
  },
  {
    "id": "la",
    "chapter": 7,
    "cat": "evt",
    "title": "Latin American independence",
    "x": 640,
    "y": 120,
    "when": "1808\u20131826",
    "about": "Triggered by Napoleon's invasion of the Iberian Peninsula, Creole elites led by Sim\u00f3n Bol\u00edvar and Jos\u00e9 de San Mart\u00edn organized independence wars across Spanish and Portuguese America.",
    "who": "Creole elites, Indigenous peoples, mestizos, enslaved Afro-descendants, and royalist forces.",
    "results": "Ended Spanish rule across most of mainland Latin America and Portuguese rule in Brazil. Independence brought political change, but many social and economic hierarchies persisted."
  },
  {
    "id": "abo",
    "chapter": 7,
    "cat": "soc",
    "title": "Abolition of slavery",
    "x": 340,
    "y": 300,
    "when": "c. 1780\u20131888",
    "about": "A powerful convergence of moral critiques, Christian evangelicalism, economic shifts toward wage labor, and persistent armed slave rebellions compelled Atlantic nations to dismantle chattel slavery.",
    "who": "Enslaved peoples, abolitionist societies, freedmen, British naval patrols, and plantation owners.",
    "results": "Slavery was abolished across the Americas at different times, with Brazil ending it in 1888. Emancipation did not by itself secure political equality or economic independence."
  },
  {
    "id": "nat",
    "chapter": 7,
    "cat": "gov",
    "title": "Nationalism",
    "x": 640,
    "y": 10,
    "when": "1800s",
    "about": "The belief that humankind is divided into distinct nations, each with a collective identity, culture, and sovereign right to its own state territory, amplified by revolutionary wars and vernacular print capitalism.",
    "who": "Nationalist intellectuals, patriotic citizens, language revivers, and ethnic minorities in multinational empires.",
    "results": "Unified fragmented territories (Italy, Germany), fractured polyglot empires (Ottoman, Austrian, Russian), and intensified aggressive state rivalries that precipitated World War I."
  },
  {
    "id": "fem_early",
    "chapter": 7,
    "cat": "cult",
    "title": "Early feminist beginnings",
    "x": 640,
    "y": 240,
    "when": "1790s\u20131910s",
    "about": "Thinkers like Mary Wollstonecraft asserted women's intellectual equality, culminating in the 1848 Seneca Falls Convention in the US and international campaigns for women's education, property rights, and suffrage.",
    "who": "Middle-class women activists, working women, political reformers, and patriarchal institutions.",
    "results": "Secured educational and legal property reforms in Western nations, mobilized mass suffragist organizations, and laid the groundwork for twentieth-century global women's rights."
  },
  {
    "id": "ir",
    "chapter": 8,
    "cat": "eco",
    "title": "Industrial Revolution",
    "x": 40,
    "y": 480,
    "when": "c. 1750\u20131900",
    "about": "Beginning in Britain in the eighteenth century, industrialization combined mechanized production with coal-powered steam engines and factory organization. It later spread unevenly across Europe, North America, Russia, and Japan, while many other regions were drawn in primarily as suppliers of food and raw materials.",
    "who": "Factory owners, inventors, wage workers, miners, women and children in industrial labor, urban residents, and communities affected by expanding transport and resource extraction.",
    "results": "Mechanization increased output and lowered the cost of many goods, but concentrated workers in industrial towns and shifted work toward wage labor. Industrialization expanded transport and global trade while deepening differences between industrial and resource-exporting economies."
  },
  {
    "id": "lab",
    "chapter": 8,
    "cat": "soc",
    "title": "Labor movements and socialism",
    "x": 340,
    "y": 580,
    "when": "1800s",
    "about": "In response to brutal working conditions, low wages, and child labor, factory workers organized trade unions and mutual aid societies, while Karl Marx formulated a revolutionary theory of proletarian class struggle.",
    "who": "Industrial proletariat, trade unionists, socialist parties, and bourgeois factory owners.",
    "results": "Prompted electoral franchise expansion, welfare state legislation, wage increases, and the formation of mass socialist and communist parties worldwide."
  },
  {
    "id": "env",
    "chapter": 8,
    "cat": "env",
    "title": "Environmental toll",
    "x": 340,
    "y": 700,
    "when": "1800s\u20131900s",
    "about": "The exponential extraction of coal, iron, and petroleum contaminated atmospheres and waterways, dramatically altered natural landscapes, and commenced anthropogenic carbon emissions.",
    "who": "Urban working-class neighborhoods, rural ecologies, and industrial mining centers.",
    "results": "Coal-powered industry intensified smoke and waste pollution and altered local landscapes, with especially severe effects in industrial towns and mining regions."
  },
  {
    "id": "rus_ind",
    "chapter": 8,
    "cat": "gov",
    "title": "Russian state industrialization",
    "x": 640,
    "y": 500,
    "when": "Late 1800s\u20131905",
    "about": "Unlike the private capitalist model in the West, Russia's industrialization was state-directed by the Tsarist autocracy, focusing on heavy industry and railways (Trans-Siberian) amidst absolute political repression.",
    "who": "Tsarist officials, concentrated urban factory workers, radical Marxist agitators, and impoverished peasants.",
    "results": "Generated explosive social unrest without legal reform channels, culminating in the 1905 Russian Revolution and laying the revolutionary powder keg for 1917."
  },
  {
    "id": "exp",
    "chapter": 8,
    "cat": "eco",
    "title": "Latin American export boom",
    "x": 640,
    "y": 640,
    "when": "c. 1850\u20131910",
    "about": "Latin American republics integrated into global capitalism as major exporters of food and raw materials (beef, copper, nitrates, coffee, rubber) in exchange for European and American manufactured imports.",
    "who": "Large estate owners (haciendas), foreign investors, mining laborers, and peasant farmers.",
    "results": "Concentrated vast wealth among landed oligarchs, prevented native industrialization, and established long-term economic dependency on foreign capital."
  },
  {
    "id": "opi",
    "chapter": 9,
    "cat": "evt",
    "title": "Opium Wars",
    "x": 1240,
    "y": 280,
    "when": "1840\u20131842, 1856\u20131860",
    "about": "Britain deployed steam-powered gunboats and modern artillery to force open trade and reverse its trade deficit with Qing China after Lin Zexu confiscated illegal British opium shipments.",
    "who": "Qing court, British naval commanders, foreign merchants, and addicted Chinese subjects.",
    "results": "Inaugurated China's 'Century of Humiliation' through unequal treaties (Treaty of Nanjing), extraterritoriality, treaty ports, and loss of Hong Kong."
  },
  {
    "id": "tai",
    "chapter": 9,
    "cat": "evt",
    "title": "Taiping Uprising",
    "x": 1540,
    "y": 300,
    "when": "1850\u20131864",
    "about": "A massive, Christian-inspired peasant rebellion led by Hong Xiuquan against the Qing dynasty that rejected Confucianism, advocated gender equality, and sought radical wealth redistribution.",
    "who": "Chinese peasants, Taiping religious followers, Qing imperial armies, and regional gentry militias.",
    "results": "Resulted in 20\u201330 million deaths, devastated China's economy, and permanently decentralized Qing military power into provincial warlord hands."
  },
  {
    "id": "self_str",
    "chapter": 9,
    "cat": "gov",
    "title": "Self-Strengthening Movement",
    "x": 1240,
    "y": 380,
    "when": "1860s\u20131890s",
    "about": "Qing reformers sought to preserve Confucian heritage while cautiously adopting Western military and industrial technology (arsenals, shipyards, telegraph lines).",
    "who": "Qing provincial leaders (Li Hongzhang, Zeng Guofan), conservative Manchu elites, and foreign advisors.",
    "results": "Hampered by conservative resistance, corruption, and decentralization; exposed as inadequate by defeat in the Sino-Japanese War of 1894\u20131895."
  },
  {
    "id": "boxer",
    "chapter": 9,
    "cat": "evt",
    "title": "Boxer Uprising",
    "x": 1540,
    "y": 400,
    "when": "1898\u20131901",
    "about": "An anti-foreign, anti-Christian populist insurrection led by the Society of Righteous and Harmonious Fists, besieging foreign legations in Beijing before an Eight-Nation Alliance crushed it.",
    "who": "Boxer militia fighters, foreign diplomats, Christian converts, and the Empress Dowager Cixi.",
    "results": "Imposed massive indemnity payments on China, demonstrated Qing complete helplessness, and triggered the collapse of the imperial dynasty in 1911."
  },
  {
    "id": "ott",
    "chapter": 9,
    "cat": "gov",
    "title": "Ottoman decline and Tanzimat",
    "x": 1240,
    "y": 480,
    "when": "1800s",
    "about": "Facing military defeats, territorial losses in the Balkans, and economic capitulations, Ottoman rulers launched the Tanzimat ('reorganization') to westernize education, legal codes, and the military.",
    "who": "Ottoman sultans, reforming bureaucrats, religious ulema, and Christian and Muslim subjects.",
    "results": "Established legal equality regardless of religion and modern infrastructure, but failed to halt debt dependence and territorial dismemberment as the 'Sick Man of Europe'."
  },
  {
    "id": "young_turks",
    "chapter": 9,
    "cat": "gov",
    "title": "Young Turks Movement",
    "x": 1540,
    "y": 500,
    "when": "1900s\u20131918",
    "about": "Military and civilian elites advocating secular Turkish nationalism, westernized modernization, and constitutional government seized power in a 1908 military coup.",
    "who": "Young Turk army officers (Committee of Union and Progress), Arab and Armenian subjects, and Sultan Abdul Hamid II.",
    "results": "Radically secularized law and public schools, stimulated Turkish nationalism, alienated non-Turkic minorities, and allied the empire with Germany in World War I."
  },
  {
    "id": "mei",
    "chapter": 9,
    "cat": "evt",
    "title": "Meiji Restoration",
    "x": 1240,
    "y": 580,
    "when": "1868 onward",
    "about": "Following Commodore Perry's arrival, young samurai overthrew the Tokugawa Shogunate, returned imperial rule under Emperor Meiji, and launched state-guided industrialization and social overhaul.",
    "who": "Samurai leaders, Emperor Meiji, peasant factory laborers (predominantly women), and zaibatsu conglomerates.",
    "results": "Japan eliminated feudal social castes, industrialized rapidly, defeated China (1895) and Russia (1905), and escaped Western colonization to build its own colonial empire."
  },
  {
    "id": "mot",
    "chapter": 10,
    "cat": "eco",
    "title": "Demand for raw materials and markets",
    "x": 340,
    "y": 400,
    "when": "1800s",
    "about": "Industrial manufacturing generated surpluses beyond domestic consumption capacity while creating insatiable requirements for rubber, petroleum, cotton, and copper.",
    "who": "Industrial manufacturing syndicates, financiers, imperial politicians, and global merchant fleets.",
    "results": "Compelled European powers to aggressively seize overseas territories to secure captive export markets and raw resource monopolies."
  },
  {
    "id": "tech",
    "chapter": 10,
    "cat": "tech",
    "title": "Technological advancement in imperialism",
    "x": 340,
    "y": 490,
    "when": "1800s",
    "about": "Steam navigation, the Suez Canal (1869), telegraph cables, Maxim machine guns, and quinine medicine dramatically lowered the costs and mortal risks of imperial conquest.",
    "who": "European colonial armies, medical scientists, engineers, and Indigenous defending forces.",
    "results": "Vastly widened the technological and military disparity between European states and non-industrial societies, enabling the subjugation of whole continents."
  },
  {
    "id": "racism",
    "chapter": 10,
    "cat": "cult",
    "title": "Racial ideas and Social Darwinism",
    "x": 640,
    "y": 380,
    "when": "Late 1800s",
    "about": "Europeans used phrenology and misapplied biological evolutionary theories to construct racial hierarchies, asserting a 'civilizing mission' and biological superiority over colonized peoples.",
    "who": "Scientific racists, colonial administrators, Christian missionaries, and subjugated populations.",
    "results": "Legitimized imperial warfare, colonial expropriation, segregation, and paternalistic governance as a 'natural' process of human survival of the fittest."
  },
  {
    "id": "imp",
    "chapter": 10,
    "cat": "gov",
    "title": "New Imperialism",
    "x": 940,
    "y": 330,
    "when": "c. 1850\u20131914",
    "about": "From the mid-nineteenth century, industrial powers used military force, diplomacy, trade, and finance to extend control over African and Asian territories. Conquest took different forms: some places became colonies, while others retained rulers but faced foreign pressure and unequal treaties.",
    "who": "Imperial governments and armies, merchants and investors, local rulers and intermediaries, and the many communities that negotiated with, resisted, or were governed by expanding empires.",
    "results": "Imperial rule redirected land, labor, and trade toward global markets and reorganized political authority. It also generated varied local responses, from collaboration and accommodation to rebellion and anticolonial movements."
  },
  {
    "id": "scr",
    "chapter": 10,
    "cat": "evt",
    "title": "Scramble for Africa",
    "x": 1240,
    "y": 70,
    "when": "1884\u20131885 conference; partition accelerated to 1914",
    "about": "The Berlin Conference set rules for European claims in Africa; it did not itself divide the whole continent. European conquest and occupation accelerated over the following decades.",
    "who": "Bismarck, King Leopold II, British and French imperialists, and resisting African kingdoms (e.g. Zulu, Ashanti, Ethiopia).",
    "results": "Imposed arbitrary borders that divided ethnic groups, subjugated almost the entire continent (except Ethiopia and Liberia), and enforced direct colonial governance."
  },
  {
    "id": "col",
    "chapter": 10,
    "cat": "eco",
    "title": "Colonial labor and cash crops",
    "x": 1240,
    "y": 180,
    "when": "1800s\u2013early 1900s",
    "about": "Colonial states compelled peasants into cash crop cultivation (rubber in Congo, cultivation system in Java, cotton in Mozambique) and wage labor through head taxes and coercion.",
    "who": "Colonial companies, forced laborers, subsistence farmers, and colonial enforcers.",
    "results": "Replaced subsistence agriculture with vulnerability to global price swings, enriched colonizers, and inflicted horrific physical atrocities (e.g. Belgian Congo)."
  },
  {
    "id": "reb_1857",
    "chapter": 10,
    "cat": "evt",
    "title": "Indian Rebellion of 1857",
    "x": 1540,
    "y": 190,
    "when": "1857\u20131858",
    "about": "Triggered by cartridge grease offensive to Hindu and Muslim religious taboos, Indian sepoys mutinied, sparking a broad uprising against British East India Company rule.",
    "who": "Indian sepoys, deposed royalty, peasants, British officers, and colonial garrison forces.",
    "results": "Abolished the British East India Company, instituted direct British Crown governance (the British Raj), and deepened racial segregation between rulers and subjects."
  },
  {
    "id": "ident",
    "chapter": 10,
    "cat": "cult",
    "title": "New identities and resistance",
    "x": 1240,
    "y": 680,
    "when": "1800s\u20131900s",
    "about": "Colonized populations created new forms of identity through Western mission education, conversion to world religions (Christianity, Islam), and Pan-African or Indian cultural nationalism.",
    "who": "Western-educated indigenous elites, Christian converts, traditional chiefs, and resistance organizers.",
    "results": "Fostered a Westernized elite who initially sought inclusion in colonial administration, but ultimately led early-twentieth-century anticolonial national movements."
  },
  {
    "id": "deind",
    "chapter": 10,
    "cat": "eco",
    "title": "Deindustrialization of Asian Powers",
    "x": 1540,
    "y": 90,
    "when": "Mainly 1800s",
    "about": "Inexpensive, machine-manufactured goods from industrial Britain undercut indigenous handloom and craft production across India and Southeast Asia without local industrial modernization.",
    "who": "Indian weavers, artisans, British textile mill owners, and colonial customs authorities.",
    "results": "Deprived millions of their traditional livelihood, converted Asia from the world's leading manufacturing center into a raw materials supplier, and deepened poverty."
  },
  {
    "id": "mig",
    "chapter": 10,
    "cat": "soc",
    "title": "Migration of colonial laborers",
    "x": 1540,
    "y": 0,
    "when": "Late 1800s\u2013early 1900s",
    "about": "Tens of millions of impoverished laborers from India, China, and Africa migrated on indentured contracts to plantations, mines, and infrastructure projects across the colonial globe.",
    "who": "Indentured migrants, shipping companies, plantation oligarchs in the Caribbean, Fiji, and Africa.",
    "results": "Created major diaspora communities worldwide (e.g. Indians in South Africa, Chinese in Southeast Asia) while subjecting laborers to indenture and disease."
  },
  {
    "id": "ww1",
    "chapter": 11,
    "cat": "evt",
    "title": "World War I (The Great War)",
    "x": 1840,
    "y": 60,
    "when": "1914\u20131918",
    "about": "The assassination of Archduke Franz Ferdinand triggered the July Crisis. Alliance commitments, militarism, imperial rivalries, nationalism, and decisions made by governments helped transform a regional crisis into a prolonged industrial war between the Allied and Central Powers.",
    "who": "European imperial powers, colonial troops from Africa and Asia, civilian workers, and drafted soldiers.",
    "results": "Killed millions and mobilized soldiers and resources across empires, including colonial troops and laborers. The conflict strained European economies, contributed to the collapse of four empires, and left unresolved political and social tensions."
  },
  {
    "id": "t_vers",
    "chapter": 11,
    "cat": "gov",
    "title": "Treaty of Versailles",
    "x": 2140,
    "y": 30,
    "when": "1919",
    "about": "The Paris Peace Conference imposed the 'war guilt' clause and harsh financial and territorial reparations on Germany, redrew the borders of Europe, and established the League of Nations.",
    "who": "Woodrow Wilson, European victors, Weimar Germany, and non-Western colonial petitioners.",
    "results": "Fostered deep German resentment and economic chaos, dissolved empires into volatile successor states, and sowed the diplomatic seeds for World War II."
  },
  {
    "id": "rus_rev",
    "chapter": 11,
    "cat": "evt",
    "title": "Russian Revolution & USSR",
    "x": 1840,
    "y": 200,
    "when": "1917\u20131922",
    "about": "WWI military catastrophe and economic starvation collapsed the Tsarist autocracy; Vladimir Lenin and the Bolsheviks seized power, establishing the world's first communist state.",
    "who": "Tsar Nicholas II, Bolshevik party cadre, industrial Soviets, peasant soldiers, and Red/White armies.",
    "results": "Withdrew Russia from WWI, redistributed land, nationalized industry, and created the Union of Soviet Socialist Republics (USSR) as an ideological rival to capitalism."
  },
  {
    "id": "g_dep",
    "chapter": 11,
    "cat": "eco",
    "title": "The Great Depression",
    "x": 1840,
    "y": 340,
    "when": "1929\u20131939",
    "about": "Sparked by the US stock market crash of October 1929, an economic collapse swept the capitalist world, devastating international trade, wages, and employment.",
    "who": "Unemployed industrial workers, bank customers, farmers, and global exporters of primary goods.",
    "results": "Proved laissez-faire capitalism volatile, inspired the US New Deal regulatory welfare state, and fueled the rise of extremist fascist regimes in Europe and Asia."
  },
  {
    "id": "fas_naz",
    "chapter": 11,
    "cat": "gov",
    "title": "Fascism and Nazism",
    "x": 2140,
    "y": 180,
    "when": "1920s\u20131945",
    "about": "Aggressive, ultra-nationalist totalitarian movements led by Mussolini in Italy and Hitler in Germany repudiated liberal democracy, socialism, and individual rights in favor of racial state dominance.",
    "who": "Adolf Hitler, Benito Mussolini, Nazi Party stormtroopers, and European Jewish populations.",
    "results": "Subverted Weimar democracy, militarized German society, launched state racial persecutions, and initiated aggressive imperial conquests leading directly to WWII."
  },
  {
    "id": "jap_auth",
    "chapter": 11,
    "cat": "gov",
    "title": "Japanese Authoritarianism",
    "x": 2140,
    "y": 320,
    "when": "1930s",
    "about": "Depression hardships and nationalist militarism eroded Japanese party democracy, elevating the imperial military to dominate governance under Emperor Hirohito.",
    "who": "Japanese military leadership, zaibatsu industrialists, and populations in Manchuria and China.",
    "results": "Invaded Manchuria (1931) and launched full-scale war against China (1937) to secure a self-sufficient 'Greater East Asia Co-Prosperity Sphere'."
  },
  {
    "id": "ww2",
    "chapter": 11,
    "cat": "evt",
    "title": "World War II",
    "x": 2140,
    "y": 460,
    "when": "1939\u20131945",
    "about": "A genuinely global total conflict between the Axis (Germany, Japan, Italy) and Allies (US, USSR, Britain, China), waged across Europe, the Pacific, and North Africa.",
    "who": "Military conscripts, air-raid civilians, colonized laborers, and political leaders.",
    "results": "60 million deaths (mostly civilians), total devastation of Europe and Japan, end of European global hegemony, and emergence of the US and USSR as superpowers."
  },
  {
    "id": "holo",
    "chapter": 11,
    "cat": "evt",
    "title": "The Holocaust",
    "x": 2140,
    "y": 590,
    "when": "1939\u20131945",
    "about": "Nazi Germany's state-sponsored, industrial genocide that systematically murdered six million European Jews and millions of Roma, Soviet prisoners, disabled individuals, and political dissidents.",
    "who": "SS execution squads, European Jewish communities, concentration camp prisoners, and collaborators.",
    "results": "Exterminated two-thirds of Europe's Jewish population, redefined international law regarding 'crimes against humanity,' and accelerated the creation of Israel."
  },
  {
    "id": "atom",
    "chapter": 11,
    "cat": "tech",
    "title": "Atomic Bomb and Nuclear Age",
    "x": 2140,
    "y": 710,
    "when": "1945",
    "about": "The US Manhattan Project developed atomic fission weapons, dropping them on Hiroshima and Nagasaki in August 1945 to force Japan's unconditional surrender.",
    "who": "Nuclear scientists, President Truman, Japanese civilian victims, and the post-war superpowers.",
    "results": "Ended WWII in Asia, initiated the existential terror of thermonuclear war, and inaugurated the Cold War nuclear arms race."
  },
  {
    "id": "c_war",
    "chapter": 12,
    "cat": "gov",
    "title": "The Cold War",
    "x": 2440,
    "y": 80,
    "when": "1947\u20131991",
    "about": "A prolonged geopolitical and ideological rivalry between the United States and the Soviet Union, shaped by competing political-economic systems and security fears. Nuclear deterrence discouraged direct war between the superpowers, while alliances, aid, propaganda, and regional conflicts extended their competition worldwide.",
    "who": "American and Soviet leadership, European allies, and non-aligned third-world nations.",
    "results": "The rivalry divided Europe and produced a nuclear arms race, military alliances, and repeated crises. In Asia, Africa, and Latin America, local conflicts and political movements had their own causes even as outside powers supplied aid, weapons, or intervention."
  },
  {
    "id": "chn_rev",
    "chapter": 12,
    "cat": "evt",
    "title": "Chinese Communist Revolution",
    "x": 2440,
    "y": 240,
    "when": "1949\u20131976",
    "about": "After decades of conflict, the Chinese Communist Party under Mao Zedong defeated the Guomindang in 1949 and founded the People's Republic of China. The new state redistributed land, collectivized agriculture, and later launched the Great Leap Forward and Cultural Revolution as radical campaigns to remake society.",
    "who": "Mao Zedong, Chinese peasantry, Red Guards, and targeted landlord and intellectual classes.",
    "results": "Established a communist state that expanded central authority and reshaped landholding, industry, and education. The Great Leap Forward contributed to a catastrophic famine, and the Cultural Revolution brought mass political persecution and disruption."
  },
  {
    "id": "proxy",
    "chapter": 12,
    "cat": "evt",
    "title": "Cold War Proxy Conflicts",
    "x": 2440,
    "y": 400,
    "when": "1950\u20131975",
    "about": "Korea (1950\u20131953) and Vietnam became major Cold War wars. The 1962 Cuban Missile Crisis was a separate nuclear standoff between the superpowers, not a proxy war.",
    "who": "Korean and Vietnamese civilians, drafted soldiers, Fidel Castro, Kennedy, and Khrushchev.",
    "results": "Devastated East and Southeast Asia, resulted in partitioned nations (Korea), US military withdrawal from Vietnam, and the closest brush with global nuclear catastrophe."
  },
  {
    "id": "ind_decol",
    "chapter": 12,
    "cat": "evt",
    "title": "Indian Independence and Partition",
    "x": 2740,
    "y": 60,
    "when": "1947",
    "about": "Mass nonviolent resistance led by Mahatma Gandhi (satyagraha) and the Indian National Congress compelled Britain to grant independence, resulting in the violent partition into Hindu-majority India and Muslim-majority Pakistan.",
    "who": "Gandhi, Jawaharlal Nehru, Muhammad Ali Jinnah, millions of migrating refugees, and British colonial administrators.",
    "results": "Inaugurated global postwar decolonization; triggered sectarian violence and displacement of 12 million people, leaving enduring territorial conflict in Kashmir."
  },
  {
    "id": "afr_decol",
    "chapter": 12,
    "cat": "evt",
    "title": "African Decolonization",
    "x": 2740,
    "y": 200,
    "when": "1950s\u20131970s",
    "about": "Nationalist movements across Africa dismantled European colonial empires through negotiated transitions (Ghana under Kwame Nkrumah) and armed insurrections (Kenya, Algeria).",
    "who": "African nationalist leaders, colonial powers (Britain, France, Portugal), and diverse ethnic populations.",
    "results": "Dozens of new sovereign nations emerged, but faced the legacy of artificial colonial borders, economic underdevelopment, and Cold War military coups."
  },
  {
    "id": "apart",
    "chapter": 12,
    "cat": "soc",
    "title": "End of Apartheid in South Africa",
    "x": 2740,
    "y": 340,
    "when": "1948\u20131994",
    "about": "The African National Congress (ANC), led by Nelson Mandela, fought the white-minority Afrikaner regime's institutionalized racial segregation (apartheid) through domestic resistance and international sanctions.",
    "who": "Nelson Mandela, Black South Africans, the National Party, and global anti-apartheid boycotters.",
    "results": "Overcame racial apartheid without a catastrophic racial civil war, holding South Africa's first non-racial democratic elections in 1994 with Mandela as president."
  },
  {
    "id": "ussr_fall",
    "chapter": 12,
    "cat": "gov",
    "title": "Collapse of the Soviet Union",
    "x": 2740,
    "y": 480,
    "when": "1985\u20131991",
    "about": "Mikhail Gorbachev's reform policies of perestroika (economic restructuring) and glasnost (openness) inadvertently unleashed nationalist independence movements, culminating in the 1991 dissolution of the USSR.",
    "who": "Gorbachev, Boris Yeltsin, Soviet citizens, and Soviet satellite states in Eastern Europe.",
    "results": "The 1989 fall of the Berlin Wall signaled the weakening of communist rule in Eastern Europe. The USSR dissolved into 15 independent states in 1991, marking the end of the Cold War."
  },
  {
    "id": "deng_ref",
    "chapter": 12,
    "cat": "eco",
    "title": "Deng Xiaoping's Economic Reforms",
    "x": 2740,
    "y": 620,
    "when": "1978 onward",
    "about": "Following Mao's death, Deng Xiaoping embraced pragmatic market reforms, dismantling agricultural communes, welcoming foreign capital into Special Economic Zones, while maintaining strict Communist Party monopoly on power.",
    "who": "Deng Xiaoping, Chinese entrepreneurs, foreign investors, and pro-democracy protesters (Tiananmen 1989).",
    "results": "Propelled explosive economic growth that lifted 800 million citizens out of poverty and turned China into the world's second-largest economy, while suppressing political democracy."
  },
  {
    "id": "sci_rev2",
    "chapter": 13,
    "cat": "cult",
    "title": "Second Scientific Revolution",
    "x": 3040,
    "y": 80,
    "when": "1900s\u2013present",
    "about": "Breakthroughs in theoretical physics\u2014Einstein's theory of relativity and quantum mechanics\u2014overturned Newtonian mechanics and revolutionized the understanding of time, space, matter, and atomic energy.",
    "who": "Albert Einstein, Niels Bohr, quantum physicists, and modern scientific institutions.",
    "results": "Enabled nuclear power and weaponry, semiconductor electronics, laser technology, and GPS navigation systems that underpin contemporary civilization."
  },
  {
    "id": "med_adv",
    "chapter": 13,
    "cat": "tech",
    "title": "Modern Medical Advances",
    "x": 3040,
    "y": 240,
    "when": "1900s\u2013present",
    "about": "The discovery of penicillin and synthetic antibiotics, mass vaccination drives (polio, smallpox), and public sanitation conquered major infectious killers.",
    "who": "Alexander Fleming, Jonas Salk, WHO epidemiologists, and global civilian populations.",
    "results": "Eradicated smallpox, dramatically reduced infant mortality, and contributed to more than doubling average global human life expectancy in a single century."
  },
  {
    "id": "gr_rev",
    "chapter": 13,
    "cat": "tech",
    "title": "The Green Revolution",
    "x": 3040,
    "y": 400,
    "when": "1940s\u20131970s",
    "about": "Beginning with agricultural research in Mexico and later expanding to parts of Asia and elsewhere, the Green Revolution combined high-yield crop varieties with irrigation, synthetic fertilizers, pesticides, and expanded agricultural research. Its results depended on farmers' access to land, credit, water, and other inputs.",
    "who": "Agricultural scientists, small farmers, agrochemical conglomerates, and developing populations in Mexico, India, and the Philippines.",
    "results": "Higher yields helped increase food supplies in some regions, but benefits were uneven and often favored farmers able to afford seeds, irrigation, and chemical inputs. Reliance on these inputs also brought environmental costs and did not eliminate hunger or unequal access to food."
  },
  {
    "id": "comp_net",
    "chapter": 13,
    "cat": "tech",
    "title": "Computing and the Internet",
    "x": 3040,
    "y": 560,
    "when": "Late 1900s\u2013present",
    "about": "Transistors, microprocessors, satellites, fiber-optic cables, and the spread of the internet made it possible to process and transmit information at rapidly increasing speed. Access expanded through unequal infrastructure and devices, and new networks also raised disputes over privacy, censorship, and misinformation.",
    "who": "Silicon Valley engineers, computer users, tech conglomerates, and global web-connected citizens.",
    "results": "Restructured communication, media, and commerce, connected billions of users worldwide, and gave rise to surveillance capitalism and automated algorithmic systems."
  },
  {
    "id": "bretton",
    "chapter": 13,
    "cat": "eco",
    "title": "Bretton Woods & Neoliberalism",
    "x": 3340,
    "y": 100,
    "when": "1944 onward",
    "about": "Allied nations at Bretton Woods established the World Bank and IMF to govern global trade; by the 1980s, neoliberal policies pushed free trade, privatization, and deregulation.",
    "who": "Western economic planners, World Bank and IMF bureaucrats, and developing debtor nations.",
    "results": "Accelerated economic globalization, eliminated trade barriers, but imposed harsh austerity and structural adjustment programs on developing economies."
  },
  {
    "id": "tnc",
    "chapter": 13,
    "cat": "eco",
    "title": "Transnational Corporations",
    "x": 3340,
    "y": 280,
    "when": "Late 1900s\u2013present",
    "about": "Multinational corporations (e.g. Nike, Apple, Toyota) fragmented manufacturing processes into global production supply chains, seeking low wages and tax incentives in developing nations.",
    "who": "Corporate executives, factory workers in special economic zones, and global consumers.",
    "results": "Shifted industrial manufacturing from the Global North to Asia and Latin America, weakening labor unions in the West while creating low-wage factory jobs in developing regions."
  },
  {
    "id": "glob_cult",
    "chapter": 13,
    "cat": "cult",
    "title": "Global Consumer Culture",
    "x": 3340,
    "y": 460,
    "when": "Late 1900s\u2013present",
    "about": "Hollywood films, American fast food, pop music, electronic gaming, and global sports generated a shared consumer culture, often labeled 'Americanization' or cultural homogenization.",
    "who": "Youth audiences, media conglomerates, global brands, and defenders of traditional regional cultures.",
    "results": "Disseminated global consumer habits and Western values, while simultaneously sparking cultural hybridization and protective local cultural preservation movements."
  },
  {
    "id": "rel_resurg",
    "chapter": 13,
    "cat": "cult",
    "title": "Religious Resurgence",
    "x": 3340,
    "y": 620,
    "when": "Late 1900s\u2013present",
    "about": "In response to secularization, moral relativism, and global consumerism, powerful fundamentalist and traditionalist religious movements revived within Christianity, Islam, Judaism, and Hinduism.",
    "who": "Religious fundamentalists, evangelical Christians, Islamic renewal activists, and Hindu nationalists.",
    "results": "Influenced political governance (e.g. Iranian Revolution of 1979, rise of the Religious Right in the US, BJP in India) and sparked violent extremist factions (al-Qaeda, ISIS)."
  },
  {
    "id": "pop_boom",
    "chapter": 14,
    "cat": "soc",
    "title": "Global Population Explosion",
    "x": 3640,
    "y": 80,
    "when": "1900\u2013present",
    "about": "Owing to modern sanitation, antibiotics, and the Green Revolution, the human population experienced an unprecedented quadrupling, surging from 1.6 billion in 1900 to over 6 billion by 2000 and 8 billion today.",
    "who": "Global populations, urban families, and developing societies in Asia and Africa.",
    "results": "Created massive youth cohorts in the Global South, strained natural ecosystems, and intensified global resource demand and migration pressures."
  },
  {
    "id": "urban",
    "chapter": 14,
    "cat": "soc",
    "title": "Rapid Urbanization & Megacities",
    "x": 3640,
    "y": 260,
    "when": "Mid-1900s\u2013present",
    "about": "Rural distress and urban employment magnets catalyzed massive rural-to-urban migrations, turning humankind into a predominantly urban species for the first time in history.",
    "who": "Rural migrants, municipal planners, and millions living in informal squatter settlements (favelas, slums).",
    "results": "Spurred the growth of megacities (Tokyo, Lagos, S\u00e3o Paulo, Mumbai) with populations exceeding 10\u201320 million, creating infrastructure strain and inequality."
  },
  {
    "id": "anthro",
    "chapter": 14,
    "cat": "env",
    "title": "The Anthropocene and Fossil Fuels",
    "x": 3640,
    "y": 440,
    "when": "1900\u2013present",
    "about": "Scientists designated the modern era the 'Anthropocene' (age of humans) because human industrial activity\u2014principally burning coal, oil, and gas\u2014has become the dominant driver of global ecological change.",
    "who": "Geoscientists, industrial energy conglomerates, and all terrestrial ecosystems.",
    "results": "Exponential energy generation powered modern civilization, but fundamentally disrupted the planetary carbon cycle and atmospheric chemistry."
  },
  {
    "id": "clim_chg",
    "chapter": 14,
    "cat": "env",
    "title": "Global Climate Change",
    "x": 3940,
    "y": 120,
    "when": "Late 1900s\u2013present",
    "about": "The accumulation of greenhouse gases from fossil-fuel use, deforestation, and other human activities has warmed the climate. Its consequences include rising temperatures, shifting rainfall patterns, sea-level rise, and more severe risks for communities with limited resources to adapt.",
    "who": "Vulnerable island states, agriculturalists, climate scientists, and future generations.",
    "results": "Rising sea levels, acidification of oceans, unprecedented droughts and wildfires, and political battles over international emissions targets (e.g. Paris Agreement)."
  },
  {
    "id": "env_mov",
    "chapter": 14,
    "cat": "env",
    "title": "Environmentalism Movement",
    "x": 3940,
    "y": 300,
    "when": "1960s\u2013present",
    "about": "Catalyzed by Rachel Carson's 'Silent Spring' (1962), citizen activism organized into mass environmental movements, demanding governmental regulations, renewable energy, and ecological preservation.",
    "who": "Ecological activists, Greenpeace, indigenous land defenders, and green political parties.",
    "results": "Created government environmental protection agencies (EPA), established Earth Day, banned harmful pesticides (DDT), and popularized sustainability and green technology."
  },
  {
    "id": "glob_fem",
    "chapter": 14,
    "cat": "soc",
    "title": "Global Feminism",
    "x": 3940,
    "y": 480,
    "when": "1960s\u2013present",
    "about": "Second- and third-wave feminism transcended Western borders into a worldwide movement addressing workplace pay, reproductive rights, domestic violence, and patriarchal traditions.",
    "who": "Feminist organizers, UN delegates, working women, and traditional patriarchal leadership.",
    "results": "Recognized women's rights as fundamental human rights at the 1995 Beijing Women's Conference, broke glass ceilings in global politics, though facing cultural pushback."
  },
  {
    "id": "hr_gov",
    "chapter": 14,
    "cat": "gov",
    "title": "International Human Rights & UN",
    "x": 3940,
    "y": 660,
    "when": "Post-WWII\u2013present",
    "about": "After World War II, nations established the United Nations (1945) and adopted the Universal Declaration of Human Rights (1948) as a common standard for protecting human dignity.",
    "who": "Eleanor Roosevelt, UN delegates, international legal jurists, and political dissidents.",
    "results": "The Declaration set a common standard but was not itself a binding treaty. Later human-rights treaties created obligations for states that ratified them, while international tribunals developed accountability for grave crimes."
  },
  {
    "id": "nap_reform",
    "chapter": 7,
    "cat": "gov",
    "title": "Napoleonic rule and reform",
    "x": 940,
    "y": 400,
    "when": "1799\u20131815",
    "about": "Napoleon preserved some revolutionary reforms while concentrating political power in an authoritarian state. French conquest spread administrative and legal changes across much of continental Europe, but also provoked resistance and nationalist opposition.",
    "who": "French officials and soldiers, European rulers and subjects, urban professionals, peasants, and people living under French occupation.",
    "results": "Legal reforms weakened feudal privileges in many territories and helped spread ideas of civic equality, while conscription, taxation, and occupation imposed heavy burdens. The reforms left a lasting influence on European law and state administration."
  },
  {
    "id": "remember_haiti",
    "chapter": 7,
    "cat": "cult",
    "title": "The Haitian Revolution's global impact",
    "x": 40,
    "y": 350,
    "when": "1791\u2013after 1804",
    "about": "Haiti's victory made the possibility of emancipation and Black political independence real, while also alarming slaveholding societies. Its influence was therefore both inspirational and contested, rather than a simple model copied unchanged elsewhere.",
    "who": "Enslaved and free people of color, slaveholders, revolutionary leaders in Latin America, and governments across the Atlantic world.",
    "results": "The revolution strengthened antislavery arguments and shaped debates about race, citizenship, and sovereignty. Fear of similar uprisings also encouraged some slaveholding elites to resist broad social change."
  },
  {
    "id": "womens_rights",
    "chapter": 7,
    "cat": "soc",
    "title": "Women's rights and suffrage campaigns",
    "x": 940,
    "y": 520,
    "when": "1800s\u2013early 1900s",
    "about": "Women used conventions, petitions, journalism, associations, and public protest to challenge restrictions on education, property, and political participation. Suffrage campaigns achieved change at different times and through different strategies in different countries.",
    "who": "Women reformers, suffragists, working-class organizers, political parties, and institutions that restricted women's rights.",
    "results": "Organized activism brought women's political status into public debate and eventually expanded suffrage in many states. Voting rights were unevenly granted and often did not remove racial, class, or other barriers to political participation."
  },
  {
    "id": "urban_labor",
    "chapter": 8,
    "cat": "soc",
    "title": "Urban life and industrial labor",
    "x": 940,
    "y": 830,
    "when": "1800s",
    "about": "Factory employment drew people into rapidly expanding towns and cities. Urban workers faced crowded housing, long workdays, and insecure wages, while industrial jobs and city services also created new opportunities and communities.",
    "who": "Factory workers, migrants from rural districts, women and children in paid work, landlords, employers, and municipal authorities.",
    "results": "Industrial cities became centers of production and collective organizing, but housing and public-health systems often lagged behind population growth. The experience of industrialization differed by occupation, gender, skill, and access to income."
  },
  {
    "id": "industrial_socialist",
    "chapter": 8,
    "cat": "gov",
    "title": "Socialist parties and electoral reform",
    "x": 340,
    "y": 830,
    "when": "Late 1800s\u2013early 1900s",
    "about": "Socialist parties organized workers around demands for political representation and improved working conditions. As suffrage widened, many pursued change through elections and legislation, while some activists continued to advocate revolution.",
    "who": "Trade unionists, socialist organizers, industrial workers, voters newly admitted to the electorate, and political elites.",
    "results": "Mass parties and unions gave labor movements durable political institutions. Their campaigns helped make labor rights, social insurance, and redistribution recurring subjects of national politics."
  },
  {
    "id": "dependent_industrialization",
    "chapter": 8,
    "cat": "eco",
    "title": "Dependent industrial development",
    "x": 640,
    "y": 830,
    "when": "Late 1800s\u20131900s",
    "about": "In some export economies, foreign investors and companies partnered with local landowners and political leaders to build railways, plantations, mines, and ports. This could expand exports without creating a broadly diversified domestic industrial base.",
    "who": "Foreign investors, local governments and elites, export workers, farmers, and communities affected by land and labor demands.",
    "results": "Export growth tied local economies to overseas capital and markets and could concentrate political influence among investors and large landowners. Critics described this unequal relationship as a new form of dependency."
  },
  {
    "id": "ethiopian_resistance",
    "chapter": 10,
    "cat": "evt",
    "title": "Ethiopian resistance to conquest",
    "x": 1240,
    "y": 800,
    "when": "1890s\u20131936",
    "about": "Ethiopia maintained its independence during the main late-nineteenth-century partition of Africa, notably defeating Italian forces at Adwa in 1896. Italy later occupied the country from 1936 to 1941, so its independence was not uninterrupted.",
    "who": "Ethiopian rulers and soldiers, Italian forces, and other African states confronting European expansion.",
    "results": "Adwa became a powerful symbol of African resistance and challenged European assumptions of inevitable conquest. Italy's later invasion also shows that the timing and limits of imperial control continued to change."
  },
  {
    "id": "colonial_cashcrop_variation",
    "chapter": 10,
    "cat": "eco",
    "title": "Different paths into colonial cash-crop economies",
    "x": 1540,
    "y": 800,
    "when": "1800s\u2013early 1900s",
    "about": "Colonial export economies varied: some states relied on coercion, while policies in other places encouraged smallholders to grow crops for sale. Transport, land tenure, taxation, and market access shaped how farmers participated.",
    "who": "Small farmers, plantation owners, colonial administrators, merchants, and workers producing crops for local and overseas markets.",
    "results": "Cash-crop production could create income and expand exports, but it also exposed households to price changes and competing demands on land and labor. Neither colonial rule nor export agriculture produced the same experience in every region."
  },
  {
    "id": "missionary_encounters",
    "chapter": 10,
    "cat": "cult",
    "title": "Missionary encounters and cultural change",
    "x": 1240,
    "y": 920,
    "when": "1800s\u20131900s",
    "about": "Mission schools and religious communities introduced new forms of education and challenged some existing practices. Converts, families, and local authorities adapted, negotiated, or rejected these teachings, especially when they touched gender roles and social authority.",
    "who": "Missionaries, converts, women and men in local communities, religious authorities, and colonial officials.",
    "results": "Missionary activity could support new literacy and transregional connections while also producing cultural conflict. Local people shaped these encounters and were not simply passive recipients of outside ideas."
  },
  {
    "id": "industrialized_totalwar",
    "chapter": 11,
    "cat": "tech",
    "title": "Industrial technology and total war",
    "x": 1840,
    "y": 820,
    "when": "1914\u20131945",
    "about": "Industrial production supplied armies with increasingly destructive weapons, while railways, bureaucracies, and mass conscription helped states mobilize entire societies. New technology changed the scale and speed of combat without guaranteeing quick victories.",
    "who": "Soldiers, civilians, industrial workers, governments, medical personnel, and populations in colonies drawn into global wars.",
    "results": "Machine guns, artillery, tanks, aircraft, gas, and submarines increased casualties and widened the war's effects. States expanded control over production and civilian life, and societies faced long-term physical and economic consequences."
  },
  {
    "id": "russian_civilwar",
    "chapter": 11,
    "cat": "evt",
    "title": "Russian Civil War and Bolshevik consolidation",
    "x": 2140,
    "y": 820,
    "when": "1918\u20131921",
    "about": "After the Bolsheviks seized power, they fought a civil war against a shifting coalition of anti-Bolshevik forces, regional movements, and foreign intervention. The conflict followed Russia's withdrawal from World War I and unfolded amid economic collapse.",
    "who": "Bolshevik forces, former imperial officials, anti-Bolshevik groups, regional nationalists, foreign troops, and civilians caught in the fighting.",
    "results": "The Bolsheviks won and consolidated a centralized communist government, but the civil war brought widespread violence and disruption. Its outcome helped shape the formation of the Soviet state."
  },
  {
    "id": "japanese_education",
    "chapter": 11,
    "cat": "cult",
    "title": "Japanese nationalism and wartime education",
    "x": 1840,
    "y": 950,
    "when": "1930s\u20131945",
    "about": "Japanese authorities used schools and public messages to promote loyalty to the emperor and a distinctive national mission. These efforts accompanied military expansion and authoritarian rule, but did not mean all Japanese people held identical views.",
    "who": "Government and military leaders, teachers and students, conscripted soldiers, and people in territories occupied by Japan.",
    "results": "State-directed education helped normalize militarist and nationalist ideas among young people. The same period brought censorship, coercion, and severe violence in occupied territories."
  },
  {
    "id": "korean_war",
    "chapter": 12,
    "cat": "evt",
    "title": "Korean War",
    "x": 2440,
    "y": 800,
    "when": "1950\u20131953",
    "about": "A North Korean invasion of South Korea escalated into an international war involving United Nations forces led by the United States and Chinese intervention. The conflict took place within the Cold War but also grew from Korea's division and competing political projects.",
    "who": "North and South Korean civilians and soldiers, Chinese forces, U.S. and other UN troops, and families divided by the peninsula's border.",
    "results": "An armistice halted the fighting without a peace treaty, leaving the peninsula divided near the prewar line. The war caused mass displacement and destruction and reinforced the militarization of the Cold War in Asia."
  },
  {
    "id": "cuban_revolution",
    "chapter": 12,
    "cat": "evt",
    "title": "Cuban Revolution and international alignment",
    "x": 2740,
    "y": 800,
    "when": "1953\u20131959 onward",
    "about": "The Cuban Revolution overthrew Fulgencio Batista in 1959 and established a government led by Fidel Castro. Cuba's socialist policies and alliance with the Soviet Union brought it into direct conflict with the United States.",
    "who": "Cuban revolutionaries and residents, the Batista government, the Castro government, Cuban exiles, and the U.S. and Soviet governments.",
    "results": "The revolution reshaped Cuban landholding, education, health care, and political life. Cuba became a Cold War flashpoint and supported revolutionary movements abroad, while U.S. hostility and the embargo constrained its economy."
  },
  {
    "id": "mass_nationalism_decolonization",
    "chapter": 12,
    "cat": "gov",
    "title": "Mass politics and the end of empire",
    "x": 2440,
    "y": 930,
    "when": "1940s\u20131970s",
    "about": "Postwar independence movements mobilized workers, students, veterans, and rural communities around nationalist claims to self-government. Leaders combined mass organization with negotiation, electoral politics, strikes, and armed struggle in different contexts.",
    "who": "Anticolonial organizers and supporters, colonial governments, local elites, and the millions living in territories seeking independence.",
    "results": "European empires dissolved across Asia and Africa, but new states inherited borders and economic structures shaped by colonial rule. National unity and political sovereignty did not automatically resolve internal differences or economic dependency."
  },
  {
    "id": "global_electrification",
    "chapter": 13,
    "cat": "tech",
    "title": "Electrification and uneven access",
    "x": 3040,
    "y": 800,
    "when": "1900s\u2013present",
    "about": "Power grids expanded from early industrial centers to cities and rural areas around the world. Electrification supported lighting, factories, communications, and household appliances, but reliable access remained uneven between and within countries.",
    "who": "Utility companies, governments, industrial workers, households, rural communities, and people living beyond reliable power networks.",
    "results": "Electricity changed production and daily life and underpinned many later technologies. Differences in access reflected investment and infrastructure, while power generation also increased demand for fuel and other energy resources."
  },
  {
    "id": "global_broadcast_media",
    "chapter": 13,
    "cat": "tech",
    "title": "Broadcast media and information control",
    "x": 3340,
    "y": 800,
    "when": "1900s\u2013present",
    "about": "Radio, television, and later digital networks carried news and ideas across borders, widening audiences beyond the printed press. Governments and broadcasters both sought to shape what people could hear and see.",
    "who": "Journalists, broadcasters, governments, audiences, dissidents, and communities with unequal access to communication technologies.",
    "results": "Broadcasts could reinforce official messages or expose listeners to competing accounts. Cross-border media weakened some states' ability to monopolize information and helped create shared cultural and political conversations."
  },
  {
    "id": "anti_globalization",
    "chapter": 13,
    "cat": "soc",
    "title": "Critiques of economic globalization",
    "x": 3040,
    "y": 930,
    "when": "1990s\u2013present",
    "about": "Labor groups, environmentalists, farmers, and other activists criticized trade rules and corporate power that they believed distributed globalization's gains and costs unfairly. The 1999 Seattle protests brought many of these concerns into global public view.",
    "who": "Trade unions, nongovernmental organizations, Indigenous and farming groups, multinational firms, and institutions negotiating trade rules.",
    "results": "Protesters challenged the priorities and accountability of global trade institutions without forming a single unified movement. Their campaigns helped keep labor standards, environmental effects, debt, and political representation in public debate."
  },
  {
    "id": "modern_migration",
    "chapter": 14,
    "cat": "soc",
    "title": "Modern migration and its drivers",
    "x": 3640,
    "y": 800,
    "when": "1900s\u2013present",
    "about": "People moved within countries and across borders in response to conflict, economic opportunity, displacement, environmental pressures, and family ties. Trains, ships, motor vehicles, and aircraft made long-distance movement easier for many, though access and legal status remained unequal.",
    "who": "Refugees, labor migrants, families, host communities, employers, and governments managing borders and migration policy.",
    "results": "Migration reshaped cities, labor markets, families, and cultural life in both sending and receiving societies. It could offer safety and opportunity, while also exposing migrants to precarious work, discrimination, and restrictions on movement."
  },
  {
    "id": "global_disease_inequality",
    "chapter": 14,
    "cat": "env",
    "title": "Pandemics and unequal health risks",
    "x": 3940,
    "y": 800,
    "when": "1900s\u2013present",
    "about": "Infectious diseases spread through increasingly connected populations, but exposure and outcomes were shaped by housing, occupation, health systems, and access to treatment. The COVID-19 pandemic made these disparities especially visible.",
    "who": "Patients and care workers, low-wage and service-sector workers, public-health agencies, vaccine developers, and communities with limited medical access.",
    "results": "Pandemics disrupted employment, education, travel, and public life. Unequal access to vaccines and remote work meant their health and economic costs fell especially heavily on poorer and more exposed populations."
  },
  {
    "id": "climate_justice",
    "chapter": 14,
    "cat": "soc",
    "title": "Climate activism and environmental justice",
    "x": 3640,
    "y": 930,
    "when": "Late 1900s\u2013present",
    "about": "Environmental movements increasingly connected conservation and climate policy to public health, corporate responsibility, and the unequal distribution of environmental risks. Communities in the Global South also questioned whether climate rules would limit their development while richer countries retained advantages built on earlier emissions.",
    "who": "Environmental organizations, Indigenous and frontline communities, governments, corporations, faith leaders, and people vulnerable to climate impacts.",
    "results": "Activists used education, litigation, lobbying, and public pressure to demand stronger protections and fairer climate action. Disagreements over responsibility, finance, and development continue to shape international negotiations."
  }
];

const EDGES = [["enl", "am"], ["enl", "fr"], ["enl", "abo"], ["enl", "fem_early"], ["am", "fr"], ["fr", "ht"], ["fr", "la"], ["ht", "la"], ["ht", "abo"], ["fr", "nat"], ["fem_early", "glob_fem"], ["ir", "lab"], ["ir", "env"], ["ir", "mot"], ["ir", "tech"], ["ir", "exp"], ["ir", "rus_ind"], ["mot", "imp"], ["tech", "imp"], ["racism", "imp"], ["nat", "imp"], ["imp", "scr"], ["imp", "col"], ["imp", "opi"], ["imp", "ott"], ["imp", "mei"], ["imp", "ident"], ["col", "mig"], ["col", "deind"], ["col", "reb_1857"], ["opi", "tai"], ["opi", "self_str"], ["self_str", "boxer"], ["tai", "boxer"], ["ott", "young_turks"], ["nat", "ww1"], ["imp", "ww1"], ["tech", "ww1"], ["young_turks", "ww1"], ["ww1", "t_vers"], ["ww1", "rus_rev"], ["ww1", "g_dep"], ["ww1", "fas_naz"], ["t_vers", "fas_naz"], ["g_dep", "fas_naz"], ["g_dep", "jap_auth"], ["fas_naz", "ww2"], ["jap_auth", "ww2"], ["fas_naz", "holo"], ["ww2", "holo"], ["ww2", "atom"], ["tech", "atom"], ["ww2", "c_war"], ["rus_rev", "c_war"], ["atom", "c_war"], ["ww2", "ind_decol"], ["ident", "ind_decol"], ["reb_1857", "ind_decol"], ["ww2", "afr_decol"], ["ident", "afr_decol"], ["scr", "afr_decol"], ["afr_decol", "apart"], ["c_war", "chn_rev"], ["c_war", "proxy"], ["atom", "proxy"], ["c_war", "ussr_fall"], ["chn_rev", "deng_ref"], ["atom", "sci_rev2"], ["sci_rev2", "comp_net"], ["ir", "med_adv"], ["med_adv", "pop_boom"], ["gr_rev", "pop_boom"], ["ww2", "bretton"], ["bretton", "tnc"], ["comp_net", "tnc"], ["comp_net", "glob_cult"], ["tnc", "glob_cult"], ["glob_cult", "rel_resurg"], ["pop_boom", "urban"], ["ir", "anthro"], ["anthro", "clim_chg"], ["env", "clim_chg"], ["clim_chg", "env_mov"], ["ww2", "hr_gov"], ["holo", "hr_gov"], ["hr_gov", "glob_fem"], ["fr", "nap_reform"], ["nat", "nap_reform"], ["nap_reform", "la"], ["ht", "remember_haiti"], ["remember_haiti", "la"], ["fem_early", "womens_rights"], ["womens_rights", "glob_fem"], ["ir", "urban_labor"], ["urban_labor", "urban"], ["urban_labor", "lab"], ["lab", "industrial_socialist"], ["industrial_socialist", "hr_gov"], ["exp", "dependent_industrialization"], ["dependent_industrialization", "tnc"], ["scr", "ethiopian_resistance"], ["ethiopian_resistance", "afr_decol"], ["col", "colonial_cashcrop_variation"], ["colonial_cashcrop_variation", "exp"], ["ident", "missionary_encounters"], ["missionary_encounters", "glob_fem"], ["ww1", "industrialized_totalwar"], ["tech", "industrialized_totalwar"], ["rus_rev", "russian_civilwar"], ["russian_civilwar", "c_war"], ["jap_auth", "japanese_education"], ["japanese_education", "ww2"], ["c_war", "korean_war"], ["korean_war", "proxy"], ["c_war", "cuban_revolution"], ["cuban_revolution", "proxy"], ["ind_decol", "mass_nationalism_decolonization"], ["afr_decol", "mass_nationalism_decolonization"], ["mass_nationalism_decolonization", "ident"], ["sci_rev2", "global_electrification"], ["global_electrification", "comp_net"], ["global_broadcast_media", "comp_net"], ["global_broadcast_media", "ussr_fall"], ["tnc", "anti_globalization"], ["bretton", "anti_globalization"], ["anti_globalization", "glob_cult"], ["pop_boom", "modern_migration"], ["urban", "modern_migration"], ["med_adv", "global_disease_inequality"], ["global_disease_inequality", "urban"], ["clim_chg", "climate_justice"], ["env_mov", "climate_justice"], ["climate_justice", "hr_gov"]];

/* ===== END DATA AREA ===== */

const $ = s => document.querySelector(s), world = $("#world"), svg = $("#edges"), stage = $("#stage"), els = {};
let sel = null, sc = 0.85, tx = 60, ty = 85, selectionView = null, viewInitialized = false;
const WORLD_WIDTH = 5500, WORLD_HEIGHT = 1380, VIEW_MARGIN = 36, MIN_SCALE = 0.05, MAX_SCALE = 1.2, LAYOUT_X = 1.3, LAYOUT_Y = 1.14, NODE_TOP = 100;
const INITIAL_POSITIONS = new Map(NODES.map(n => [n.id, {x: n.x, y: n.y}]));
let dragNode = null, suppressNodeClick = false;
let temporaryLayout = null;

const chapterForNode = n => n.chapter;
const chapterLabel = chapter => chapter
  ? `Period ${chapter <= 10 ? 3 : 4} · Chapter ${chapter}`
  : "Chapter not specified";

NODES.forEach(n => {
  const d = document.createElement("div");
  d.className = "node";
  d.tabIndex = 0;
  d.setAttribute("role", "button");
  d.setAttribute("aria-expanded", "false");
  const chapter = chapterForNode(n);
  d.dataset.chapter = chapter || "";
  d.style.cssText = `left:${n.x * LAYOUT_X}px;top:${n.y * LAYOUT_Y + NODE_TOP}px;--c:var(--${n.cat})`;
  
  d.innerHTML = `
    <div class="node-title">${n.title}</div>
    <span class="node-context">${chapterLabel(chapter)}</span>
    <div class="body">
      <div class="when"><span>${CATS[n.cat] || n.cat}</span><br>${n.when}</div>
      <b>About</b>${n.about}
      <b>Who it affected</b>${n.who}
      <b>Major results</b>${n.results}
      <div class="bar">
        <button class="min" aria-label="Minimize">
          <svg viewBox="0 0 20 12"><path d="M2 10 10 2l8 8" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>`;

  d.onclick = e => {
    e.stopPropagation();
    if (suppressNodeClick) {
      suppressNodeClick = false;
      return;
    }
    select(e.target.closest(".min") ? null : n.id);
  };

  d.onpointerdown = e => {
    if (e.button !== 0 || e.target.closest(".body")) return;
    dragNode = {
      node: n,
      element: d,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      originX: n.x,
      originY: n.y,
      positions: new Map(NODES.map(item => [item.id, {x: item.x, y: item.y}])),
      moved: false
    };
    d.setPointerCapture(e.pointerId);
    e.stopPropagation();
  };

  d.onpointermove = e => {
    if (!dragNode || dragNode.pointerId !== e.pointerId) return;
    const dx = e.clientX - dragNode.startX, dy = e.clientY - dragNode.startY;
    if (!dragNode.moved && Math.hypot(dx, dy) < 4) return;
    if (!dragNode.moved) svg.replaceChildren();
    dragNode.moved = true;
    d.classList.add("dragging");
    const targetX = Math.max(0, Math.min(4200, dragNode.originX + dx / sc / LAYOUT_X));
    const targetY = Math.max(0, Math.min(1050, dragNode.originY + dy / sc / LAYOUT_Y));
    NODES.forEach(item => {
      const position = dragNode.positions.get(item.id);
      setNodePosition(item, position.x, position.y);
    });
    setNodePosition(n, targetX, targetY);
    resolveDragSpacing(n.id);
    apply();
    e.stopPropagation();
  };

  d.onpointerup = e => {
    if (!dragNode || dragNode.pointerId !== e.pointerId) return;
    suppressNodeClick = dragNode.moved;
    d.classList.remove("dragging");
    dragNode = null;
    if (suppressNodeClick) draw();
    e.stopPropagation();
  };

  d.onpointercancel = () => {
    const moved = dragNode && dragNode.node.id === n.id && dragNode.moved;
    d.classList.remove("dragging");
    dragNode = null;
    if (moved) draw();
  };

  d.onkeydown = e => {
    if (e.target !== d) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(sel === n.id ? null : n.id);
    }
  };

  world.appendChild(d);
  els[n.id] = d;
});

function keepInView(id) {
  const node = els[id].getBoundingClientRect(), view = stage.getBoundingClientRect();
  if (node.left < view.left + VIEW_MARGIN) tx += view.left + VIEW_MARGIN - node.left;
  else if (node.right > view.right - VIEW_MARGIN) tx -= node.right - view.right + VIEW_MARGIN;
  if (node.top < view.top + VIEW_MARGIN) ty += view.top + VIEW_MARGIN - node.top;
  else if (node.bottom > view.bottom - VIEW_MARGIN) ty -= node.bottom - view.bottom + VIEW_MARGIN;
}

function setNodePosition(n, x, y) {
  n.x = x;
  n.y = y;
  els[n.id].style.left = `${x * LAYOUT_X}px`;
  els[n.id].style.top = `${y * LAYOUT_Y + NODE_TOP}px`;
}

function boxesOverlap(a, b, gap = 20) {
  return a.offsetLeft < b.offsetLeft + b.offsetWidth + gap &&
    a.offsetLeft + a.offsetWidth + gap > b.offsetLeft &&
    a.offsetTop < b.offsetTop + b.offsetHeight + gap &&
    a.offsetTop + a.offsetHeight + gap > b.offsetTop;
}

function findOpenPosition(node, placed) {
  const gap = 24, width = node.offsetWidth, height = node.offsetHeight;
  const currentLeft = node.offsetLeft, currentTop = node.offsetTop;
  const lefts = [currentLeft, 0], tops = [currentTop, NODE_TOP];
  let maxRight = 0, maxBottom = NODE_TOP;
  placed.forEach(other => {
    lefts.push(other.offsetLeft - width - gap, other.offsetLeft + other.offsetWidth + gap);
    tops.push(other.offsetTop - height - gap, other.offsetTop + other.offsetHeight + gap);
    maxRight = Math.max(maxRight, other.offsetLeft + other.offsetWidth);
    maxBottom = Math.max(maxBottom, other.offsetTop + other.offsetHeight);
  });
  lefts.push(maxRight + gap);
  tops.push(maxBottom + gap);

  const positions = [...new Set(lefts.filter(left => left >= 0))]
    .flatMap(left => [...new Set(tops.filter(top => top >= NODE_TOP))]
      .map(top => ({left, top, distance: (left - currentLeft) ** 2 + (top - currentTop) ** 2})))
    .sort((a, b) => a.distance - b.distance);
  const originalLeft = node.style.left, originalTop = node.style.top;
  const position = positions.find(({left, top}) => {
    node.style.left = `${left}px`;
    node.style.top = `${top}px`;
    return placed.every(other => !boxesOverlap(node, other, gap));
  });
  node.style.left = originalLeft;
  node.style.top = originalTop;
  return position;
}

function resolveOverlaps(anchorId) {
  const anchor = els[anchorId];
  const placed = [anchor];
  const remaining = NODES
    .filter(n => n.id !== anchorId)
    .map(n => els[n.id])
    .sort((a, b) => {
      const ax = a.offsetLeft + a.offsetWidth / 2 - anchor.offsetLeft - anchor.offsetWidth / 2;
      const ay = a.offsetTop + a.offsetHeight / 2 - anchor.offsetTop - anchor.offsetHeight / 2;
      const bx = b.offsetLeft + b.offsetWidth / 2 - anchor.offsetLeft - anchor.offsetWidth / 2;
      const by = b.offsetTop + b.offsetHeight / 2 - anchor.offsetTop - anchor.offsetHeight / 2;
      return ax * ax + ay * ay - bx * bx - by * by;
    });

  remaining.forEach(node => {
    if (placed.some(other => boxesOverlap(node, other))) {
      const position = findOpenPosition(node, placed);
      if (position) {
        const data = NODES.find(n => els[n.id] === node);
        setNodePosition(data, position.left / LAYOUT_X, (position.top - NODE_TOP) / LAYOUT_Y);
      }
    }
    placed.push(node);
  });
}

function resolveDragSpacing(anchorId) {
  const anchor = els[anchorId], gap = 36;
  const nodes = NODES.map(n => els[n.id]);
  for (let pass = 0; pass < 12; pass++) {
    let moved = false;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const overlapX = Math.min(a.offsetLeft + a.offsetWidth + gap - b.offsetLeft, b.offsetLeft + b.offsetWidth + gap - a.offsetLeft);
        const overlapY = Math.min(a.offsetTop + a.offsetHeight + gap - b.offsetTop, b.offsetTop + b.offsetHeight + gap - a.offsetTop);
        if (overlapX <= 0 || overlapY <= 0) continue;
        const horizontal = overlapX < overlapY;
        const delta = horizontal ? overlapX : overlapY;
        const centerA = horizontal ? a.offsetLeft + a.offsetWidth / 2 : a.offsetTop + a.offsetHeight / 2;
        const centerB = horizontal ? b.offsetLeft + b.offsetWidth / 2 : b.offsetTop + b.offsetHeight / 2;
        const direction = centerA <= centerB ? -1 : 1;
        const shiftA = a === anchor ? 0 : b === anchor ? delta * direction : delta * direction / 2;
        const shiftB = b === anchor ? 0 : a === anchor ? -delta * direction : -delta * direction / 2;
        [[a, shiftA], [b, shiftB]].forEach(([element, shift]) => {
          if (!shift) return;
          const item = NODES.find(candidate => els[candidate.id] === element);
          if (horizontal) setNodePosition(item, (element.offsetLeft + shift) / LAYOUT_X, item.y);
          else setNodePosition(item, item.x, (element.offsetTop + shift - NODE_TOP) / LAYOUT_Y);
          moved = true;
        });
      }
    }
    if (!moved) break;
  }
}

function restoreTemporaryLayout() {
  if (!temporaryLayout) return;
  NODES.forEach(n => {
    const position = temporaryLayout.get(n.id);
    if (position) setNodePosition(n, position.x, position.y);
    els[n.id].classList.remove("contextual");
  });
  temporaryLayout = null;
}

function arrangeSelectedNeighbors(id) {
  if (!id) return;
  temporaryLayout = new Map(NODES.map(n => [n.id, {x: n.x, y: n.y}]));

  const incoming = [...new Set(EDGES.filter(([, b]) => b === id).map(([a]) => a))]
    .filter(nodeId => nodeId !== id);
  const outgoing = [...new Set(EDGES.filter(([a]) => a === id).map(([, b]) => b))]
    .filter(nodeId => nodeId !== id && !incoming.includes(nodeId));
  const selected = NODES.find(n => n.id === id);
  [...incoming, ...outgoing].forEach(nodeId => els[nodeId].classList.add("contextual"));
  const columnGap = 64;
  const columnOffset = (els[id].offsetWidth + columnGap) / LAYOUT_X;
  const shiftedX = Math.max(selected.x, incoming.length ? columnOffset : 0);
  const shift = shiftedX - selected.x;

  if (shift) {
    NODES.forEach(n => {
      if (n.id === id || incoming.includes(n.id) || outgoing.includes(n.id)) {
        setNodePosition(n, n.x + shift, n.y);
      }
    });
  }

  const selectedCenterY = (els[id].offsetTop + els[id].offsetHeight / 2 - NODE_TOP) / LAYOUT_Y;
  const placeColumn = (ids, side) => {
    const ordered = ids
      .map(nodeId => NODES.find(n => n.id === nodeId))
      .sort((a, b) => {
        const chapterA = chapterForNode(a) || Number.MAX_SAFE_INTEGER;
        const chapterB = chapterForNode(b) || Number.MAX_SAFE_INTEGER;
        return chapterA - chapterB || a.y - b.y || a.x - b.x;
      });
    let totalHeight = 0, previousChapter = null;
    const placements = ordered.map(n => {
      const chapter = chapterForNode(n);
      const gap = 36 / LAYOUT_Y + (previousChapter !== null && chapter !== previousChapter ? 18 / LAYOUT_Y : 0);
      const height = els[n.id].offsetHeight / LAYOUT_Y;
      const placement = {n, chapter, gap, height};
      totalHeight += gap + height;
      previousChapter = chapter;
      return placement;
    });
    const startY = Math.max(0, selectedCenterY - totalHeight / 2);
    let y = startY;
    placements.forEach(({n, gap, height}) => {
      y += gap;
      setNodePosition(n, selected.x + side * columnOffset, y);
      y += height;
    });
  };

  placeColumn(incoming, -1);
  placeColumn(outgoing, 1);
  resolveOverlaps(id);
}

function select(id) {
  const closing = !id && !!sel;
  if (id && !sel) selectionView = {sc, tx, ty};
  restoreTemporaryLayout();
  sel = id;
  NODES.forEach(n => {
    const d = els[n.id], on = n.id === id, nb = id && EDGES.some(([a, b]) => (a === id && b === n.id) || (b === id && a === n.id));
    d.classList.toggle("open", on);
    d.classList.toggle("dim", !!id && !on && !nb);
    d.setAttribute("aria-expanded", on);
  });
  arrangeSelectedNeighbors(id);
  draw();
  if (id) {
    focusSelection(id);
  } else if (closing && selectionView) {
    sc = selectionView.sc;
    tx = selectionView.tx;
    ty = selectionView.ty;
    selectionView = null;
  }
  apply();
}

function initialView() {
  const size = worldSize();
  sc = Math.min(0.5, (stage.clientHeight - VIEW_MARGIN * 2) / size.height);
  sc = Math.max(MIN_SCALE, sc);
  tx = VIEW_MARGIN;
  ty = VIEW_MARGIN;
  apply();
}

const NS = "http://www.w3.org/2000/svg";
const box = id => {
  const d = els[id];
  return { l: d.offsetLeft, t: d.offsetTop, r: d.offsetLeft + d.offsetWidth, b: d.offsetTop + d.offsetHeight };
};
const isOn = ([a, b]) => !!sel && (a === sel || b === sel);

function connectionOrientation(source, target) {
  const sx = (source.l + source.r) / 2, sy = (source.t + source.b) / 2;
  const tx = (target.l + target.r) / 2, ty = (target.t + target.b) / 2;
  const dx = tx - sx, dy = ty - sy;
  const horizontalGap = Math.max(source.l - target.r, target.l - source.r);
  const verticalGap = Math.max(source.t - target.b, target.t - source.b);
  return {horizontal: horizontalGap >= 0 && (verticalGap < 0 || Math.abs(dx) >= Math.abs(dy)), dx, dy};
}

function edgeSide(id, neighborId) {
  const source = box(id), target = box(neighborId);
  const {horizontal, dx, dy} = connectionOrientation(source, target);
  if (horizontal) return dx >= 0 ? "right" : "left";
  return dy >= 0 ? "bottom" : "top";
}

function attachmentPoint(id, side, neighborId) {
  const node = box(id);
  const neighbors = EDGES
    .filter(([from, to]) => from === id || to === id)
    .map(([from, to]) => from === id ? to : from)
    .filter(neighborId => edgeSide(id, neighborId) === side)
    .filter((neighbor, index, all) => all.indexOf(neighbor) === index)
    .sort((a, b) => {
      const first = box(a), second = box(b);
      const firstCenter = side === "left" || side === "right" ? (first.t + first.b) / 2 : (first.l + first.r) / 2;
      const secondCenter = side === "left" || side === "right" ? (second.t + second.b) / 2 : (second.l + second.r) / 2;
      return firstCenter - secondCenter || a.localeCompare(b);
    });
  const index = neighbors.indexOf(neighborId);
  const verticalSide = side === "left" || side === "right";
  const length = verticalSide ? node.b - node.t : node.r - node.l;
  const padding = Math.min(18, length / 4);
  const offset = padding + (length - padding * 2) * (index + 1) / (neighbors.length + 1);
  if (side === "left") return {x: node.l, y: node.t + offset};
  if (side === "right") return {x: node.r, y: node.t + offset};
  if (side === "top") return {x: node.l + offset, y: node.t};
  return {x: node.l + offset, y: node.b};
}

function edgeNormal(side) {
  return {
    left: {x: -1, y: 0},
    right: {x: 1, y: 0},
    top: {x: 0, y: -1},
    bottom: {x: 0, y: 1}
  }[side];
}

function routeHitsBox(a, b, obstacle) {
  const padding = 5;
  const left = obstacle.l - padding, right = obstacle.r + padding;
  const top = obstacle.t - padding, bottom = obstacle.b + padding;
  if (Math.abs(a.y - b.y) < 0.01) {
    return a.y > top && a.y < bottom && Math.max(a.x, b.x) > left && Math.min(a.x, b.x) < right;
  }
  if (Math.abs(a.x - b.x) < 0.01) {
    return a.x > left && a.x < right && Math.max(a.y, b.y) > top && Math.min(a.y, b.y) < bottom;
  }
  return true;
}

function pathClearanceBoxes(points, clearance = 12) {
  const clipped = points.slice();
  let trimStart = clearance * 1.5, trimEnd = clearance * 1.5;
  while (trimStart > 0 && clipped.length > 1) {
    const length = Math.hypot(clipped[1].x - clipped[0].x, clipped[1].y - clipped[0].y);
    if (!length) {
      clipped.shift();
      continue;
    }
    if (length <= trimStart) {
      trimStart -= length;
      clipped.shift();
    } else {
      clipped[0] = {
        x: clipped[0].x + (clipped[1].x - clipped[0].x) * trimStart / length,
        y: clipped[0].y + (clipped[1].y - clipped[0].y) * trimStart / length
      };
      trimStart = 0;
    }
  }
  while (trimEnd > 0 && clipped.length > 1) {
    const last = clipped.length - 1, length = Math.hypot(
      clipped[last].x - clipped[last - 1].x, clipped[last].y - clipped[last - 1].y);
    if (!length) {
      clipped.pop();
      continue;
    }
    if (length <= trimEnd) {
      trimEnd -= length;
      clipped.pop();
    } else {
      clipped[last] = {
        x: clipped[last].x + (clipped[last - 1].x - clipped[last].x) * trimEnd / length,
        y: clipped[last].y + (clipped[last - 1].y - clipped[last].y) * trimEnd / length
      };
      trimEnd = 0;
    }
  }
  const boxes = [];
  for (let i = 1; i < clipped.length; i++) {
    const a = clipped[i - 1], b = clipped[i];
    boxes.push({
      l: Math.min(a.x, b.x) - clearance,
      r: Math.max(a.x, b.x) + clearance,
      t: Math.min(a.y, b.y) - clearance,
      b: Math.max(a.y, b.y) + clearance
    });
  }
  return boxes;
}

function makeStraightPath(points) {
  return points.map((point, index) => `${index ? "L" : "M"}${point.x} ${point.y}`).join("");
}

function cleanRoute(points) {
  const unique = points.filter((point, index) =>
    !index || point.x !== points[index - 1].x || point.y !== points[index - 1].y);
  return unique.filter((point, index) => {
    if (index === 0 || index === unique.length - 1) return true;
    const previous = unique[index - 1], next = unique[index + 1];
    return !((previous.x === point.x && point.x === next.x) ||
      (previous.y === point.y && point.y === next.y));
  });
}

function routeAroundBoxes(start, end, obstacles) {
  const minX = Math.min(start.x, end.x, ...obstacles.map(box => box.l));
  const maxX = Math.max(start.x, end.x, ...obstacles.map(box => box.r));
  const minY = Math.min(start.y, end.y, ...obstacles.map(box => box.t));
  const maxY = Math.max(start.y, end.y, ...obstacles.map(box => box.b));
  const xs = [...new Set([start.x, end.x, minX - 20, maxX + 20, ...obstacles.flatMap(box => [box.l - 5, box.r + 5])])].sort((a, b) => a - b);
  const ys = [...new Set([start.y, end.y, minY - 20, maxY + 20, ...obstacles.flatMap(box => [box.t - 5, box.b + 5])])].sort((a, b) => a - b);
  const width = xs.length, height = ys.length, stateCount = width * height * 3;
  const scores = new Float64Array(stateCount);
  scores.fill(Infinity);
  const previous = new Int32Array(stateCount);
  previous.fill(-1);
  const heap = [];
  const keyFor = (x, y, direction) => (y * width + x) * 3 + direction;
  const pointFor = key => {
    const index = Math.floor(key / 3);
    return {x: xs[index % width], y: ys[Math.floor(index / width)]};
  };
  const heuristic = (x, y) => Math.abs(xs[x] - end.x) + Math.abs(ys[y] - end.y);
  const push = (entry) => {
    let index = heap.length;
    heap.push(entry);
    while (index) {
      const parent = Math.floor((index - 1) / 2);
      if (heap[parent].score <= entry.score) break;
      heap[index] = heap[parent];
      index = parent;
    }
    heap[index] = entry;
  };
  const pop = () => {
    const first = heap[0], last = heap.pop();
    if (heap.length) {
      let index = 0;
      while (index * 2 + 1 < heap.length) {
        let child = index * 2 + 1;
        if (child + 1 < heap.length && heap[child + 1].score < heap[child].score) child++;
        if (heap[child].score >= last.score) break;
        heap[index] = heap[child];
        index = child;
      }
      heap[index] = last;
    }
    return first;
  };
  const startKey = keyFor(xs.indexOf(start.x), ys.indexOf(start.y), 2);
  scores[startKey] = 0;
  push({key: startKey, score: heuristic(xs.indexOf(start.x), ys.indexOf(start.y))});

  let finish = -1;
  while (heap.length) {
    const current = pop();
    if (current.score > scores[current.key] + heuristic(
      Math.floor(current.key / 3) % width,
      Math.floor(Math.floor(current.key / 3) / width)
    )) continue;
    const point = pointFor(current.key);
    const index = Math.floor(current.key / 3);
    const x = index % width, y = Math.floor(index / width);
    const direction = current.key % 3;
    if (point.x === end.x && point.y === end.y) {
      finish = current.key;
      break;
    }
    const neighbors = [
      [x - 1, y, 0], [x + 1, y, 0], [x, y - 1, 1], [x, y + 1, 1]
    ];
    for (const [nextX, nextY, nextDirection] of neighbors) {
      if (nextX < 0 || nextX >= width || nextY < 0 || nextY >= height) continue;
      const nextPoint = {x: xs[nextX], y: ys[nextY]};
      if (obstacles.some(obstacle => routeHitsBox(point, nextPoint, obstacle))) continue;
      const nextKey = keyFor(nextX, nextY, nextDirection);
      const nextScore = scores[current.key] + Math.abs(nextPoint.x - point.x) +
        Math.abs(nextPoint.y - point.y) + (direction !== 2 && direction !== nextDirection ? 18 : 0);
      if (nextScore >= scores[nextKey]) continue;
      scores[nextKey] = nextScore;
      previous[nextKey] = current.key;
      push({key: nextKey, score: nextScore + heuristic(nextX, nextY)});
    }
  }
  if (finish < 0) return null;
  const route = [];
  for (let key = finish; key >= 0; key = previous[key]) route.push(pointFor(key));
  return cleanRoute(route.reverse());
}

function attachmentPointOnSide(id, side, neighborId) {
  if (edgeSide(id, neighborId) === side) return attachmentPoint(id, side, neighborId);
  const node = box(id), neighbor = box(neighborId);
  const verticalSide = side === "left" || side === "right";
  const length = verticalSide ? node.b - node.t : node.r - node.l;
  const padding = Math.min(18, length / 4);
  const neighborCenter = verticalSide
    ? (neighbor.t + neighbor.b) / 2 - node.t
    : (neighbor.l + neighbor.r) / 2 - node.l;
  const offset = Math.max(padding, Math.min(length - padding, neighborCenter));
  if (side === "left") return {x: node.l, y: node.t + offset};
  if (side === "right") return {x: node.r, y: node.t + offset};
  if (side === "top") return {x: node.l + offset, y: node.t};
  return {x: node.l + offset, y: node.b};
}

function sideChoices(id, neighborId) {
  const preferred = edgeSide(id, neighborId);
  const sides = ["left", "right", "top", "bottom"];
  const sideDistance = side => {
    const node = box(id), neighbor = box(neighborId);
    const neighborCenter = {x: (neighbor.l + neighbor.r) / 2, y: (neighbor.t + neighbor.b) / 2};
    const anchors = {
      left: {x: node.l, y: (node.t + node.b) / 2},
      right: {x: node.r, y: (node.t + node.b) / 2},
      top: {x: (node.l + node.r) / 2, y: node.t},
      bottom: {x: (node.l + node.r) / 2, y: node.b}
    };
    return Math.abs(anchors[side].x - neighborCenter.x) + Math.abs(anchors[side].y - neighborCenter.y);
  };
  return [preferred, ...sides.filter(side => side !== preferred)
    .sort((a, b) => sideDistance(a) - sideDistance(b))];
}

function connectionGeometry(sourceId, targetId, reservedPaths = []) {
  const sourceSides = sideChoices(sourceId, targetId);
  const targetSides = sideChoices(targetId, sourceId);
  const headLength = 11, headHalfWidth = 4.5;
  const escapeLength = 18;
  const boxObstacles = NODES.filter(node => node.id !== sourceId && node.id !== targetId)
    .map(node => box(node.id));
  const routeObstacles = [
    ...boxObstacles,
    ...reservedPaths.flatMap(path => pathClearanceBoxes(path))
  ];
  for (const sourceSide of sourceSides) {
    for (const targetSide of targetSides) {
      const start = attachmentPointOnSide(sourceId, sourceSide, targetId);
      const tip = attachmentPointOnSide(targetId, targetSide, sourceId);
      const sourceNormal = edgeNormal(sourceSide);
      const targetNormal = edgeNormal(targetSide);
      const approach = {x: -targetNormal.x, y: -targetNormal.y};
      const base = {x: tip.x - approach.x * headLength, y: tip.y - approach.y * headLength};
      const perpendicular = {x: -approach.y * headHalfWidth, y: approach.x * headHalfWidth};
      const head = `M${tip.x} ${tip.y}L${base.x + perpendicular.x} ${base.y + perpendicular.y}L${base.x - perpendicular.x} ${base.y - perpendicular.y}Z`;
      const escape = {x: start.x + sourceNormal.x * escapeLength, y: start.y + sourceNormal.y * escapeLength};
      const approachPoint = {x: base.x - approach.x * escapeLength, y: base.y - approach.y * escapeLength};
      if (routeObstacles.some(obstacle =>
        routeHitsBox(start, escape, obstacle) || routeHitsBox(approachPoint, base, obstacle))) continue;
      const route = routeAroundBoxes(escape, approachPoint, routeObstacles);
      if (!route) continue;
      const points = [start, ...route, base];
      return {head, line: makeStraightPath(points), reservedPath: [...points, tip]};
    }
  }
  console.error(`Unable to route connection ${sourceId} -> ${targetId}`);
  return null;
}

function draw() {
  svg.replaceChildren();
  const edges = EDGES.slice().sort((x, y) => isOn(x) - isOn(y));
  const heads = [], lines = [];
  const reservedPaths = [];
  edges.forEach(ed => {
    const [a, b] = ed;
    if (!els[a] || !els[b]) return;
    const on = isOn(ed), geometry = connectionGeometry(a, b, on ? reservedPaths : []);
    if (!geometry) return;
    if (on) reservedPaths.push(geometry.reservedPath);
    const head = document.createElementNS(NS, "path");
    head.setAttribute("d", geometry.head);
    head.setAttribute("class", "edge-head" + (on ? " on" : sel ? " off" : ""));
    head.dataset.connection = `${a}->${b}`;
    heads.push(head);
    const line = document.createElementNS(NS, "path");
    line.setAttribute("d", geometry.line);
    line.setAttribute("class", "edge" + (on ? " on" : sel ? " off" : ""));
    line.dataset.connection = `${a}->${b}`;
    lines.push(line);
  });
  svg.append(...heads, ...lines);
}

/* Pan and zoom engine */
function clampAxis(value, viewSize, worldSize) {
  const scaledSize = worldSize * sc;
  if (scaledSize <= viewSize - VIEW_MARGIN * 2) return (viewSize - scaledSize) / 2;
  return Math.min(VIEW_MARGIN, Math.max(viewSize - VIEW_MARGIN - scaledSize, value));
}

const apply = () => {
  const contentWidth = Math.max(WORLD_WIDTH, ...NODES.map(n => els[n.id].offsetLeft + els[n.id].offsetWidth + VIEW_MARGIN));
  const contentHeight = Math.max(WORLD_HEIGHT, ...NODES.map(n => els[n.id].offsetTop + els[n.id].offsetHeight + VIEW_MARGIN));
  tx = clampAxis(tx, stage.clientWidth, contentWidth);
  ty = clampAxis(ty, stage.clientHeight, contentHeight);
  world.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`;
};

function worldSize() {
  return {
    width: Math.max(WORLD_WIDTH, ...NODES.map(n => els[n.id].offsetLeft + els[n.id].offsetWidth + VIEW_MARGIN)),
    height: Math.max(WORLD_HEIGHT, ...NODES.map(n => els[n.id].offsetTop + els[n.id].offsetHeight + VIEW_MARGIN))
  };
}

function fit() {
  if (sel) select(null);
  const size = worldSize();
  sc = Math.max(MIN_SCALE, Math.min(MAX_SCALE,
    (stage.clientWidth - VIEW_MARGIN * 2) / size.width,
    (stage.clientHeight - VIEW_MARGIN * 2) / size.height));
  tx = (stage.clientWidth - size.width * sc) / 2;
  ty = (stage.clientHeight - size.height * sc) / 2;
  apply();
}

function focusSelection(id) {
  const relatedIds = new Set([id]);
  EDGES.forEach(([from, to]) => {
    if (from === id) relatedIds.add(to);
    if (to === id) relatedIds.add(from);
  });
  const relatedNodes = [...relatedIds].map(nodeId => els[nodeId]);
  const bounds = relatedNodes.reduce((result, node) => ({
    left: Math.min(result.left, node.offsetLeft),
    top: Math.min(result.top, node.offsetTop),
    right: Math.max(result.right, node.offsetLeft + node.offsetWidth),
    bottom: Math.max(result.bottom, node.offsetTop + node.offsetHeight)
  }), {left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity});
  const width = bounds.right - bounds.left, height = bounds.bottom - bounds.top;
  sc = Math.max(MIN_SCALE, Math.min(MAX_SCALE,
    (stage.clientWidth - VIEW_MARGIN * 2) / width,
    (stage.clientHeight - VIEW_MARGIN * 2) / height));
  tx = (stage.clientWidth - width * sc) / 2 - bounds.left * sc;
  ty = (stage.clientHeight - height * sc) / 2 - bounds.top * sc;
}

function zoom(f, cx = stage.getBoundingClientRect().left + stage.clientWidth / 2, cy = stage.getBoundingClientRect().top + stage.clientHeight / 2) {
  const rect = stage.getBoundingClientRect();
  cx -= rect.left;
  cy -= rect.top;
  const n = Math.min(MAX_SCALE, Math.max(MIN_SCALE, sc * f));
  tx = cx - (cx - tx) * n / sc;
  ty = cy - (cy - ty) * n / sc;
  sc = n;
  apply();
}

function goTo(targetX) {
  sc = Math.min(MAX_SCALE, Math.max(0.65, sc));
  tx = stage.clientWidth / 2 - (targetX * LAYOUT_X + 160 * LAYOUT_X) * sc;
  apply();
}

let pan = null;
stage.onpointerdown = e => {
  if (e.target.closest(".node")) return;
  pan = { x: e.clientX - tx, y: e.clientY - ty, m: 0 };
  stage.setPointerCapture(e.pointerId);
};

stage.onpointermove = e => {
  if (!pan) return;
  tx = e.clientX - pan.x;
  ty = e.clientY - pan.y;
  pan.m = 1;
  stage.classList.add("drag");
  apply();
};

stage.onpointerup = () => {
  if (pan && !pan.m) select(null);
  pan = null;
  stage.classList.remove("drag");
};

/* Vertical wheel zooms; horizontal trackpad gestures pan across the map. */
stage.onwheel = e => {
  if (e.target.closest(".node.open")) {
    e.stopPropagation();
    return;
  }
  e.preventDefault();
  if (!e.ctrlKey && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
    tx -= e.deltaX * 1.2;
    apply();
    return;
  }
  zoom(Math.exp(-e.deltaY * 0.0015), e.clientX, e.clientY);
};

$("#zi").onclick = () => zoom(1.2);
$("#zo").onclick = () => zoom(1 / 1.2);
$("#fit").onclick = fit;
$("#reset-positions").onclick = () => {
  restoreTemporaryLayout();
  NODES.forEach(n => {
    const initial = INITIAL_POSITIONS.get(n.id);
    setNodePosition(n, initial.x, initial.y);
  });
  arrangeSelectedNeighbors(sel);
  draw();
  apply();
};
let legendPreferenceSet = false;
$("#legend-toggle").onclick = e => {
  legendPreferenceSet = true;
  const collapsed = $("#legend").classList.toggle("collapsed");
  e.currentTarget.setAttribute("aria-expanded", String(!collapsed));
  e.currentTarget.textContent = collapsed ? "Show" : "Hide";
};
function syncMobileLegend() {
  if (legendPreferenceSet) return;
  const collapsed = matchMedia("(max-width: 700px)").matches;
  $("#legend").classList.toggle("collapsed", collapsed);
  $("#legend-toggle").setAttribute("aria-expanded", String(!collapsed));
  $("#legend-toggle").textContent = collapsed ? "Show" : "Hide";
}
$("#header-toggle").onclick = e => {
  const collapsed = $("header").classList.toggle("collapsed");
  e.currentTarget.setAttribute("aria-expanded", String(!collapsed));
  e.currentTarget.textContent = collapsed ? "Show header" : "Minimize top";
  updateStageBounds();
};
const topicSearch = $("#topic-search-input"), searchResults = $("#search-results");
function closeSearchResults() {
  searchResults.hidden = true;
  topicSearch.setAttribute("aria-expanded", "false");
}
function updateSearchResults() {
  const query = topicSearch.value.trim().toLocaleLowerCase();
  searchResults.replaceChildren();
  if (!query) {
    closeSearchResults();
    return;
  }
  const matches = NODES.map(node => {
    const title = node.title.toLocaleLowerCase();
    const detail = [node.when, node.about, node.who, node.results, CATS[node.cat] || node.cat]
      .join(" ").toLocaleLowerCase();
    const titleIndex = title.indexOf(query);
    const detailIndex = detail.indexOf(query);
    return {node, rank: titleIndex === 0 ? 0 : titleIndex > 0 ? 1 : detailIndex >= 0 ? 2 : Infinity};
  }).filter(match => Number.isFinite(match.rank))
    .sort((a, b) => a.rank - b.rank || a.node.title.localeCompare(b.node.title))
    .slice(0, 8);
  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "search-empty";
    empty.textContent = "No matching topics.";
    empty.setAttribute("role", "option");
    searchResults.append(empty);
  } else {
    matches.forEach(({node}) => {
      const result = document.createElement("button");
      result.type = "button";
      result.className = "search-result";
      result.setAttribute("role", "option");
      const title = document.createElement("span");
      title.textContent = node.title;
      const detail = document.createElement("small");
      detail.textContent = `${node.when} · ${chapterLabel(chapterForNode(node))}`;
      result.append(title, detail);
      result.onclick = () => {
        topicSearch.value = node.title;
        closeSearchResults();
        select(node.id);
      };
      searchResults.append(result);
    });
  }
  searchResults.hidden = false;
  topicSearch.setAttribute("aria-expanded", "true");
}
topicSearch.addEventListener("input", updateSearchResults);
topicSearch.addEventListener("focus", updateSearchResults);
topicSearch.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeSearchResults();
    return;
  }
  if (e.key === "ArrowDown" && !searchResults.hidden) {
    e.preventDefault();
    searchResults.querySelector(".search-result")?.focus();
  }
  if (e.key === "Enter" && !searchResults.hidden) {
    e.preventDefault();
    searchResults.querySelector(".search-result")?.click();
  }
});
searchResults.addEventListener("keydown", e => {
  const results = [...searchResults.querySelectorAll(".search-result")];
  const index = results.indexOf(document.activeElement);
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
    const offset = e.key === "ArrowDown" ? 1 : -1;
    results[(index + offset + results.length) % results.length]?.focus();
  } else if (e.key === "Escape") {
    closeSearchResults();
    topicSearch.focus();
  }
});
document.addEventListener("pointerdown", e => {
  if (!e.target.closest("#topic-search")) closeSearchResults();
});
document.onkeydown = e => { if (e.key === "Escape") select(null); };
function updateStageBounds() {
  const previousTop = stage.getBoundingClientRect().top;
  const previousCamera = {sc, tx, ty};
  const headerBottom = $("header").getBoundingClientRect().bottom;
  stage.style.top = `${headerBottom + 24}px`;
  document.documentElement.style.setProperty("--stage-top", `${headerBottom + 24}px`);
  if (!viewInitialized) {
    viewInitialized = true;
    initialView();
    return;
  }
  sc = previousCamera.sc;
  tx = previousCamera.tx;
  ty = previousCamera.ty - (stage.getBoundingClientRect().top - previousTop);
  apply();
}

/* Theme handling */
const root = document.documentElement;
function theme(t) {
  root.dataset.theme = t;
  $("#tg").textContent = t === "dark" ? "Light mode" : "Dark mode";
  try { localStorage.setItem("apwh-theme", t); } catch(e) {}
}
let saved;
try { saved = localStorage.getItem("apwh-theme"); } catch(e) {}
theme(saved === "light" ? "light" : "dark");
$("#tg").onclick = () => theme(root.dataset.theme === "dark" ? "light" : "dark");

$("#legend-items").innerHTML = Object.entries(CATS).map(([k, v]) => `<div style="--c:var(--${k})"><i></i>${v}</div>`).join("");

draw();
syncMobileLegend();
updateStageBounds();
addEventListener("resize", () => {
  syncMobileLegend();
  updateStageBounds();
});
if (document.fonts) document.fonts.ready.then(draw);
