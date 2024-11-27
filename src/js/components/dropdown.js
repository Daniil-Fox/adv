const dropdown = document.querySelector('.dropdown')


if(dropdown){
  const list = dropdown.querySelector('.dropdown>ul')
  const listItems = list?.querySelectorAll('.dropdown>ul>li')

  listItems.forEach(el => {
    const btn = el.querySelector('span')
    const childListSecondLVL = el.querySelector('.dropdown>ul>li>ul')

    if(el.classList.contains('active')){

      const inside = childListSecondLVL.querySelector('li.active ul')
      inside.style.maxHeight = inside.scrollHeight + 'px'

      setTimeout(() => {
        childListSecondLVL.style.maxHeight = childListSecondLVL.scrollHeight + 'px'
      }, 300)
    }
    btn.addEventListener('click', e => {
      let isActive = el.classList.toggle('active')

      childListSecondLVL.style.maxHeight = isActive ? childListSecondLVL.scrollHeight + 'px' : null

      const childrenItems = childListSecondLVL.querySelectorAll('.dropdown>ul>li>ul>li')
      if(childrenItems && childrenItems.length > 0){
        childrenItems.forEach(el => {
          const link = el.querySelector('.dropdown>ul>li>ul>li>a')
          link.addEventListener('click', e => {
            e.preventDefault()
            const newList = el.querySelector('ul')
            if(newList){
              link.addEventListener('click', e => {
                location.href = link.href
              })
              el.classList.add('active')
              newList.style.maxHeight = newList.scrollHeight + 'px'
              setTimeout(() => {
                childListSecondLVL.style.maxHeight = childListSecondLVL.scrollHeight + 'px'
              }, 300)
            } else {
              location.href = link.href
            }
          })
        })
      }
    })
  })

}
