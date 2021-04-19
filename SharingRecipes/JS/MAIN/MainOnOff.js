const clockGetId1 = document.getElementById('clock');
const clockGetId2 = document.getElementById('clock_item');
const clockGetId3 = document.getElementById('clock_random');
const clockWeather1 = document.getElementById('js-weather');
const clockWeather2 = document.getElementById('js-weather1');
const clockWeather3 = document.getElementById('js-weather2');

function MainOnOffHanlder(self){
            
    if  (self.value === 'Weather')        
        {self.value = 'Main';        
         clockGetId1.style.display='none',
         clockGetId2.style.display='none',     
         clockGetId3.style.display='none',
         clockWeather1.style.display='flex',
         clockWeather2.style.display='flex',
         clockWeather3.style.display='flex'
    }
    else{self.value = 'Weather';
         clockGetId1.style.display='flex',
         clockGetId2.style.display='flex',  
         clockGetId3.style.display='block',
         clockWeather1.style.display='none',
         clockWeather2.style.display='none',
         clockWeather3.style.display='none'
    }
            
};
