export default {
  'global': {
    'Download': {
      'class': 'prodDL',
      'topID': 'downloadTN',
      'name': 'Download',
      'label': [
        'download',
        {
          'lang': 'ru',
          'text': 'Скачать'
        }
      ],
      'link': '/download/'
    },
    'Purchase': {
      'class': 'prodBuy',
      'topID': 'buyTN',
      'name': 'Purchase',
      'label': [
        'purchase',
        {
          'lang': 'ru',
          'text': 'Купить лицензию'
        }
      ],
      'topText': [
        'how to buy',
        {
          'lang': 'ru',
          'text': 'как купить'
        }
      ],
      'link': '/buy/'
    },
    'BuyOnline': {
      'class': 'prodBuyOnline',
      'topID': 'buyOnlineTN',
      'name': 'BuyOnline',
      'label': [
        'buy online',
        {
          'lang': 'ru',
          'text': 'Купить через Интернет'
        }],

      'topText': [
        'order online',
        {
          'lang': 'ru',
          'text': 'купить через Интернет'
        }
      ],
      'link': '/buy/online/'
    },
    'GetQuote': {
      'class': 'prodGetQuote',
      'topID': 'getQuote',
      'name': 'GetQuote',
      'label': [
        'get a quote',
        {
          'lang': 'ru',
          'text': 'Узнать стоимость'
        }],

      'topText': [
        'get a quote',
        {
          'lang': 'ru',
          'text': 'узнать стоимость'
        }
      ],
      'link': '/buy/online/'
    },
    'Forum': {
      'topID': 'forumTN',
      'name': 'Forum',
      'label': [
        'community forum',
        {
          'lang': 'ru',
          'text': 'Форум'
        }
      ],
      'link': [
        '//forum.vypress.com/',
        {
          'lang': 'ru',
          'text': '//forum.vypress.com/rus/'
        }
      ]
    },
    'Support': {
      'topID': 'supportTN',
      'name': 'Support',
      'label': [
        'support',
        {
          'lang': 'ru',
          'text': 'Поддержка'
        }
      ],
      'topText': {
        'lang': 'ru',
        'text': 'Техническая поддержка'
      },
      'link': '/support/'
    },
    'ProductSummary': {
      'name': 'ProductSummary',
      'label': [
        'quick summary of product',
        {
          'lang': 'ru',
          'text': 'Общий обзор'
        }
      ],
      'tabText': [
        'info',
        {
          'lang': 'ru',
          'text': 'Обзор'
        }
      ],
      'tabImage': '/images/pix/tabicon-intro.gif'
    },
    'ProductFeatures': {
      'name': 'ProductFeatures',
      'label': [
        'features & benefits',
        {
          'lang': 'ru',
          'text': 'Основные возможности'
        }
      ],
      'tabText': [
        'features',
        {
          'lang': 'ru',
          'text': 'Функционал'
        }
      ],
      'link': 'features/',
      'tabImage': '/images/pix/tabicon-feat.gif'
    },
    'ProductScreenshots': {
      'name': 'ProductScreenshots',
      'label': [
        'screenshots',
        {
          'lang': 'ru',
          'text': 'Внешний вид'
        }
      ],
      'link': 'screenshots/',
      'tabImage': '/images/pix/tabicon-shots.gif'
    },
    'ProductKB': {
      'name': 'ProductKB',
      'label': [
        'knowledge base',
        {
          'lang': 'ru',
          'text': 'Документация'
        }
      ],
      'tabText': [
        'knowledge base',
        { 'ru': 'Техническая информация' }
      ],
      'link': 'kb/',
      'tabImage': '/images/pix/tabicon-kb.gif'
    },
    'WhatsNew': {
      'name': 'WhatsNew',
      'label': [
        'what’s new',
        {
          'lang': 'ru',
          'text': 'Что нового?'
        }
      ],
      'tabText': [
        'news',
        {
          'lang': 'ru',
          'text': 'Новое'
        }
      ],
      'link': 'whatsnew/',
      'tabImage': '/images/pix/tabicon-new.gif'
    }
  },
  'auvis': [
    {
      'name': 'ProductSummary',
      'tab': 'summary',
      'global': true,
      'link': '/one_way_messenger/'
    },
    {
      'name': 'ProductFeatures',
      'tab': 'features',
      'global': true,
      'link': '/one_way_messenger/features/'
    },
    {
      'name': 'ProductScreenshots',
      'tab': 'screenshots',
      'global': true,
      'link': '/one_way_messenger/screenshots/'
    },
    {
      'name': 'ProductKB',
      'tab': 'kb',
      'global': true,
      'link': '/one_way_messenger/kb/'
    },
  ],
  'messenger': [
    {
      'name': 'ProductSummary',
      'tab': 'summary',
      'global': true,
      'link': '/lan_instant_messenger/'
    },
    {
      'name': 'ProductFeatures',
      'tab': 'features',
      'global': true,
      'link': '/lan_instant_messenger/features/'
    },
    {
      'name': 'ProductScreenshots',
      'tab': 'screenshots',
      'global': true,
      'link': '/lan_instant_messenger/screenshots/'
    },
    {
      'name': 'ProductKB',
      'tab': 'kb',
      'global': true,
      'link': '/lan_instant_messenger/kb/'
    },
  ],
  'chat': [
    {
      'name': 'ProductSummary',
      'tab': 'summary',
      'global': true,
      'link': '/lan_chat/'
    },
    {
      'name': 'ProductFeatures',
      'tab': 'features',
      'global': true,
      'link': '/lan_chat/features/'
    },
    {
      'name': 'ProductScreenshots',
      'tab': 'screenshots',
      'global': true,
      'link': '/lan_chat/screenshots/'
    },
    {
      'name': 'ProductKB',
      'tab': 'kb',
      'global': true,
      'link': '/lan_chat/kb/'
    },
  ],
  'chatterm': [
    {
      'name': 'ProductSummary',
      'tab': 'summary',
      'global': true,
      'link': '/free_chat/'
    },
    {
      'name': 'Tutorial',
      'tab': 'tutorial',
      'global': false,
      'link': '/free_chat/tutorial/',
      'label': [
        'tutorial',
        {
          'lang': 'ru',
          'text': 'Руководство'
        }
      ],
      'tabText': [
        'tutorial',
        {
          'lang': 'ru',
          'text': 'Руководство'
        }
      ],
    },
    {
      'name': 'ProductScreenshots',
      'tab': 'screenshots',
      'global': true,
      'link': '/free_chat/screenshots/'
    },
  ],
  'purchase': [
    {
      'tab': 'buy',
      'tabText': [
        'how to buy',
        {
          'lang': 'ru',
          'text': 'Как купить'
        }],
      'tabImage': '/images/pix/tabicon-intro.gif',
      'link': '/buy/'
    },
    {
      'tab': 'prices',
      'tabText': [
        'price list',
        {
          'lang': 'ru',
          'text': 'Цены и скидки'
        }],
      'tabImage': '/images/pix/tabicon-feat.gif',
      'link': '/buy/prices'
    },
    {
      'tab': 'order',
      'tabText': [
        'order online',
        {
          'lang': 'ru',
          'text': 'Купить через Интернет'
        }],
      'tabImage': '/images/pix/security_icon3.gif',
      'link': '/buy/online/'
    },
    {
      'tab': 'options',
      'tabText': [
        'purchase options',
        {
          'lang': 'ru',
          'text': 'Способы оплаты'
        }],
      'link': '/buy/options/'
    }],
  'corp': [{
    'tab': 'info',
    'tabText': [
      'company info',
      {
        'lang': 'ru',
        'text': 'О компании'
      }],
    'tabImage': '/images/pix/tabicon-intro.gif',
    'link': '/company/'
  }],
  'site': [{
    'tab': 'privacy',
    'tabText': [
      'privacy statement',
     ],
    'tabImage': '/images/pix/tabicon-intro.gif',
    'link': '/info/'
  },
  {
    'tab': 'terms',
    'tabText': [
      'terms & conditions',
      ],
    'tabImage': '/images/pix/tabicon-feat.gif',
    'link': '/info/legal/'
  }],
  'support': [{
    'tab': 'welcome',
    'tabText': [
        'welcome',
       ],
    'tabImage': '/images/pix/tabicon-intro.gif',
    'link': '/support/'
  },
  {
    'name': 'ProductKB',
    'tab': 'kb',
    'global': true,
    'link': '/support/kb/'
  }],
};