const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const pedidoPerson =  order.order.delivery.deliveryPerson;
    const pessoaDestino = order.name;
    const telefone = order.phoneNumber;
    const rua = order.address.street;
    const numero = order.address.number;
    const complemento = order.address.apartment;

    console.log(`Olá, ${pedidoPerson}, entrega para: ${pessoaDestino}, Telefone: ${telefone}, ${rua}, ${numero}, ${complemento}`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const pessoaCompradora = order.name = 'Luiz Silva';
    const pedido = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;
    const total = order.payment.total = '50';
  
    console.log(`Olá ${pessoaCompradora}, o total do seu pedido de ${pedido[0]}, ${pedido[1]} e ${bebida} é R$ ${total},00.`);
  
  }
  
  orderModifier(order);