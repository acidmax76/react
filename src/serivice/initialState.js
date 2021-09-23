export const InitialState = {
    ingredients: [],
    loadingIngredient: false,
    hasErrorLoadIngredient: false,
    needFetchIngredients: false,
    constructor: {
        bun: null,
        ingredients: []
    },
    orders: []
};
// описание  state :
// {
//  ingredients : [{
//      calories: number - кол-во калориев
//      carbohydrates: - кол-во  углеводов
//      fat: - кол-во жиров
//      image: string ссылка на картинку
//      image_large: string ссылка на большую картинку
//      image_mobile: string ссылка на маленькую картинку
//      name: string - название ингредиента
//      price: number - цена
//      proteins: number - кол-во белков
//      type: string - тип ингредиента "bun"-булка "sauce"- соус "main"-начинки
//      __v: number - пока не понятно
//  }] - список ингредиентов из апи
//  loadingIngredient: bool - стартовала загрузка ингредиентов из апи
//  hasErrorLoadIngredient: bool - ошибка при загрузке
//  needFetchIngredients : bool - надо бы обновить список ингредиентов
//  constructor:{
//      bun:{
//          name: string - имя ингредиента
//          price: number - цена ингредиента
//          image: string - ссылка на изображение
//          lock : bool - можно ли удалить ингредиент
//          id: number - _id в списке ингрединетов
//      } - выбранная булка
//      ingredients : [{
//          name: string - имя ингредиента
//          price: number - цена ингредиента
//          image: string - ссылка на изображение
//          lock : bool - можно ли удалить ингредиент
//          key: string - ид для key в конструкторе
//          id: number - _id в списке ингрединетов
//      }]- массив выбранных ингредиентов для бургера
//  } - данные для конструктора
//  orders:[{
//      name: string - название бургера
//      number:number - номер заказа
//      date: date - дата и время заказа
//  }] - массив заказов
//
//  }