function getID(){
    let selectElement  = document.getElementById('search');
    let selectElement1 = document.getElementById('search1');
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let selectedOption1 = selectElement1.options[selectElement1.selectedIndex];
    let selectedValue = selectedOption.value;
    let selectedValue1 = selectedOption1.value;
    let visafree= 0;
    let visarequired=0;
    let worldreach;
    if (!selectedValue1){
        selectedValue1 = selectedValue;
    }
    console.log(selectedValue, selectedValue1);
    fetch('/passport_data.json')// Fetch API 
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let countryData = data[selectedValue];
    let countryData1 = data[selectedValue1];
    console.log(countryData);
    console.log(countryData1);
    let keys = Object.keys(countryData);
    let keys1 = Object.keys(countryData1);
    for (let i = 0; i < keys.length; i++) {
        let country = keys[i];
        let country1 = keys1[i];
        let value = countryData[country];
        let value1 = countryData1[country1];
        console.log(country, value);
        if (value ==1 || value1 ==1){
            document.getElementById(country).style.fill = 'green';
            visafree +=1;
        } else {
            document.getElementById(country).style.fill = 'red';
            visarequired +=1;
        }
    }
    document.getElementById('visafree').innerText = `${visafree} countries`;
    document.getElementById('visarequired').innerText = `${visarequired} countries`;
    worldreach = (visafree/193)*100;
    let worldreach1 = worldreach.toFixed(2);
    document.getElementById('worldreach').innerText = `${worldreach1}%`;
  })
  .catch(error => console.error('Error fetching data:', error));
}
