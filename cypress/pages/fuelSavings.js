const fuelSavings = {
    base_url: 'http://localhost:3000/fuel-savings',
    newMpg: 'input[name=newMpg',
    tradeMpg: 'input[name=tradeMpg]',
    newPpg: 'input[name=newPpg]',
    tradePpg: 'input[name=tradePpg]',
    milesDriven:'input[name=milesDriven]',
    dropMilesDriven: 'select[name=milesDrivenTimeframe]',
    dateModified:':nth-child(6) > :nth-child(2)',
    save:'[type="submit"]',
    results: 'td[class="fuel-savings-label"]'    

};

export {fuelSavings};




