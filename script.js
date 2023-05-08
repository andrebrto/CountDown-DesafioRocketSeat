
const format = (digito) => `0${digito}`.slice(-2);

const updateDisplay = (tempo)=>{
    const days = document.getElementById('days');
    const hours = document.getElementById('hours')
    const minutes = document.getElementById('minutes')
    const seconds = document.getElementById('seconds')

    const qtdSeconds = tempo % 60;
    const qtdMinutes = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHours = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDays = Math.floor(tempo / (60 * 60 * 24));

    days.textContent = format(qtdDays);
    hours.textContent = format(qtdHours);
    minutes.textContent = format(qtdMinutes);
    seconds.textContent = format(qtdSeconds);

}



const countdown = (tempo) => {
    const stopCount = () => clearInterval(id);

    const count = () =>{
        if(tempo === 0 ){
            pararContagem()
        }
        updateDisplay(tempo)
        tempo --;   
    }
    const id = setInterval(count, 1000)
}




countdown(1220000);