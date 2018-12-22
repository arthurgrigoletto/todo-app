import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: () => ({
    description: 'Ler Livro',
    list: [
      {
        _id: 1,
        description: 'Pagar Fatura do Cartão',
        done: true
      },
      {
        _id: 2,
        description: 'Reunião com a equipe às 10:00',
        done: false
      },
      {
        _id: 3,
        description: 'Consulta Médica na Terça depois do almoço',
        done: false
      }
    ]
  })
});

export default rootReducer;