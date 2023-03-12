let monthlyProfitLabels = [ 'January: 5', 'February: -1', 'March: 12' ]
let monthList = document.querySelector('.month-list')

monthlyProfitLabels.forEach(label => {
    let monthLi = document.createElement('li')
    monthLi.textContent = label
    monthList.append(monthLi)
})