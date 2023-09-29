
const accordionData = [
    {
        title: 'banana',
        description: 'A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.'
    },
    {
        title: 'apple',
        description: 'An apple is a round, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. '
    },
    {
        title: 'banana 2',
        description: 'A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.'
    },
    {
        title: 'apple 2',
        description: 'An apple is a round, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. '
    }

]

const accordionWrapper = document.querySelector('.accordion-wrapper')
let selectedItemIndex = -1

accordionData.forEach((accordionItemData, itemIndex) => {
    const accordionItem = document.createElement('div')
    accordionItem.setAttribute('class', 'accordion-item')
    accordionItem.innerHTML = `
        <div class="accordion-item-title">
            <span>${accordionItemData.title}</span>
            <span class="accordion-item-title-icon material-symbols-outlined">
                expand_more
            </span>
         </div>
         <div class="accordion-item-description">
            ${accordionItemData.description}
         </div>
         `

    const accoridionItemTitle = accordionItem.getElementsByClassName('accordion-item-title')[0]
    accoridionItemTitle.addEventListener('click', () => {
        selectedItemIndex = itemIndex;
        const accordionItemDescription = accordionItem.getElementsByClassName('accordion-item-description')[0]
        const accordionItemTitleIcon = accordionItem.getElementsByClassName('accordion-item-title-icon')[0]

        if (getComputedStyle(accordionItemDescription).display === 'none') {
            accordionItemDescription.style.display = 'flex'
            accordionItemTitleIcon.innerText = 'expand_less'
        } else {
            accordionItemDescription.style.display = 'none'
            accordionItemTitleIcon.innerText = 'expand_more'
        }

        closeAllOtherItems()
    })


    accordionWrapper.appendChild(accordionItem)


})

function closeAllOtherItems() {
    const accordionItemsList = accordionWrapper.getElementsByClassName('accordion-item')
    Array.from(accordionItemsList).forEach((accordionItem, index) => {
        if (index !== selectedItemIndex) {
            accordionItem.getElementsByClassName('accordion-item-description')[0].style.display = 'none'
            accordionItem.getElementsByClassName('accordion-item-title-icon')[0].innerText = 'expand_more'
        }
    })
}

