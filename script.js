async function data () {
    let response = await fetch('./data.json');
    let json = await response.json()
    for (let i = 0 ; i < json.length ; i++){
        let title = document.querySelectorAll('.titles')
        let weekCurrent = document.querySelectorAll('.hours')
        let weekPrevious = document.querySelectorAll('.hours-opacity')
        title[i]. textContent = json[i].title;
        weekCurrent[i].textContent = `${json[i].timeframes.weekly.current}hrs`
        weekPrevious[i].textContent = `Last Week - ${json[i].timeframes.weekly.previous}hrs`
    }
}
data()



