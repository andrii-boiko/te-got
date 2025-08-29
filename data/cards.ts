export interface Card {
  id: string;
  slug: string;
  name: {
    en: string;
    uk: string;
  };
  event: {
    en: string;
    uk: string;
  };
  image: string;
}

// Helper function to generate URL slug from card name
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export const cards: Card[] = [
  {
    id: "plot_01",
    slug: "banished-to-the-watch",
    name: {
      en: "Banished to the Watch",
      uk: "Вигнаний на стіну"
    },
    event: {
      en: "Gain 3 gold and move a Hero you control alone to Castle Black. If an opponent occupies it, they must retreat.",
      uk: "Отримайте 3 монети і порухайте свого героя в Чорний замок. Якщо опонент окупував цей домен, він повинен відступити"
    },
    image: "/images/plot/plot_01.png"
  },
  {
    id: "plot_02",
    slug: "spoils-of-war",
    name: {
      en: "Spoils of War",
      uk: "Воєнна здобич"
    },
    event: {
      en: "Gain 6 gold. Each other player gains 2 gold.",
      uk: "Отримайте 6 монет. Інші гравці отримують 2 монети"
    },
    image: "/images/plot/plot_02.png"
  },
  {
    id: "plot_03",
    slug: "unjust-trial",
    name: {
      en: "Unjust Trial",
      uk: "Несправедливий суд"
    },
    event: {
      en: "The player who controls King's Landing MUST lose 4 gold. If that player does not have 4 gold, their army there must retreat. (Cannot be used in battle.)",
      uk: "Гравець який контролює Королівську гавань повинен втратити 4 монети. Якщо цей гравець не має 4 монет, його армія повинна відступити (відступ не може повинен почати нову битву)"
    },
    image: "/images/plot/plot_03.png"
  },
  {
    id: "plot_04",
    slug: "the-kings-roads",
    name: {
      en: "The King's Roads",
      uk: "Королівські дороги"
    },
    event: {
      en: "Perform 2 separate movements and gain 3 gold if neither results in a battle.",
      uk: "Зіграйте дві окремі дії маршу і отримайте 3 монети якщо жодна не привела до битви"
    },
    image: "/images/plot/plot_04.png"
  },
  {
    id: "plot_05",
    slug: "honor-from-your-allies",
    name: {
      en: "Honor from your Allies",
      uk: "Честь ваших союзників"
    },
    event: {
      en: "Gain 1 gold for each Power Token, including the Crown, in your Ally Pool.",
      uk: "Отримайте 1 монету за кожен жетон сили, включно з залізним троном, у вашому пулі союзників"
    },
    image: "/images/plot/plot_05.png"
  },
  {
    id: "plot_06",
    slug: "forced-march",
    name: {
      en: "Forced March",
      uk: "Вимушений марш"
    },
    event: {
      en: "Move directly from any domain you control to any domain within 4 domains to start a battle. Gain +2 for the battle.",
      uk: "Рухайтеся прямо з домену який ви контролюєте до будь-якого іншого домену в межах чотирьох доменів щоб почати битву. Отримайте +2 до сили в битві"
    },
    image: "/images/plot/plot_06.png"
  },
  {
    id: "plot_07",
    slug: "enlist-the-faceless-men",
    name: {
      en: "Enlist the Faceless Men",
      uk: "Залучення безликих людей"
    },
    event: {
      en: "Pay 2 gold to eliminate any 1 Power Token from any domain.",
      uk: "Заплатіть 2 монети щоб знищити один будь-який жетон сили з будь-якого регіону"
    },
    image: "/images/plot/plot_07.png"
  },
  {
    id: "plot_08",
    slug: "vendetta",
    name: {
      en: "Vendetta",
      uk: "Помста"
    },
    event: {
      en: "Pay 4 gold to return up to 2 Power Tokens of the same house from another player's Ally Pool to the non-player house's Token Pool.",
      uk: "Заплатіть 4 монети щоб повернути до двох жетонів сили одного будинку з пулу союзників іншого гравця до відповідного пулу"
    },
    image: "/images/plot/plot_08.png"
  },
  {
    id: "plot_09",
    slug: "oberyn-martell",
    name: {
      en: "Oberyn Martell",
      uk: "Оберин Мартелл"
    },
    event: {
      en: "Move a Hero you control, and no other units, to any domain to start a battle. The Hero counts as 4 combat strength for this battle.",
      uk: "Порухайте героя, якого ви контролюєте, без армії, в будь-який домен щоб почати битву. Герой вартує 4 сили в цій битві"
    },
    image: "/images/plot/plot_09.png"
  },
  {
    id: "plot_10",
    slug: "drain-the-coffers",
    name: {
      en: "Drain the Coffers",
      uk: "Осушити скарбницю"
    },
    event: {
      en: "Gain 6 gold, only if you have 0 gold.",
      uk: "Отримайте 6 монет, лише якщо ви маєте нуль монет"
    },
    image: "/images/plot/plot_10.png"
  },
  {
    id: "plot_11",
    slug: "crushing-siege",
    name: {
      en: "Crushing Siege",
      uk: "Нищівна облога"
    },
    event: {
      en: "Perform a movement that results in a battle in a castle domain or King's Landing (you still must control 3 castles). Gain +3 for the battle.",
      uk: "Зіграйте дію марш яка приведе до битви в домені з замком, або в королівській гавані (ви досі повинні контролювати 3 замки, щоб виконати це). Отримайте +3 сили в битві"
    },
    image: "/images/plot/plot_11.png"
  },
  {
    id: "plot_12",
    slug: "press-into-battle",
    name: {
      en: "Press into Battle",
      uk: "Тиск в битві"
    },
    event: {
      en: "Perform a movement or march that starts a battle with a non-player house. If you win, take the normal Power Token from the domain, plus 1 more from that Token Pool into your Ally Pool.",
      uk: "Зіграйте дію марш або плавання щоб почати битву з не-гравцем. Якщо ви виграєте, візьміть як зазвичай жетон з домену плюс ще один з запасу цього будинку в свій пул союзників"
    },
    image: "/images/plot/plot_12.png"
  },
  {
    id: "plot_13",
    slug: "a-loyal-squire",
    name: {
      en: "A Loyal Squire",
      uk: "Вірний сквайр"
    },
    event: {
      en: "Gain 2 gold and perform a mustering for 1 Power Token for free, placing it in the domain of a Hero you control.",
      uk: "Отримайте 2 монети і зіграйте дію рекрутинг для одного жетона сили безкоштовно, і розмістіть його в домені з вашим героєм"
    },
    image: "/images/plot/plot_13.png"
  },
  {
    id: "plot_14",
    slug: "little-fingers-influence",
    name: {
      en: "Little Finger's Influence",
      uk: "Вплив Мізинця"
    },
    event: {
      en: "Return any 1 Power Token from your Ally Pool to its house's Token Pool, and then take 2 Power Tokens from another non-player house's Token Pool into your Ally Pool.",
      uk: "Поверніть будь-який 1 жетон сили з вашого пулу союзників до його будинку, а потім візьміть 2 жетони сили з іншого будинку не-гравця в ваш пул союзників"
    },
    image: "/images/plot/plot_14.png"
  },
  {
    id: "plot_15",
    slug: "olenna-tyrell",
    name: {
      en: "Olenna Tyrell",
      uk: "Оленна Тайрелл"
    },
    event: {
      en: "Gain 2 gold and then perform a conversion. Then, return that played Plot Card back to your hand.",
      uk: "Отримайте 2 монети і виконайте дію змова. Потім поверніть зіграну карту змови в руку"
    },
    image: "/images/plot/plot_15.png"
  },
  {
    id: "plot_16",
    slug: "safe-passage",
    name: {
      en: "Safe Passage",
      uk: "Безпечна подорож"
    },
    event: {
      en: "Pay 3 gold to gain 1 Victory Point. You may do this up to 3 times.",
      uk: "Заплатіть 3 монети щоб отримати 1 переможне очко. Ви можете зробити це до 3 разів"
    },
    image: "/images/plot/plot_16.png"
  },
  {
    id: "plot_17",
    slug: "a-noble-sacrifice",
    name: {
      en: "A Noble Sacrifice",
      uk: "Шляхетна жертва"
    },
    event: {
      en: "Eliminate 1 of your own Power Tokens from any domain and gain 1 Victory Point plus double its Force Track reward after returning.",
      uk: "Знищіть один з ваших жетонів сили з будь-якого домену і отримайте 1 переможне очко та подвойте нагороду за повернення жетона на ваш трек"
    },
    image: "/images/plot/plot_17.png"
  },
  {
    id: "plot_18",
    slug: "critical-battle",
    name: {
      en: "Critical Battle",
      uk: "Критична битва"
    },
    event: {
      en: "Perform a movement or march to start a battle. You may play up to 2 Plot Cards for their combat modifiers. (The defender may only play 1.)",
      uk: "Зіграйте дію марш або плавання щоб почати битву. Ви можете зіграти до двох карт змови для їхніх показників битви (оборонець досі може зіграти лише одну)"
    },
    image: "/images/plot/plot_18.png"
  },
  {
    id: "plot_19",
    slug: "poisoning",
    name: {
      en: "Poisoning",
      uk: "Отруєння"
    },
    event: {
      en: "Eliminate 1 Power Token controlled by another player in any domain. To do this, you must have at least 1 token in your Ally Pool of a non-player house currently allied with that player. (The Iron Throne counts for this.)",
      uk: "Знищіть 1 жетон сили який контролює інший гравець в будь-якому домені. Щоб зробити це, ви повинні мати принаймі 1 жетон в вашому пулі союзників будинку, який перебуває на даний момент в альянсі з цим гравцем (залізний трон також враховується)"
    },
    image: "/images/plot/plot_19.png"
  },
  {
    id: "plot_20",
    slug: "inspire-your-army",
    name: {
      en: "Inspire your Army",
      uk: "Надихнути свою армію"
    },
    event: {
      en: "If you have at least 7 Power Tokens on your Force Track, perform a mustering for free.",
      uk: "Якщо ви маєте принаймі 7 жетонів сили на своєму треку, зіграйте безкоштовну дію рекрутингу"
    },
    image: "/images/plot/plot_20.png"
  },
  {
    id: "plot_21",
    slug: "lone-wolf",
    name: {
      en: "Lone Wolf",
      uk: "Самотній вовк"
    },
    event: {
      en: "Gain 1 Victory Point and 2 gold if you control a Hero that's the only unit in their domain.",
      uk: "Отримайте 1 очко і дві монети якщо ти контролюєш героя який є єдиним юнітом в його домені"
    },
    image: "/images/plot/plot_21.png"
  },
  {
    id: "plot_22",
    slug: "the-element-of-surprise",
    name: {
      en: "The Element of Surprise",
      uk: "Момент несподіванки"
    },
    event: {
      en: "Choose a domain (except King's Landing) adjacent to a domain you control. Eliminate 1 Power Token there (if possible) and then any remaining units there must retreat.",
      uk: "Виберіть домен (окрім Королівської Гавані) прилеглий до домену який ви контролюєте. Знищіть один жетон сили тут (якщо можливо) а потім ті ворожі юніти, які залишилися, повинні відступити"
    },
    image: "/images/plot/plot_22.png"
  },
  {
    id: "plot_23",
    slug: "instruction-in-swords",
    name: {
      en: "Instruction in Swords",
      uk: "Навчання мечам"
    },
    event: {
      en: "Gain 1 Victory Point if your house's Hero's card is in your hand. If your Hero's card has been played, return it to your hand and gain 2 gold.",
      uk: "Отримайте 1 переможне очко якщо карта Героя вашого будинку в вашій руці. Якщо карта вашого героя зіграна, поверніть її собі на руку і отримайте 2 золота"
    },
    image: "/images/plot/plot_23.png"
  },
  {
    id: "plot_24",
    slug: "assault-by-sea",
    name: {
      en: "Assault by Sea",
      uk: "Напад морем"
    },
    event: {
      en: "Move your units from any one domain to any other domain to start a battle. Gain +1 for the battle.",
      uk: "Порухайте ваших юнітів з будь-якого домену до іншого домену щоб почати битву.+1 сили в битві"
    },
    image: "/images/plot/plot_24.png"
  },
  {
    id: "plot_25",
    slug: "a-timely-alliance",
    name: {
      en: "A Timely Alliance",
      uk: "Тимчасовий альянс"
    },
    event: {
      en: "Perform a conversion. Then, if you have at least 2 Power Tokens and the most for any house, gain one such alliance now.",
      uk: "Виконайте дію змова. Потім, якщо ви маєте принаймі 2 жетони сили певного будинку і найбільше серед всіх гравців, отримайте 1 альянс відразу"
    },
    image: "/images/plot/plot_25.png"
  },
  {
    id: "plot_26",
    slug: "faith-militant-returns",
    name: {
      en: "Faith Militant Returns",
      uk: "Повернення войовничої віри"
    },
    event: {
      en: "Gain 3 gold and move a Hero you control alone to your house's starting domain. If an opponent occupies it, they must retreat.",
      uk: "Отримайте 3 монети і порухайте героя якого ви контролюєте до вашого стартового домену. Якщо суперник окупував цей домен, він повинен відступити"
    },
    image: "/images/plot/plot_26.png"
  },
  {
    id: "plot_27",
    slug: "red-wedding",
    name: {
      en: "Red Wedding",
      uk: "Червоне весілля"
    },
    event: {
      en: "Return any number of Power Tokens from your Ally Pool to their house's Token Pool. Gain 1 Victory Point for every 2 Power Tokens you lose.",
      uk: "Поверніть будь-яку кількість жетонів сили з вашого пулу союзників до їхніх будинків. Отримайте 1 переможне очко за кожні два таких жетони"
    },
    image: "/images/plot/plot_27.png"
  },
  {
    id: "plot_28",
    slug: "muster-your-troops",
    name: {
      en: "Muster your Troops",
      uk: "Зібрати твоє військо"
    },
    event: {
      en: "Perform up to 2 musterings.",
      uk: "Зіграйте до двох дій рекрутингу"
    },
    image: "/images/plot/plot_28.png"
  },
  {
    id: "plot_29",
    slug: "tariffs-from-your-subjects",
    name: {
      en: "Tariffs from your Subjects",
      uk: "Податки з вашого товару"
    },
    event: {
      en: "Gain 1 gold for each domain you control, and gain 1 additional gold if you control King's Landing.",
      uk: "Отримайте 1 монету за кожен домен який контролюєте, і отримайте 1 додаткову монету якщо контролюєте Королівську гавань"
    },
    image: "/images/plot/plot_29.png"
  },
  {
    id: "plot_30",
    slug: "complex-negotiations",
    name: {
      en: "Complex Negotiations",
      uk: "Комплексні переговори"
    },
    event: {
      en: "Take 1 Power Token from another player's Ally Pool, and give them 1 Power Token from your Ally Pool.",
      uk: "Візьміть 1 жетон сили з пулу союзників іншого гравця, і віддайте йому 1 зі свого пулу"
    },
    image: "/images/plot/plot_30.png"
  },
  {
    id: "plot_31",
    slug: "kingslayer",
    name: {
      en: "Kingslayer",
      uk: "Вбивця короля"
    },
    event: {
      en: "Lose 1 Victory Point to eliminate any 1 unit (may be a Hero) of the player with highest Victory Point score (cannot be tied) from any domain. That player doesn't gain the bonus(es) from returning the unit.",
      uk: "Втратьте 1 переможне очко, і вбийте 1 юніта (навіть героя) в іншого гравця з найбільшою кількістю переможних балів (нічия не може бути) з будь-якого домену. Цей гравець не отримує бонусів від повернення юніта на його трек"
    },
    image: "/images/plot/plot_31.png"
  },
  {
    id: "plot_32",
    slug: "a-betrayers-gift",
    name: {
      en: "A Betrayer's Gift",
      uk: "Подарунок зрадника"
    },
    event: {
      en: "Return a Power Token from your Ally Pool to its house's Token Pool to gain 1 Victory Point and 4 gold.",
      uk: "Поверніть жетон сили з вашого пулу союзників до його будинку, і отримайте 1 очко та 4 монети"
    },
    image: "/images/plot/plot_32.png"
  },
  {
    id: "plot_33",
    slug: "raid-the-gold-lines",
    name: {
      en: "Raid the Gold Lines",
      uk: "Рейд на золоті лінії"
    },
    event: {
      en: "Gain 3 gold, and then move a Hero you control alone to The Reach. If an opponent occupies it, they must retreat.",
      uk: "Отримайте 3 монети, і порухайте вашого героя в Річ, якщо опонент окупував цей домен, він повинен відступити"
    },
    image: "/images/plot/plot_33.png"
  },
  {
    id: "plot_34",
    slug: "captured-at-sea",
    name: {
      en: "Captured at Sea",
      uk: "Захоплені в морі"
    },
    event: {
      en: "Move to any domain that has a single Power Token. If it's from a player house, eliminate it. If it's from a non-player house, place it in your Ally Pool.",
      uk: "Порухайтеся в будь-який домен з одним ворожим юнітом. Якщо це жетон гравця, знищте його. Якщо жетон не гравця, заберіть його в свій пул союзників"
    },
    image: "/images/plot/plot_34.png"
  },
  {
    id: "plot_35",
    slug: "attempted-coup",
    name: {
      en: "Attempted Coup",
      uk: "Спроба державного перевороту"
    },
    event: {
      en: "Return any 1 Power Token from your Ally Pool to its house's Token Pool, and then perform a mustering for free.",
      uk: "Поверніть будь-який 1 жетон сили з вашого пулу союзників до відповідного будинку, і після цього виконайте дію рекрутування безкоштовно"
    },
    image: "/images/plot/plot_35.png"
  },
  {
    id: "plot_36",
    slug: "cache-of-wildfire",
    name: {
      en: "Cache of Wildfire",
      uk: "Таємниця дикого вогню"
    },
    event: {
      en: "Eliminate any 1 Power Token in King's Landing.",
      uk: "Знищіть 1 жетон сили в Королівській гавані"
    },
    image: "/images/plot/plot_36.png"
  },
  {
    id: "plot_37",
    slug: "trial-by-combat",
    name: {
      en: "Trial by Combat",
      uk: "Cуд битвою"
    },
    event: {
      en: "Move a single one of your units to any domain with a single enemy unit to start a battle. Gain +1 additional Victory Point for the battle.",
      uk: "Порухайте одного вашого юніта до будь-якого домену з одним ворожим воїном щоб розпочати битву. Отримайте 1 додаткове очко за битву"
    },
    image: "/images/plot/plot_37.png"
  },
  {
    id: "plot_38",
    slug: "vision-of-the-three-eyed-raven",
    name: {
      en: "Vision of the Three-Eyed Raven",
      uk: "Бачення триокого Ворона"
    },
    event: {
      en: "Perform a conversion, and then you may perform another conversion.",
      uk: "Виконайте дію шепіт, потім можете виконати іншу подію"
    },
    image: "/images/plot/plot_38.png"
  },
  {
    id: "plot_39",
    slug: "jaime-lannister",
    name: {
      en: "Jaime Lannister",
      uk: "Джеймі Ланністер"
    },
    event: {
      en: "Perform a movement or march with an army led by a Hero that you control to start a battle. If it's in a castle domain or King's Landing, gain +1 for the battle.",
      uk: "Виконайте дію марш або плавання армією з героєм якого ви контролюєте щоб почати битву. Якщо це домен з замком або Королівська гавань, отримайте +1 в битві"
    },
    image: "/images/plot/plot_39.png"
  },
  {
    id: "plot_40",
    slug: "a-secret-heir",
    name: {
      en: "A Secret Heir",
      uk: "Таємний спадкоємець"
    },
    event: {
      en: "Remove 1 Power Token from the Ally Pool of the player who controls King's Landing and return it to its house's Token Pool.",
      uk: "Приберіть один жетон сили з пулу союзників гравця який контролює Королівську гавань, і поверніть в запас відповідного будинку"
    },
    image: "/images/plot/plot_40.png"
  },
  {
    id: "plot_41",
    slug: "hire-a-master-of-whispers",
    name: {
      en: "Hire a Master of Whispers",
      uk: "Найняти майстра нашіптування"
    },
    event: {
      en: "Perform a conversion. Each conversion for this action are free.",
      uk: "Зіграйте змову. Кожна змова для цієї дії безкоштовна"
    },
    image: "/images/plot/plot_41.png"
  },
  {
    id: "plot_42",
    slug: "maester-training",
    name: {
      en: "Maester Training",
      uk: "Навчання мейстра"
    },
    event: {
      en: "Perform up to 2 conversions.",
      uk: "Зіграйте дію шепіт до двох разів"
    },
    image: "/images/plot/plot_42.png"
  },
  {
    id: "plot_43",
    slug: "master-of-the-seas",
    name: {
      en: "Master of the Seas",
      uk: "Володар морів"
    },
    event: {
      en: "Perform a march, moving up to 4 Map Cards. For each Map Card that you pass through, gain 1 gold.",
      uk: "Розіграйте дію плавання, порухайтеся на відстань до 4 карт. За кожну карту яку пройшли отримайте 1 монету"
    },
    image: "/images/plot/plot_43.png"
  },
  {
    id: "plot_44",
    slug: "a-debt-to-the-iron-bank",
    name: {
      en: "A Debt to the Iron Bank",
      uk: "Борг залізної скарбниці"
    },
    event: {
      en: "Lose 1 Victory Point to max out your gold.",
      uk: "Втратьте одне переможне очко і підніміть до максимуму своє золото"
    },
    image: "/images/plot/plot_44.png"
  },
  {
    id: "plot_45",
    slug: "euron-greyjoy",
    name: {
      en: "Euron Greyjoy",
      uk: "Ейрон Грейджой"
    },
    event: {
      en: "Move an army led by a Hero that you control to any domain. If this results in a battle with another player, steal 1 gold from them first, if possible.",
      uk: "Порухайте армію з героєм якого ви контролюєте в будь-який домен. Якщо це приводить до битви з іншим гравцем, вкрадіть 1 монету в нього спочатку, якщо можливо"
    },
    image: "/images/plot/plot_45.png"
  },
  {
    id: "plot_46",
    slug: "robert-baratheon",
    name: {
      en: "Robert Baratheon",
      uk: "Роберт Баратеон"
    },
    event: {
      en: "If you control 4 or more castle domains, place your Gold Coin on the maximum space on its track.",
      uk: "Якщо ви контролюєте 4 або більше замки, помістіть золоту монету на найвищу поділку"
    },
    image: "/images/plot/plot_46.png"
  },
  {
    id: "plot_47",
    slug: "hire-sellswords",
    name: {
      en: "Hire Sellswords",
      uk: "Найняти перекупного меча"
    },
    event: {
      en: "Instead of paying the normal costs, pay 3 gold to perform a mustering, placing 2 tokens from your Force Track.",
      uk: "Замість того щоб платити нормальну ціну, сплатіть 3 і зіграйте дію рекрутування, виставивши 2 жетони з вашого треку"
    },
    image: "/images/plot/plot_47.png"
  },
  {
    id: "plot_48",
    slug: "hoster-tully",
    name: {
      en: "Hoster Tully",
      uk: "Гостер Таллі"
    },
    event: {
      en: "Gain 2 gold, and then take 1 Power Token from the Token Pool of a non-player house that you are not allied with and place it in your Ally Pool.",
      uk: "Отримайте 2 монети, потім отримайте 1 жетон сили з запасу не гравця з якими ви не в союзі і помістіть його в свій пул союзників"
    },
    image: "/images/plot/plot_48.png"
  },
  {
    id: "plot_49",
    slug: "eddard-stark",
    name: {
      en: "Eddard Stark",
      uk: "Еддард Старк"
    },
    event: {
      en: "Gain 2 gold, and then you may perform a mustering.",
      uk: "Отримайте 2 монети, потім зіграйте дію рекрутування"
    },
    image: "/images/plot/plot_49.png"
  },
  {
    id: "plot_50",
    slug: "tribute-to-the-lord-of-light",
    name: {
      en: "Tribute to the Lord of Light",
      uk: "Пожертва богу світла"
    },
    event: {
      en: "Eliminate any 1 unit of your house from any domain, and then perform a movement or march to start a battle. Gain +3 for the battle.",
      uk: "Знищіть 1 юніта вашого будинку з будь-якого домену, а потім виконайте дію маршу або плавання щоб розпочати битву. Отримайте +3 сили в битві"
    },
    image: "/images/plot/plot_50.png"
  },
  {
    id: "plot_51",
    slug: "dealmaking",
    name: {
      en: "Dealmaking",
      uk: "Угода"
    },
    event: {
      en: "Take 1 Power Token from 1 or 2 non-player houses' Token Pools, paying 1 gold for each, and add them to your Ally Pool.",
      uk: "Візьміть 1 жетон сили в одного або двох не-гравців, заплатіть 1 монету за кожен і додайте до свого пулу союзників"
    },
    image: "/images/plot/plot_51.png"
  },
  {
    id: "plot_52",
    slug: "uniting-the-bloodlines",
    name: {
      en: "Uniting the Bloodlines",
      uk: "Об'єднати кревні узи"
    },
    event: {
      en: "Gain 2 gold, plus 2 additional gold for each non-player Alliance you have.",
      uk: "Отримайте 2 монети, +2 додаткові монети за кожен альянс, який ви маєте"
    },
    image: "/images/plot/plot_52.png"
  }
];