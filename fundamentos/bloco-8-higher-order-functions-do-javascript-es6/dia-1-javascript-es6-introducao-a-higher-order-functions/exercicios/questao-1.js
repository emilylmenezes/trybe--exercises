const newEmployees = () => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    employees.id1 = 'Pedro Guerra';
    employees.id2 = 'Luiza Drumond';
    employees.id3 = 'Carla Paiva';
    return employees;
  };

  const email = (nome) => {
      let splited = nome.split(' ');
      let name = splited.join('-');
      let nomeCorrigido = name.toLowerCase();
      return `${nomeCorrigido}@trybe.com`
  }


