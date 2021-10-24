const getSleepHours = day => {
    switch (day){
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 4;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 7;
        break;
      case 'saturday':
        return 5;
        break; 
      case 'sunday':
        return 6;
        break;
      default:
        return 'ERROR!';
    }
  };
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
  
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    if(actualSleepHours === idealSleepHours){
      console.log('User got perfect amount of sleep.');
    }
    else if(actualSleepHours > idealSleepHours){
      console.log('User got more sleep than needed. User overslept by:', idealSleepHours - actualSleepHours, 'hours.');
    }
    else if(actualSleepHours < idealSleepHours){
      console.log('User should get some rest. User underslept by:', actualSleepHours - idealSleepHours, 'hours.' );
    }
    else{
      console.log('Get Fucked!');
    }
  }
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  